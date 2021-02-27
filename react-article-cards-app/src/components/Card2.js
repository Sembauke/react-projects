import React from 'react'
import Draggable from 'react-draggable'

function Card2(props) {
    return (
        <Draggable>
                <div className={"card-2-wrapper"}>
                            
                            <svg width="425" height="250"  className={"card-2-image"} version="1.1" viewBox="0  425 250" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                   <image href={props.imageUrl} x="0" y="0"/> 
                            </svg>
                            <div className={"card-2-info"}>
                                <h1 className={"card-2-title"}>{props.title}</h1>
                                <p className={"card-2-sample"}>When striving towards a goal, you must focus on what you want to obtain and avoid the impulse to go back to what you know and to what is comfortable</p>
                                <p className={"card-2-author"}>by <a href={props.authorLink}>{props.author}</a></p>
                                <button className={"card-2-button"}>Read Article</button>
                            </div>
                           
                       </div>
        </Draggable>
    
    )
}

export default Card2
