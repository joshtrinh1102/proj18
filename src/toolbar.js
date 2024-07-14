function Button ({onClick,children}) {
    return (
        <button onClick={e =>{
            e.stopPropagation();
            onClick();
        }}>
        {children}
        </button>
    )
}
    
export default function Toolbar(){
    return(
        <div className="Toolbar" onClick={()=>{
            alert("You touched the Toolbar")
        }}> 
            <Button onClick={()=>alert("Analyzing Data")}>
            Analyze Data
            </Button>

            <Button onClick={()=>alert("Uploading Data")}>
            Uploading 
            </Button>
        </div>
    )
}
