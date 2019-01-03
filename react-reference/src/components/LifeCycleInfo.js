import React , {Component} from 'react';
import '../App.css';
class LifeCycleInfo extends Component{
render(){
    return(
        <div className='App'>
          <h1>LifeCycle </h1>
          <p>eact lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page.<br></br> 
          To define a React component class, you need to extend React.Component:<br></br>
          The only method you must define in a React.Component subclass is called render(). All the other methods described on this page are optional<br></br>
          Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet.<br></br> 
          In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.
          </p>
        </div>

    )
    }
}



export default LifeCycleInfo;