import { Component } from "react";

class ClassCard extends Component {

    constructor(props) {
        super(props)


        this.state = {
            title: props.title,
            desc: props.desc,
            number: 0
        }

    }

    // state = {
    //     title: this.props.title,
    //     desc: this.props.desc,
    //     number: 0
    // }
    
    render() {

   const { title, desc, number } = this.state;

        return (
            <div>
              <h1>{ title }</h1>

              <img src={this.props.img } alt="" /><br />

              <p>{ desc }</p>
        
        
              <button onClick={() => { this.setState( (revValue) => ({ title: 'Desc ' +Math.random() })  ) }  } id="btn">Change Title</button>

              <button onClick={() => { this.setState( (revValue) => ({ desc: 'Desc ' +Math.random() })  ) }  } id="btn">Change Desc</button>
      
             <span onClick={ 
                 
                 () => {
                     for(let i=0; i<10; i++) {

                        this.setState(
                     
                            function(value, props) { return { number: value.number + 1 } }
                     
                     
                        ) 

                     }
                 
                 
                
            
            
            
            }
             
             
             }> { number } </span>
            </div>
          )
    }

  
}

  export default ClassCard;