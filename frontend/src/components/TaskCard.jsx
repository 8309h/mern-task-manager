function TaskCard({ card }) {

      return (

            <div style={{
                  background: "white",
                  padding: "8px",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  cursor: "pointer"
            }}>
                  {card.title}
            </div>

      );

}

export default TaskCard;