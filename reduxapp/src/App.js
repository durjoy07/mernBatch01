import logo from './logo.svg';
import './App.css';
import MobileContainer from './component/MobileContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookMobileContainer from './component/HookMobileContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MobileContainer />
        <HookMobileContainer />
      </div>
    </Provider>
  );
}

export default App;
