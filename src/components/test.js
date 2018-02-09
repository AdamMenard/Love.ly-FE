// INDENTATION

import React, {Component} from 'react';
import Options from './options';
import Priority from './priority';
// import '../componentsStyles/test.css'; OR import './test.css' (depending on where you put the CSS file)

class Test extends Component{
  constructor(){
    super();
    // indentation
    this.state={
      values : {
                humour:[0,0,0,0,0],
                intelligence:[0,0,0,0,0],
                empathy:[0,0,0,0,0],
                materialism:[0,0,0,0,0],
                physical_needs:[0,0,0,0,0]
              },
              humour: '',
              intelligence: '',
              empathy:'',
              materialism: '',
              physical_needs: ''

  }
    this.logAnswer=this.logAnswer.bind(this);
    this.onTestSubmit=this.onTestSubmit.bind(this);
    this.saveUserPriority=this.saveUserPriority.bind(this);
  }
  logAnswer(categ,idx,value){
    // get rid of comments
    // this.state.values[categ][idx] = value;
    // GET RID OF ALL CONSOLE WARNINGS / ERRORS / COMMENTS BEFORE MAKING A COMMIT
    let clonedValues = Object.assign({}, this.state.values);
    clonedValues[categ][idx] = value;
    this.setState({values: clonedValues});
  }
  onTestSubmit(e){
    e.preventDefault();
    var data = [];
    for (var key in this.state.values) {
    if (this.state.values.hasOwnProperty(key)) {
      console.log("pri :" +this.state[key]);
        data.push({name  : key,
                  // FIX THIS WARNING: GOOGLE THIS MESSAGE ("Missing radix parameter  radix")
                   score :  parseInt(this.state.values[key][0])+
                            parseInt(this.state.values[key][1])+
                            parseInt(this.state.values[key][2])+
                            parseInt(this.state.values[key][3])+
                            parseInt(this.state.values[key][4]),
                   priority:parseInt(this.state[key])
                  });
      }
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.props.user_id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: data
        })
      }).then((res) => {
       return res.json()
      }).then((json) => {
         console.log(json);
      })

  };

  saveUserPriority(cat1,cat2,cat3,cat4,cat5){
    this.setState({
      humour : cat1,
      intelligence :cat2,
      empathy:cat3,
      materialism:cat4,
      physical_needs:cat5
    })

  }
  render(){
    return (
      <div className="form-outline">
      <Priority onSave={this.saveUserPriority}/>

      <form action="">

        <div className="humorTest">
          <div className="humorQuestion1">
            <label className="statement"> A sense of humor is a must . </label>
            <Options categ={'humour'} idx={'0'} onAnswerChoose={this.logAnswer}/>
          </div>

        <div className="humorQuestion2">
            <label className="statement"> Laughter is the best medicine. </label>
            <Options categ={'humour'} idx={'1'} onAnswerChoose={this.logAnswer}/>
        </div>

        <div className="humorQuestion3">
          <label className="statement"> I want to date someone that knows how to make me laugh. </label>
          <Options categ={'humour'} idx={'2'} onAnswerChoose={this.logAnswer}/>
        </div>

       <div className="humorQuestion4">
          <label className="statement"> I’m funny, and I like funny people . </label>
          <Options categ={'humour'} idx={'3'} onAnswerChoose={this.logAnswer}/>
        </div>

        <div className="humorQuestion5">
          <label className="statement"> Its always a good time for a joke  . </label>
          <Options categ={'humour'} idx={'4'} onAnswerChoose={this.logAnswer}/>
        </div>
      </div>

      <br />

      <div className="intellegenceTest">
         <div className="intellegenceQuestion1">
          <label className="statement"> I want to date a smart person. </label>
          <Options categ={'intelligence'} idx={'0'} onAnswerChoose={this.logAnswer} />
        </div>
      </div>

      <div className="intellegenceQuestion2">
            <label className="statement"> A beautiful mind is a terrible thing to waste . </label>
            <Options categ={'intelligence'} idx={'1'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="intellegenceQuestion3">
          <label className="statement"> Intelligence is a valuable resource to society. </label>

            <Options categ={'intelligence'} idx={'2'} onAnswerChoose={this.logAnswer} />
      </div>

        <div className="intellegenceQuestion4">
          <label className="statement"> I find smart people attractive. </label>

          <Options categ={'intelligence'} idx={'3'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="intellegenceQuestion5">
        <label className="statement"> Intelligent conversation draws me to want to get to know someone more. </label>
        <Options categ={'intelligence'} idx={'4'} onAnswerChoose={this.logAnswer} />
      </div>

      <br />

        <div className="Empathy">
        <div className="empathyQuestion1">
            <label className="statement"> People’s feelings matter. </label>
            <Options categ={'empathy'} idx={'0'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="empathyQuestion2">
          <label className="statement"> Sometimes doing good for others is worth it even if you lose out because of it . </label>
          <Options categ={'empathy'} idx={'1'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="empathyQuestion3">

          <label className="statement"> When I see people less fortunate, it makes me sad. </label>
        <Options categ={'empathy'} idx={'2'} onAnswerChoose={this.logAnswer} />

        </div>

        <div className="empathyQuestion4">
          <label className="statement"> I want to help the world . </label>
          <Options categ={'empathy'} idx={'3'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="empathyQuestion5">
          <label className="statement"> I can’t stand to see suffering. </label>
          <Options categ={'empathy'} idx={'4'} onAnswerChoose={this.logAnswer} />
        </div>
      </div>

      <br />

      <div className="materialistic">
        <div className="materialisticQuestion1">
          <label className="statement"> Life is greatly enhanced by the comforts that money can buy . </label>
          <Options categ={'materialism'} idx={'0'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="materialisticQuestion2">
          <label className="statement"> I need to have certain possessions or I don’t feel like myself . </label>
          <Options categ={'materialism'} idx={'1'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="materialisticQuestion3">
          <label className="statement"> Paying the bills is not enough, I want to make new bills! </label>
        <Options categ={'materialism'} idx={'2'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="materialisticQuestion4">
          <label className="statement"> I love having the latest thing, especially if it is expensive . </label>
          <Options categ={'materialism'} idx={'3'} onAnswerChoose={this.logAnswer} />
        </div>

        <div className="materialisticQuestion5">
          <label className="statement"> You can tell someone’s status by their lifestyle. </label>
          <Options categ={'materialism'} idx={'4'} onAnswerChoose={this.logAnswer} />
        </div>
      </div>

      <br />

      <div className="physicalNeeds">
      <div className="physicalNeedsQuestion1">
          <label className="statement"> If my partner and I are not intimate as often as I prefer, I will find another relationship  </label>
          <Options categ={'physical_needs'} idx={'0'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="physicalNeedsQuestion2">
            <label className="statement"> Words are not enough, I need touch . </label>
            <Options categ={'physical_needs'} idx={'1'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="physicalNeedsQuestion3">
          <label className="statement"> If our sex life doesn’t do well, the rest of the relationship probably won’t either </label>
          <Options categ={'physical_needs'} idx={'2'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="physicalNeedsQuestion4">
          <label className="statement"> I am looking for sex more than a lasting relationship. </label>
          <Options categ={'physical_needs'} idx={'3'} onAnswerChoose={this.logAnswer} />
      </div>

      <div className="physicalNeedsQuestion5">
          <label className="statement"> I want my partner to want me physically. </label>
          <Options categ={'physical_needs'} idx={'4'} onAnswerChoose={this.logAnswer} />
      </div>
    </div>
       <div className="buttons">
         <button data-dismiss="modal" onClick={this.onTestSubmit}>Submit</button>
       </div>
 </form>
</div>

    )
  }
}

export default Test
