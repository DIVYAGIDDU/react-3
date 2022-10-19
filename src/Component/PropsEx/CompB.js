
let CompB=(props)=>{
    return <div>
        <h1>CompB example</h1>
    <pre>{JSON.stringify(props)}</pre>
    <h2>Employee id:{props.id}</h2>
     <h2>Employee name:{props.name}</h2>
    <h2>Employee loc:{props.loc}</h2>
    <h2>Employee details:{props.details}</h2> 
    </div>
}
export default CompB