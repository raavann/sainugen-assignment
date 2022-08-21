import { useState } from "react";
const Contact = (props) => {
  const items = ['title', 'name', 'contactNo', 'email', 'designation', 'tgUsername'];
  const [data, setData] = useState([]);

  const addContactsCards=()=>{
    setData([...data,{}]);
  }

  const handleInput=(e,i)=>{
    const newdata = [...data];
    newdata[i][e.target.name] = e.target.value;
    setData(newdata);
    props.changeContacts(data);
  }

  return (
    <div className="card">
      <div className="grp1">
        <div className="card-header">
            <img alt='' src='img/3669372_contact_ic_mail_icon.svg'></img>
            <h1>Contact person</h1>
        </div>
        <button onClick={()=>addContactsCards()} className='btn sp'><img alt='' src="img/8673597_ic_fluent_person_add_filled_icon.svg"></img> ADD new</button>
      </div>
      <div className="card-body">
        {data && data.map((dt, i) => (
          <div key={i} className="contact-card">
            <div className="contact-card-header">
              <img alt='' src="img/103539_edit_icon.svg"></img>
            </div>
      
            <table> 
              <colgroup><col style={{width: '50%'}} /><col style={{width: '50%'}} /></colgroup>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="item">
                    <td className='title'>{item}</td>
                    <td><input name={item} onChange={event => {handleInput(event,i)}} value={data[i][item]} placeholder={"Type " + item} type='text' className="value"></input></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;