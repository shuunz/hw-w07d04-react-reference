import React , {Component} from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';
import '../App.css';

class ComponentInfo extends Component {
    render(){
        return(
            <div className='App'>
                <h1>Components and Props</h1>
                <p>Components let you split the UI into independent, reusable pieces, and think about <br></br>
                    each piece in isolation. This page provides an introduction to the idea of components.<br></br>
                    Conceptually, components are like JavaScript functions. They accept arbitrary inputs<br></br>
                     (called “props”) and return React elements describing what should appear on the screen.
                    </p>
            <PropsInfo/>
            <StateInfo/>
            <LifeCycleInfo/>
            </div>
        )
    }
}
export default ComponentInfo;