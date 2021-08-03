import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { buyMobile } from "../redux/mobile/mobileActions";

function HookMobileContainer(props) {
   const {totalLaptop, totalMobile} = useSelector((state)=> state)
   const dispatch = useDispatch();
  return (
    <div>
      <h1>Total Mobile from Hooks: {totalMobile} - {totalLaptop} </h1>
      <button onClick={()=> dispatch(buyMobile())}>Buy Mobile</button>
    </div>
  );
}

export default HookMobileContainer;
