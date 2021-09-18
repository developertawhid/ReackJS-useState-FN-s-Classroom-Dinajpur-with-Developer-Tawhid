import React from "react";

function Card(props) {

    const [ state, setState ] = React.useState({
        title: props.title,
        desc: props.desc
    })

    return (
      <div>
        <h1>{ state.title }</h1>
        <img src={props.img} alt="" /><br />
        <p>{ state.desc }</p>
  
        <button onClick={ 
            
            function() { setState(   (preValue) =>   ( { ...preValue , desc: 'Desc ' +Math.random() } ) )  

            
            }     
    
    
    } id="btn">Change Title</button>
  
        <button onClick={function() { setState( { ...state , desc: 'Desc ' +Math.random() } )}} id="btn">Change Desc</button>

      </div>
    )
  
  }

  export default Card;