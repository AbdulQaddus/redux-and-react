import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Provider} from 'react-redux';
import store from './redux/store'
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import HooksIceCreamContainer from './Components/HooksIceCreamContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <UserContainer/>
        {/* <HooksCakeContainer/>
        <CakeContainer/>
        <HooksIceCreamContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/> */}
        <img src={logo} className="App-logo" alt="logo" />    
    </div>
    </Provider>
  );
}

export default App;
