import React, { useState } from "react";

const UseStatewithArray = () => {
 const [colors, setColors] = useState([]);

 const [colorName, setColorName] = useState('');

    const updateArrayHandler = () => {
        setColors(
            [...colors, {id: colors.length, color: colorName}]
        )
    }

  return (
    <div>
        <h1>All colors</h1>
      {
          colors.map(ele=> (
              <h1 key={ele.id}>ID: {ele.id} -- Color: {ele.color}</h1>
          ))
      }
      <input
      type= 'text'
      value={colorName}
      onChange={(e)=> setColorName(e.target.value)}
      >
      </input>
      <button onClick={updateArrayHandler}>Add Something</button>
    </div>
  );
};

export default UseStatewithArray;
