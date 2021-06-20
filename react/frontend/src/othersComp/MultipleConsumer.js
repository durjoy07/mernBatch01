import React, { Component } from 'react'
import { ProductConsumer } from './context/ProductContext';
import { UserConsumer } from './context/UserContext';

class MultipleConsumer extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (value)=> (
                        <ProductConsumer>
                            {
                                (value1)=> (
                                    <div>
                                        <h1>my name is: {value.name}</h1>
                                        <h2>Product Info: {value1}</h2>
                                    </div>
                                )
                            }
                        </ProductConsumer>
                    )
                }
            </UserConsumer>
        )
    }
}
export default MultipleConsumer;