import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DragDropContext } from "@hello-pangea/dnd";

import { getLists, getCards, updateCardList } from "../services/api";
import ListColumn from "../components/ListColumn";

function BoardPage() {

      const { id } = useParams();

      const [lists, setLists] = useState([]);

      useEffect(() => {
            loadBoard();
      }, []);

      const loadBoard = async () => {

            const listsData = await getLists(id);

            const listsWithCards = await Promise.all(

                  listsData.map(async (list) => {

                        const cards = await getCards(list._id);

                        return {
                              ...list,
                              cards
                        };

                  })

            );

            setLists(listsWithCards);

      };

      /* HANDLE DRAG */

      const handleDragEnd = async (result) => {

            const { source, destination } = result;

            if (!destination) return;

            const sourceListIndex = lists.findIndex(
                  l => l._id === source.droppableId
            );

            const destListIndex = lists.findIndex(
                  l => l._id === destination.droppableId
            );

            const sourceList = lists[sourceListIndex];
            const destList = lists[destListIndex];

            const movedCard = sourceList.cards[source.index];

            /* UPDATE MONGODB */

            await updateCardList(
                  movedCard._id,
                  destination.droppableId
            );

            /* UPDATE FRONTEND STATE */

            const newSourceCards = [...sourceList.cards];
            newSourceCards.splice(source.index, 1);

            const newDestCards = [...destList.cards];
            newDestCards.splice(destination.index, 0, movedCard);

            const newLists = [...lists];

            newLists[sourceListIndex] = {
                  ...sourceList,
                  cards: newSourceCards
            };

            newLists[destListIndex] = {
                  ...destList,
                  cards: newDestCards
            };

            setLists(newLists);

      };

      return (

            <DragDropContext onDragEnd={handleDragEnd}>

                  <div style={{ display: "flex", gap: "20px" }}>

                        {lists.map((list) => (

                              <ListColumn
                                    key={list._id}
                                    list={list}
                              />

                        ))}

                  </div>

            </DragDropContext>

      );

}

export default BoardPage;