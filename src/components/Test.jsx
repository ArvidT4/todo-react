import React, { useContext } from 'react'
import testContext from './textContext';

export default function Test() {
    const {test,setTest} = useContext(testContext);
  
    function onSubmit(e) {
        e.preventDefault();
        setTest(e.target.title.value);
        console.log(test);
    }

  return (
    <div>
      Hello
      {test}
      <br/>
      <form onSubmit={onSubmit}>
        <input type="text" name="title"/>
        <input type="submit"/>
      </form>
      
    </div>
  )
}
