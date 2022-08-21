import './dashboard.css';
import Business from '../Business';
import Variable from '../Variable';
import Contact from '../Contact';

import axios from 'axios';
import { useState } from 'react';

const Dashboard = () => {

  // const [values, setValues] = useState({
  //   account:"",contacts:[],variableValues:{},internName:"rv"
  // });
  const [account, setAccount] = useState({});
  const [contacts, setContacts] = useState([]);
  const [variableValues, setVariableValues] = useState({});

  const submitHandler = (e) =>{
    // e.preventDefault();
    const data = {
      account,contacts,variableValues,internName:'anurudhmhatre'
    };

    axios.post("https://internship.leadtorev.com/clients/customers/add",data)
      .then(res => {console.log(res)}).catch(err => {console.log(err)});
    console.log(data);
  }

  return (
    <div id="dashboard">
      <div id="dashboard-header">
          <div className='profile'>
            <span className='txt'>AM</span>
          </div>
      </div>

      <div className='contents'>
        <div className='content-head'>
          <span>Add Customer</span>
          <button onClick={()=>{submitHandler()}} className='btn'>Add Customer</button>
        </div>
        <Business changeAccount = {account => setAccount(account)}/>
        <div className='content-head'>
          <Variable changeVariable={variableValues => setVariableValues(variableValues)}/>
          <Contact changeContacts ={contacts => setContacts(contacts)}/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard;