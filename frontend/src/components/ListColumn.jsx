import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function ListColumn({ list }) {

      return (

            <div style={{
                  width: "250px",
                  background: "#f4f5f7",
                  padding: "10px"
            }}>

                  <h3>{list.title}</h3>

                  <Droppable droppableId={list._id}>

                        {(provided) => (

                              <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                              >

                                    {list.cards.map((card, index) => (

                                          <Draggable
                                                key={card._id}
                                                draggableId={card._id}
                                                index={index}
                                          >

                                                {(provided) => (

                                                      <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                      >

                                                            <TaskCard card={card} />

                                                      </div>

                                                )}

                                          </Draggable>

                                    ))}

                                    {provided.placeholder}

                              </div>

                        )}

                  </Droppable>

            </div>

      );

}

export default ListColumn;