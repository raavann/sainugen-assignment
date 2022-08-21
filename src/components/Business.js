import { useState } from "react";

const Business = (props) => {
  const [values, setValues] = useState({
    name : "",type:"",contactNo:"", emailId:""
  });
  const handleInput = (e) => {
    const newValues = {...values};
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
    props.changeAccount(values);
  }
  return (
    <div className="card">
      <div className="card-header">
          <img alt='' src='img/3669372_contact_ic_mail_icon.svg'></img>
          <h1>Business Account details</h1>
      </div>

      <div className="card-body">
          <div className='grp1'>
              <input name="name" onChange={event => {handleInput(event)}} type='text' placeholder='Account Name'></input>
              <input name="type" onChange={event => {handleInput(event)}} type='text' placeholder='Account Type'></input>
          </div>
          <div className='grp1'>
              <input  name="contactNo" onChange={event => {handleInput(event)}}type='text' placeholder='Contact Number'></input>
              <input name="emailId" onChange={event => {handleInput(event)}} type='text' placeholder='Email ID'></input>
          </div>
      </div>
    </div>
  );
};

export default Business;