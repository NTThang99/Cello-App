import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "../../../utils/sorts";
import { DndContext, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from "react";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE _COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE CARD'
}



function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([])

    //Cùng một thời điểm chỉ có 1 thằng được kéo thả hoặc column hoặc là card
    const [activeDragItemId, setActiveDragItemId] = useState(null)

    const [activeDragItemType, setActiveDragItemType] = useState(null)

    const [activeDragItemData, setActiveDragItemData] = useState(null)


    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])
    // Tìm 1 cái column theo cardId
    const findColumnByCardID = (cardID) => {
        //Cần phải lưu ý nên dùng c.cards thay vì c.cardOderIds bởi vì ở bước handleDragOver chúng ta sẽ làm dữ liệu cho cards hoàn chỉnh rồi mới tạo ra cardOderIds mới.
        return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardID))
    }

    //Trigger khi bắt đầu kéo (drag) một phần tử
    const handleDragStart = (event) => {
        // console.log('handleDragStart: ', event)
        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)
    }
    //Trigger trong quá trình kéo (drag) một phần tử
    const handleDragOver = (event) => {

        //khi không làm gì thêm nếu đang kéo column
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN)
            return
        //Còn nếu kéo card thì xử lú thêm để có thể kéo card qua lại giữa các columns
        console.log('handleDragOver: ', event)
        const { active, over } = event

        if (!active || !over) return
        // activeDraggingCardId là card đang được kéo
        const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
        //overCardId là card đang được tương tác trên hoặc dưới so với cái card được kéo ở trên.
        const { id: overCardId } = over
        //Tìm 2 cái column theo cardId
        const activeColumn = findColumnByCardID(activeDraggingCardId)
        const overColumn = findColumnByCardID(overCardId)
        // Nếu không tồn tại một trong 2 column thì không làm gì cả, tránh crash
        if (!activeColumn || !orderedColumns) return
        // Đoạn này sẽ xư lí logic khi kéo card qua 2 column khác nhau, còn nếu kéo card trong chính column ban đầu của nó thì không làm gì. Vì cậy đang là đoạn xử lí lúc kéo (handleDragOver), còn xử lí lúc kéo xong xuôi thì nó lại là vấn đề ở (handleDragEnd)
        if (activeColumn?._id !== overColumn?._id) {
            setOrderedColumns(prevColumns => {
                const overCardIndex = overColumn?.cards?.findIndex(card => card?._id === overCardId)
                //logic tính toán cho cardIndex mới 
                let newCardIndex
                const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;
                const modifier = isBelowOverItem ? 1 : 0;
                newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;
                const nextColumns = cloneDeep(prevColumns)
                const nextActiveColumn = nextColumns.find(column => column?._id === activeColumn?._id)
                const nextOverColumn = nextColumns.find(column => column?._id === overColumn?._id)
                if (nextActiveColumn){
                    // Xóa card ở cái column active ( cũng có thể hiểu đây là column cũ cái lúc mà kéo card ra khỏi nó để sang column khác )
                    nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card?._id !== activeDraggingCardId)
                    // Cập nhật lại mảng cardOderIds cho chuẩn với dữ liệu
                    nextActiveColumn.cardOderIds = nextActiveColumn.cards.map(card => card?._id)
                }

                if(nextOverColumn){
                    // Kiểm tra xem card đang kéo nó có tồn tại ở overColumn chưa nếu có thì cần xóa nó trước khi xử lí
                    nextOverColumn.cards = nextOverColumn.cards.filter(card => card?._id !== activeDraggingCardId)
                    // Tiếp theo là thêm cái card đang kéo vào over column theo vị trí mong muốn
                    nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex , 0 , activeDraggingCardData)
                    // Cập nhật lại mnagr cardOderIds cho chuẩn với dũ liệu
                    nextOverColumn.cardOderIds = nextOverColumn.cards.map(card => card?._id)
                }
                return nextColumns
            })
        }


    }


    const handleDragEnd = (event) => {
        // console.log('handleDragEnd: ', event)

        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {

            return
        }
        const { active, over } = event
        // kiểm tra xem thử nếu không tồn tại over(kéo ra ngoài thì return không bị lỗi )
        if (!active || !over) return
        //Nếu vị trí sau khi kéo thả khác với víj trí 
        if (active.id !== over.id) {
            // lấy vị trí cũ (từ thằng active)
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
            // lấy vị trí mới (từ thằng over)
            const newIndex = orderedColumns.findIndex(c => c._id === over.id)
            // Dùng arrayMove để sắp xếp lại mảng Columns ban đầu
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
            // 2 cái console dữ liệu này dùng để xử lí gọi API
            // const dndOrderedColumnIds = dndOrderedColumns.map(c => c._id)
            // console.log('dndOrderedColumn: ', dndOrderedColumns);
            // console.log('dndOrderedColumnIds: ', dndOrderedColumnIds);

            // Cập nhật lại state của columns
            setOrderedColumns(dndOrderedColumns)
        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
    }


    const customDropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
    }



    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <Box sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                width: '100%',
                height: (theme) => theme.trello.boardContentHeight,
                p: '10px 0'
            }}>
                <ListColumns columns={orderedColumns} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeDragItemType && null}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
                </DragOverlay>
            </Box>
        </DndContext>
    );
};

export default BoardContent;