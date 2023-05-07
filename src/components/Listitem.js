function Listitem (props) {
    return(
        <>
        <div className="row my-2 col-sm-9 d-flex align-items-center justify-content-between mx-2">
        <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
        <button className="bg-danger text-white col-sm-1 p-0 mx-4 h-50" onClick={()=>{props.handleDelete(props.id)}} >X</button>
        </div>
        </>
    )
}

export default Listitem;