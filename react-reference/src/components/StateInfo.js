import React , {Component} from 'react';
import '../App.css';
class StateInfo extends Component{
render(){
    return(
        <div className='App'>
          <h1>React State</h1>
          <p>Properties are defined when components are created, whether by JSX or by pure JavaScript. <br></br>
          State, on the other hand, is only seen on the inside of component definitions. This is the first,<br></br>
          and most important difference between the two.<br></br>
          When you think of properties, you should be thinking of component initialisation. <br></br>
          When you think of state, you should think of an internal data-set which affects the rendering of components.<br></br>
          There are ways to validate the presence and type of properties, but there is no such mechanism for state. You, as the developer of a component,<br></br>
           are the only person who should know what state your component needs, and the correct data types which should be accepted/provided.<br></br>
           State should be considered private data.</p>
        </div>

    )
    }
}



export default StateInfo;