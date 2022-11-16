function Student(props)
{
    return(
        <div style={{ backgroundColor: "skyblue", margin: 50}}>
            <h1> Hello {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h4> Address: {props.other.address}</h4>
            <h4>
                Mobile: {props.other.mobile}
            </h4>
        </div>
    )
}
export default Student