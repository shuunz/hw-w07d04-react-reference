import React , {Component} from 'react';
import '../App.css';
class PropsInfo extends Component{
render(){
    return(
        <div className='App'>
          <h1>Props Overview</h1>
          <p>The main difference between state and props is that props are immutable.<br></br>
           This is why the container component should define the state that can be updated and changed,<br></br>
            while the child components should only pass data from the state using props.<br></br>
            Using Props<br></br>
            When we need immutable data in our component, we can just add props to reactDOM.render() <br></br>
            function in main.js and use it inside our component.App.jsx</p>
        </div>

    )
    }
}



export default PropsInfo;