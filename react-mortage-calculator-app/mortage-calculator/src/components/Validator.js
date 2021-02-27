import React from 'react'

function Validator(props) {

   if(props.equity >= props.houseCost){
       return("You don't need a lone");
   } else {
       return props.houseCost - props.equity;
   }
}

export default Validator
