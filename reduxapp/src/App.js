import logo from './logo.svg';
import './App.css';
import ProductContainer from "./component/ProductContainer";
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from './component/Container';
// import HookMobileContainer from './component/HookMobileContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Container mobile/> */}
        {/* <Container /> */}
        <ProductContainer />
        {/* <HookMobileContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
