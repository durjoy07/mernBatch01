import React, { useState } from "react";

const UseStatewithObject = () => {
    const [info, setInfo] = useState({firstName: '', lastName: '', age: ''});
  return (
    <div>
      <h1> First Name: {info.firstName} </h1>
      <h1> Last Name: {info.lastName} </h1>
      <h1> Age: {info.age} </h1>

      <label>First Name</label>
      <input
        type="text"
        value={info.firstName}
        onChange={(e) => setInfo({...info, firstName: e.target.value })}
      ></input>
      <br></br>

      <label>Last Name</label>
      <input
        type="text"
        value={info.lastName}
        onChange={(e) => setInfo({...info, lastName: e.target.value })}
      ></input>
      <br></br>

      <label>Age</label>
      <input
        type="number"
        value={info.age}
        onChange={(e) => setInfo({...info, age: e.target.value })}
      ></input>
      <br></br>
    </div>
  );
};

export default UseStatewithObject;
