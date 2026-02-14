import type {CardElement} from "../types";

function Card({cardProperties}: {cardProperties: CardElement}) {

  return(
    <div style={{
      maxWidth: "20rem",
      backgroundColor: "black",
      color: "white", 
      padding: "2rem",
      borderRadius: "1rem",
      }}>


      <h1>{cardProperties.title}</h1>
      <p>{cardProperties.description}</p>
    </div>
  )
}

export default Card;
 
