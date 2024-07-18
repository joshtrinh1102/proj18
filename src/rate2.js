import React from "react";
import {FaStar} from "react-icons/fa"


export default function RateMovieButton2(){
    

    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)
    return(
        <>
    {[...Array(5)].map((star, index)=>{
        const currentRate = index + 1
        return (

            <>
            
            <label>
                <input type="radio" name="rate"/>   
                value={currentRate}
                onClick = {()=> setRating(currentRate)}
                <FaStar size={50}
                color={currentRate <=(hover || rating) ? "yellow": "grey"}
                />
            </label>

            </>
        )
      })}
      </>)
    
}