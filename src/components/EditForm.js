import React from 'react'

export const EditForm = (props) => {
    
  return (
    <div   className="d-flex flex-column justify-content-center align-items-center" style={{width:'300px',zIndex:'1',position:'absolute',left:'34rem',top:'7rem'}}>
        <form  style={{width:'300px'}}>
  <div className="mb-3 " >
    <label for="exampleInputEmail1" className="form-label">Profile Link</label>
    <input type="text" value={props.profile} onChange={(e)=>{props.setProfile(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3 " >
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input value={props.FName} onChange={(e)=>{props.setFName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Last Name</label>
    <input value={props.LName} type="text" onChange={(e)=>{props.setLName(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" value={props.email} onChange={(e)=>{props.setEmail(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <div className="allbtn d-flex justify-content-evenly align-items-center">
  <button onClick={()=>{props.subMitEdited(props.id)}}  className="btn btn-success">Submit</button>
  <button type="submit" onClick={()=>{props.Setshow(false)}} className="btn btn-primary">Cancel</button>
  </div>
</form>
    </div>
  )
}
