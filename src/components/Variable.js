import { useState } from "react";

const Variable = (props) => {
  const [variable, setVariable] = useState([]);

  const handleInput = (e,i) => {
    const newvariable = [...variable];
    newvariable[i][e.target.name] = e.target.value;
    setVariable(newvariable);

    let newv = Object.assign({}, ...variable.map((x) => ({[x.key]: x.value})));
    props.changeVariable(newv);

  };

  const addVariable = () => {
    setVariable([...variable, {}]);
  };

  return (
    <div className="card">
      <div className="grp1">
        <div className="card-header">
            <img alt='' src='img/8665876_square_root_variable_icon.svg'></img>
            <h1>Variables</h1>
        </div>
        <button onClick={()=>addVariable()} className='btn'>ADD VARIABLE</button>
      </div>

      <div className="card-body">
        { variable && variable.map((v,i)=>(
          <div key={i} className='grp1'>
            <input onChange={event => {handleInput(event,i)}}  name='key' type='text' placeholder='Variable Key'></input>
            <input onChange={event => {handleInput(event,i)}}  name='value' type='text' placeholder='Variable Value'></input>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Variable;