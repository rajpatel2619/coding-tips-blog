import React from 'react';
import axios from 'axios';


export default class Register extends React.Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:"",
            email:""

        }
    }


    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username:this.state.username,
            email:this.state.email
      
        }

        console.log(user);
        //sending user data to backend
        axios.post('http://localhost:5000/user/add',user)
            .then(res=>console.log(res.data));

            alert('registered succefully')

        this.setState({
            username:'',
            email:''
        })
    }

  render(){
    return(

      
        <div className="pa3 pv2">
        <h3 className="tc grow hover-blue">!! Register Yourself !!</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
             <label>Username:</label>
             <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
        </div>
        <div className="form-group">
             <label>Email:</label>
             <input type="email" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
        </div>
         <div className="form-group">
             <input type="submit" value="Create User" className="btn btn-outline-primary grow" />
         </div>
        </form>
     </div>
    
    )
  }
}
