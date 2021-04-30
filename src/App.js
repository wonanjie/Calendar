import {useEffect,useReducer,useState} from 'react'
import reducer from './store'
import MyCalendar from './components/MyCalendar'
import './App.less';

function App() {
  const [state,dispath]=useReducer(reducer,{count:1})
  const { count } = state;
  return (
    <div>
      <MyCalendar/>
    </div>
  );
}

export default App;
