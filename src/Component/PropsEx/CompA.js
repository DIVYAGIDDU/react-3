import CompB from "./CompB";

let CompA=()=>{
    let eid='101';
    let ename='divya';
    let eloc=['banglore','mysore'];
    let edetails = { email: "rahul@pm.com", sal: "No Salary" }
    return  <div>
       <h1>CompA example</h1>
    
    <CompB id={eid} name={ename} loc={eloc} />
    </div>
}
export default CompA