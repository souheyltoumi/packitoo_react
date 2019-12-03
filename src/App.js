import React from 'react';
import './App.css';
import BriefForm from './components/BriefForm'
import BriefList from './components/BriefList'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider  store={store}>
      
    <div className="App">

        <BriefForm></BriefForm>
        <hr></hr>
        <BriefList></BriefList>
    </div>
    </Provider>
  );
}

export default App;
