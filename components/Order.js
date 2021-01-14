import { render } from '@testing-library/react'
import React from 'react'
import Summary from './Summary'

function Order(props) {
  function handleInput(e){
    props.inputFunction(e.target.name, e.target.value)
console.log(e.target.name, e.target.value)
  }


  return (
    <form>
      <h1>Create a burger!</h1>
      <section className="protein">
        <label htmlFor="patty">What type of protein would you like?</label> <br/>
        <input type="text" name="patty" id="patty"  onChange={handleInput}/>
      </section>
      <hr/>

      <section className="patties">
        <label htmlFor="amount">How many patties would you like?</label><br/>
        <input id="amount" type="number" step="1" name="amount"  onChange={handleInput}/>
      </section>
      <hr/>
      
      <section className="cooked">
        <label htmlFor="doneness">How do you want your patty cooked</label>
        <br/>
        <span>Rare</span>
        <input id="doneness" name="doneness" type="range" min="0" max="5" step="0.5"  onChange={handleInput}/>
        
        <span>Well-Done</span>
      </section>
      <hr/>
      
      <section className="toppings">
        <span>What toppings would you like?</span>
        <br/>
        <input id="lettuce" name="topping" type="checkbox" defaultValue="lettuce"  onChange={handleInput}/>
        <label htmlFor="lettuce">Lettuce</label>
        <input id="tomato" name="topping" type="checkbox" defaultValue="tomato"  onChange={handleInput}/>
        <label htmlFor="tomato">Tomato</label>
        <input id="onion" name="topping" type="checkbox" defaultValue="onion"  onChange={handleInput}/>
        <label htmlFor="onion">Onion</label>
      </section>
      
      <hr/>
      <section className="cheesy">
        <span>Would you like to add cheese?</span>
        <br/>
        <input id="yes" name="cheese" type="radio" defaultValue="yes"  onChange={handleInput}/>
        <label htmlFor="yes">Yes</label>
        <input id="no" name="cheese" type="radio" defaultValue="no"  onChange={handleInput}/>
        <label htmlFor="no">No</label>
      </section>
      
      <hr/>
      <section className="bun-type">
        <label htmlFor="bun">What type of bun would you like?</label> <br/>
        <select id="bun" name="bun" onChange={handleInput}>
          <option defaultValue="sesame">Sesame</option>
          <option defaultValue="potato">Potato</option>
          <option defaultValue="pretzel">Pretzel</option>
        </select>
      </section>
      
      <hr/>
      <section className="sauce-selection">
        <label htmlFor="sauce">What type of sauce would you like?</label>
        <input list="sauces" id="sauce" name="sauce" onChange={handleInput}/>
        <datalist id="sauces">
          <option defaultValue="ketchup"></option>
          <option defaultValue="mayo"></option>
          <option defaultValue="mustard"></option>
        </datalist>
      </section>
      
      <hr/>
      <section className="extra-info">
        <label htmlFor="extra">Anything else you want to add?</label>
        <br/>
        <textarea id="extra" name="extra" rows="3" cols="40" onChange={handleInput}></textarea>
      </section>
      
      <hr/>
      <section className="submission">
        
        <input type="submit" defaultValue="Submit" onClick={props.setSubmit}/>
      </section>
    </form>
    
  )
}




// class Order extends React.Component {
//       constructor(props) {
//       super(props)
      


//     }
//     //  handleInput(e){
//     // this.props.inputFunction(e.target.name, e.target.value)
//     //  console.log(e.target.name, e.target.value)
//     //  }
  

//      handleSubmit(){
//        return <h1>Hello</h1>
//         }

  
//   render() { 
   
//     let hey;
//     if(this.handleSubmit) {
//   hey =<Summary 
//   // amount={this.state.amount}
//   //        doneness={this.state.doneness} topping={this.state.topping} 
//   //        cheese={this.state.cheese} sauce={this.state.sauce}
//   //        extra={this.state.patty}
//        /> 
    
//    } else {
//   hey = <h1>HEEEEEEEEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYY</h1>
//    }
  
//     return (
//       <div>
//     <form onSubmit={this.handleSubmit}>
//       <h1>Ceate a burger!</h1>
//       <section className="protein">
//         <label htmlFor="patty">What type of protein would you like?</label> <br/>
//         <input type="text" name="patty" id="patty"  onChange={this.handleInput}/>
//       </section>
//       <hr/>

//       <section className="patties">
//         <label htmlFor="amount">How many patties would you like?</label><br/>
//         <input id="amount" type="number" step="1" name="amount"  onChange={this.handleInput}/>
//       </section>
//       <hr/>
      
//       <section className="cooked">
//         <label htmlFor="doneness">How do you want your patty cooked</label>
//         <br/>
//         <span>Rare</span>
//         <input id="doneness" name="doneness" type="range" min="0" max="5" step="0.5"  onChange={this.handleInput}/>
        
//         <span>Well-Done</span>
//       </section>
//       <hr/>
      
//       <section className="toppings">
//         <span>What toppings would you like?</span>
//         <br/>
//         <input id="lettuce" name="topping" type="checkbox" defaultValue="lettuce"  onChange={this.handleInput}/>
//         <label htmlFor="lettuce">Lettuce</label>
//         <input id="tomato" name="topping" type="checkbox" defaultValue="tomato"  onChange={this.handleInput}/>
//         <label htmlFor="tomato">Tomato</label>
//         <input id="onion" name="topping" type="checkbox" defaultValue="onion"  onChange={this.handleInput}/>
//         <label htmlFor="onion">Onion</label>
//       </section>
      
//       <hr/>
//       <section className="cheesy">
//         <span>Would you like to add cheese?</span>
//         <br/>
//         <input id="yes" name="cheese" type="radio" defaultValue="yes"  onChange={this.handleInput}/>
//         <label htmlFor="yes">Yes</label>
//         <input id="no" name="cheese" type="radio" defaultValue="no"  onChange={this.handleInput}/>
//         <label htmlFor="no">No</label>
//       </section>
      
//       <hr/>
//       <section className="bun-type">
//         <label htmlFor="bun">What type of bun would you like?</label> <br/>
//         <select id="bun" name="bun" onChange={this.handleInput}>
//           <option defaultValue="sesame">Sesame</option>
//           <option defaultValue="potato">Potato</option>
//           <option defaultValue="pretzel">Pretzel</option>
//         </select>
//       </section>
      
//       <hr/>
//       <section className="sauce-selection">
//         <label htmlFor="sauce">What type of sauce would you like?</label>
//         <input list="sauces" id="sauce" name="sauce" onChange={this.handleInput}/>
//         <datalist id="sauces">
//           <option defaultValue="ketchup"></option>
//           <option defaultValue="mayo"></option>
//           <option defaultValue="mustard"></option>
//         </datalist>
//       </section>
      
//       <hr/>
//       <section className="extra-info">
//         <label htmlFor="extra">Anything else you want to add?</label>
//         <br/>
//         <textarea id="extra" name="extra" rows="3" cols="40" onChange={this.handleInput}></textarea>
//       </section>
      
//       <hr/>
//       <section className="submission">
        
//         <input type="submit" defaultValue="Submit" />
//       </section>
//     </form>
//     {hey}
//     </div>
//   )
//   }
// }


export default Order;