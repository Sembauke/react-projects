import React from 'react'
import Draggable from 'react-draggable'

function Card3(props) {



    return (
        <Draggable>
        <div className={"card-3-wrapper"}>
        <div className={"card-3-image-container"}>
            <div>              
                <svg width="197" height="197"  className={"card-3-image-1"}  version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <Draggable>
                             <image href={props.imageUrl1} x="0" y="0"/> 
                        </Draggable>
                </svg>
            </div>
            <div>
                <svg width="318" height="197"  className={"card-3-image-2"} version="1.1" viewBox="0  425 250" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <Draggable>
                        <image href={props.imageUrl2} x="0" y="0"/> 
                    </Draggable>
                      
                </svg>
            </div>
             <div >
                
                <svg width="197" height="197" className={"card-3-image-3"} version="1.1" viewBox="0  425 250" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                         <Draggable>
                             <image href={props.imageUrl3} x="0" y="0"/> 
                        </Draggable>
                </svg>
            </div>
        </div>
        <div className={"card-3-info"}>
                 <h1 className={"card-3-title"}>{props.title}</h1>
                 <p className={"card-3-sample"}>When striving towards a goal, you must focus on what you want to obtain and avoid the impulse to go back to what you know and to what is comfortable</p>   
                 <p className={"card-3-author"}>by <a href={props.authorLink}>{props.author}</a></p>
       </div>
    </div>
    </Draggable>
    )
}

export default Card3
