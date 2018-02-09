import React, {Component} from 'react';

class Options extends Component{
  constructor(){
    super();
    this.state={
      arr:[]
    }
    this.addscore=this.addscore.bind(this);
  }
  addscore(e){
    this.props.onAnswerChoose(this.props.categ,this.props.idx,e.target.value);
  }

  render(){
    // refactor so you iterate through array 
    // [{value: 5, text: 'Strongly Agree'}, {value: 4, text: 'Agree'}, {...}]

    // EXAMPLE: array.map(eachObj => {
    //   return <li><input value={eachObj.value} onChange={ this.addscore } <label>{ eachObj.text}</label>>
    // })
    
    return (
      <ul className='likert'>
        <li>
          <input type="checkbox" value="5"  onChange={ this.addscore }/>
          <label>Strongly agree</label>
        </li>
        <li>
          <input type="checkbox" value="4"  onChange={ this.addscore }/>
          <label>Agree</label>
        </li>
        <li>
          <input type="checkbox" value="3"  onChange={ this.addscore }/>
          <label>Neutral</label>
        </li>
        <li>
          <input type="checkbox" value="2" onChange={ this.addscore }/>
          <label>Disagree</label>
        </li>
        <li>
          <input type="checkbox" value="1"  onChange={ this.addscore }/>
          <label>Strongly disagree</label>
        </li>
      </ul>
    )
  }
}
export default Options;
