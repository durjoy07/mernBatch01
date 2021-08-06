import React from 'react'
import { connect } from 'react-redux'
import { buyMobile } from "../redux/mobile/mobileActions";
import { buyLaptop } from "../redux/laptop/laptopActions";

function Container(props) {
    return (
        <div>
            <h1>Item: {props.totalItem}</h1>
            <button onClick={()=> props.buyItem()}>Buy</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.mobile ? state.mobile.totalMobile : state.laptop.totalLaptop;
  return {
    totalItem: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.mobile ? () => dispatch(buyMobile()) : () => dispatch(buyLaptop())
  
    return {
    buyItem: dispatchFunction
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
