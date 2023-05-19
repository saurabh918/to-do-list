function Listitem (props) {
    return(
        <>
        <div className="row my-2 col-sm-9 d-flex align-items-center justify-content-between mx-2">
        <li className="shadow d-flex p-2 my-2 col-sm-6">{props.value}</li>
        <button className="bg-dark text-white col-sm-1 p-0 h-50" onClick={()=>props.handleEdit(props.value,props.id)}>&#9998;</button>
        <button className="bg-danger text-white col-sm-1 p-0 h-50" onClick={()=>{props.handleDelete(props.id)}} >X</button>
        <button className="bg-success text-white col-sm-1 p-0 h-50" onClick={()=>{props.handleStatus(props.id)}}>{props.completed ? "\u2713" : "\u2610"} </button>
        
        </div>
        </>
    )
}

export default Listitem;