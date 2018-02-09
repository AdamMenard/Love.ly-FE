import React, {Component} from 'react';
import Test from './test';

// get rid of dead code

class Filters extends Component{
  render(){
    return (
      <div id="filters" className="row">
        <button className="btn btn-primary filter" onClick={this.props.onClickSeeEveryone}>See Everyone</button>
        <button className="btn btn-danger filter" data-toggle="modal" data-target="#testModal">Take our Love Test</button>
        <div className="modal fade" id="testModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            {/* <div className="modal-header">
                <h4 className="modal-title">Rank your Priorities then take test.</h4>
            </div> */}
            <div className="modal-content">
                  <div className="modal-body">
                    <Test user_id={this.props.user_id} />
                  </div>
            </div>
          </div>
        </div>
        <button onClick={this.props.onClickSeeMatches} className="btn btn-info filter">See your Love Matches</button>
      </div>
    )
  }
}

export default Filters
