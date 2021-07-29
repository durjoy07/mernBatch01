import React, {useState, useCallback} from 'react'
import Header from './Header'
import IncrementPrice from './IcrementPrice'
import ProductPrice from './ProductPrice'

function MainComp() {
    const [laptopPrice, setLaptopPrice] = useState(80000);
    const [mobilePrice, setMobilePrice] = useState(30000);

    const laptopPriceHandler = useCallback(()=> {
        setLaptopPrice(laptopPrice + 5000)
    }, [laptopPrice])

    const mobilePriceHandler = useCallback(()=> {
        setMobilePrice(mobilePrice + 1000);
    }, [mobilePrice])

    return (
      <div>
        <Header />
        <ProductPrice title="Laptop" price={laptopPrice} />
        <IncrementPrice handler={laptopPriceHandler}>Increment Laptop Price</IncrementPrice>
        <ProductPrice title="Mobile" price={mobilePrice} />
        <IncrementPrice handler={mobilePriceHandler}>Increment Mobile Price </IncrementPrice>
      </div>
    );
}

export default MainComp
