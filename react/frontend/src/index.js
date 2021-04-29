import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './component/Greet';
// import Hello from './component/Hello';
// import Hi from './component/Hi';
// import MyClassComp from './component/MyClassComp';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyClassComp /> */}
    {/* <Hello />
    <Hi /> */}
    <Greet name="Next Toppers" age={10}> 
      <h1>I am Next Topper</h1>
      <h2>hello h2</h2>
     </Greet>
    <Greet name="Sakib" age={12}> 
      <button>
        click me
      </button>
    </Greet>
    <Greet name="Tamim" age={14}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
