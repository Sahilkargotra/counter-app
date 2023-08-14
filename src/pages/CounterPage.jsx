import { useState } from "react";
import { Button } from "../components/Button"
import {Message} from "../components/Message"
import './CounterPage.css'

export const CounterPage = () =>{
    console.log('counter Fn call')
//Hook {state}
const[count,setCount] = useState(0);


const updateCount = (val) => {
    if(val === '+'){
        setCount(count +1);
    }
    else {
    setCount(count-1);
    }
console.log('count is',count );
}
return(
  <div className="container">
<Message classname ='alert alert-danger' msg = "Counter App"/>
<Message value = {count} classname = 'alert alert-success' msg ='Counter value is '/>
<Button fn = {updateCount} val = "-" classname = "btn btn-outline-danger me-5"/>
<Button fn = {updateCount} val = "+" classname = "btn btn-outline-success "/>
</div>)

}