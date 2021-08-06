import React, {useState} from 'react'
import { connect } from 'react-redux';
import { buyMobile } from '../redux/mobile/mobileActions'
import { buyLaptop } from '../redux/laptop/laptopActions'

function ProductContainer(props) {
    const [item, setItem] = useState(1)

    return (
      <div>
        <h1>Total Mobile: {props.totalMobile} </h1>
        <input type='text' onChange={(e)=>setItem(e.target.value)}></input>
        <button onClick={()=> props.buyMobile(item)}>Buy Mobile</button>

        <h1>***********************</h1>
        
        <h1>Total Laptop: {props.totalLaptop} </h1>
        <button onClick={props.buyLaptop}>Buy Laptop</button>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        totalMobile: state.mobile.totalMobile,
        totalLaptop: state.laptop.totalLaptop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMobile: (item)=> dispatch(buyMobile(item)),
        buyLaptop: ()=> dispatch(buyLaptop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);