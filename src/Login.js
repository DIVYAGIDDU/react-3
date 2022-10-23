import React from "react";
let Login=()=>{
    return(
        <div className="container mt-5">
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
        <div className="col-md-4">
        <form action="" onSubmit={submitHandler}>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="ple enter email" name="email" />
        </div>
        <div class="form-group">
        <input typ="submit" value="login" className="btn btn-sucess" />
        </div>
        </form>
        </div>
        </div>
        </div>
    )
}
export default Login