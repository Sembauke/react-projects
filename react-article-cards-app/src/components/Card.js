import React from 'react'
import Draggable from 'react-draggable'
import { BsBookmark } from 'react-icons/bs'

function Card(props) {
    return (
        <Draggable>
             <div className={"card-1-wrapper"}>
         
         <div className={"card-1-image-center"}>
             <svg width="197" height="197"  className={"card-1-image"} version="1.1" viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                 <image href={props.imageUrl} x="0" y="0"/> 
             </svg>
         </div>
        
         <div className={"card-1-info"}>
             <h1 className={"card-1-title"}>{props.title}</h1>
             <p className={"card-1-author"}>by <a href={props.authorLink}>{props.author}</a></p>
         </div>  
         <BsBookmark className={"bookmark-icon"}/>
     </div>
        </Draggable>
       
    )
}

export default Card
