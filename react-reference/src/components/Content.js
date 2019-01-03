import React , {Component} from 'react';
import ComponentInfo from './ComponentInfo';
import JSXInfo from './JSXInfo';
import '../App.css';

class Content extends Component{
render(){
    return(
        <div className='App'>
           <ComponentInfo/>
           <JSXInfo/>
        </div>

    )
    }
}



export default Content;