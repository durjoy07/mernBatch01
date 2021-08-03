import React from 'react'
import { connect } from 'react-redux';
import { buyMobile } from '../redux/mobile/mobileActions'

function MobileContainer(props) {
    return (
        <div>
            <h1>Total Mobile: {props.totalMobile} </h1>
            <button onClick={props.buyMobile}>Buy Mobile</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalMobile: state.totalMobile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMobile: ()=> dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);