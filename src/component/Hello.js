import React from 'react';

const Hello = () => {
 //   return (
  //      <div className='dummyClass'>
    //        <h1> Hello preeti</h1>
     //   </div>
    //)
    return React.createElement(
        'div',
        {id: 'hello', class: 'dummyClass'},
    
    React.createElement('h1', null,' Hello mom')
    )

}

export default Hello 