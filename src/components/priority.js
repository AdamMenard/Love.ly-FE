import React, {Component} from 'react';
import Dropdown from './dropdown';

class Priority extends Component {
  constructor() {
    super();
		this.state = {
      humour: '',
      intelligence: '',
      empathy:'',
      materialism: '',
      physical_needs: ''
		}
    this._onSelect = this._onSelect.bind(this);
    this.savePriority=this.savePriority.bind(this);
    }

  _onSelect(e, category) {
    console.log(e.target.value, category)
      this.setState({
        [category]: e.target.value
      })
  }
  savePriority(){

    if(!this.state.humour || !this.state.intelligence || !this.state.empathy
    || !this.state.materialism || !this.state.physical_needs){

      alert("Please prioritise all categories.")
    }
    else{
       this.props.onSave(this.state.humour,this.state.intelligence,
       this.state.empathy,this.state.materialism,this.state.physical_needs)
    }
  }
  render() {
    var alreadySelected = Object.values(this.state) // remove 0s
    // REFACTOR so you do not repeat dropdown 5 times
    return(
      <div className="form-outline">
        <div className="row">
          <div className="col-md-12">
            <label> <b> Humour </b> </label>
              <span className="priority-response">
                <Dropdown alreadySelected={ alreadySelected } options={ [1, 2, 3, 4, 5] } onChange={(e) => { this._onSelect(e, 'humour') }}  placeholder="Select an option" />
              </span>
          </div>
          <div className="col-md-12">
            <label> <b> Intelligence </b> </label>
            <span className="priority-response">
              <Dropdown  alreadySelected={ alreadySelected } options={ [1, 2, 3, 4, 5] } onChange={(e) => { this._onSelect(e, 'intelligence')}}  placeholder="Select an option" />
            </span>
          </div>
           <div className="col-md-12">
            <label> <b> Empathy </b> </label>
              <span className="priority-response">
                <Dropdown alreadySelected={ alreadySelected } options={ [1, 2, 3, 4, 5] } onChange={(e) => { this._onSelect(e, 'empathy')}}  placeholder="Select an option" />
              </span>
           </div>
          <div className="col-md-12">
            <label> <b>  Materialism </b> </label>
            <span className="priority-response">
              <Dropdown  alreadySelected={ alreadySelected } options={ [1, 2, 3, 4, 5] } onChange={(e) => { this._onSelect(e, 'materialism')}}  placeholder="Select an option" />
            </span>
          </div>
          <div className="col-md-12">
            <label> <b> Physical Needs </b> </label>
            <Dropdown  alreadySelected={ alreadySelected } options={ [1, 2, 3, 4, 5] } onChange={(e) => { this._onSelect(e, 'physical_needs')}}  placeholder="Select an option" />
          </div>
          <div className="col-md-12 center_form">
              <button className="btn btn-primary" onClick={this.savePriority}> Save </button>
          </div>
       </div>
     </div>
    );
  }

}

export default Priority;
