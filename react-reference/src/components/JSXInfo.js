import React , {Component} from 'react';
import '../App.css';
class JSXInfo extends Component{
render(){
    return(
        <div className='App'>
         <h1>JSX</h1>
         <p>The first part of a JSX tag determines the type of the React element.

            Capitalized types indicate that the JSX tag is referring to a React component.<br></br>
            These tags get compiled into a direct reference to the named variable, so if you use the JSX Foo / expression,<br></br>
            Foo must be in scope.</p>
        </div>

    )
    }
}



export default JSXInfo;