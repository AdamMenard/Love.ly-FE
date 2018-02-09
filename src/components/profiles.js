import React, {Component} from 'react';

class Profiles extends Component{
 constructor() {
   super();

   this.state = {
     allUsers: [],
     allMatches: []
   }
   this.getMatches = this.getMatches.bind(this);
 }
 getMatches() {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
     return res.json();
   }).then((json) => {
      // get rid of unnecessary comments
     // Set state to this json response you got back

     // find current user's ID from URL and his/her user object
     let currentUserId = this.props.userId;
     let currentUser = json.find((userObj) => {
       return userObj._id === currentUserId;
     });

     // find all user ids in the matches array for that user object (find user_ids for Adam's matches)
     let matchUserIds = currentUser.matches.map((eachMatch) => {return eachMatch.user_id});

     let currentuserremovedjson = json.filter((user)=>{
       return user!==currentUser
     })

     // Filter through all users (json) and keep the ones in matchUserIds
     let allMatchesforoneUser = json.filter((user) => {
        return matchUserIds.indexOf(user._id) !== -1;
      })

     this.setState({
       allUsers: currentuserremovedjson,
       allMatches: allMatchesforoneUser
     })
   });
 }
 componentDidMount() {
   this.getMatches();
 }

 componentWillReceiveProps(nextProps) {
  // if showMatches prop changed to true (from false), then call this.getMatches() again
 }
 render(){
   let users = this.props.showMatches ? this.state.allMatches : this.state.allUsers;

   if(this.props.showMatches && this.state.allMatches.length===0){
     return (
       <div className="center_form">
         <h4 className="displayNull"> Sorry. No Matches found yet. Keep looking.!</h4>
       </div>
     )
   }
   else{
    // indentation
     return ( <div>
       {users.map(eachUser => {
             return (
                     <div id="user-box" key={eachUser._id} className="card" >
                       <img className="card-img-top user-pic" src={eachUser.image_url} alt="ProfilePic" />
                       <div className="card-body">
                         <h4 className="card-title">{eachUser.name}</h4>
                         <ul id="user-info">
                         <li>{eachUser.age}</li>
                         <li>{eachUser.gender}</li>
                         <li className="card-text">{eachUser.description}</li>
                         <li>{eachUser.location}</li>
                         </ul>
                         <a href={`/home/${eachUser._id}`} className="btn btn-primary">Go to profile</a>
                       </div>
                     </div>

         )})}
     </div>
   );
   }


 }
}
export default Profiles;
