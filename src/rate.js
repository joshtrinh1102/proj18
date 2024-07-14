export default function RateMovieButton(){
    function handleClick(){
        alert("Submitted")
    }//event handler
return (
    
    <button onClick={handleClick}>
        Submit
    </button>//return

)
}