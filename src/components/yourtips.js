import React from 'react';
import axios from 'axios';


export default class Yourtips extends React.Component{

    constructor(props){
        super(props);

        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            message:"",
            username:"",
            email:"",
            users:[],
            usersemails:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/user/')
            .then(res=>{
                if(res.data.length > 0){
                    this.setState({
                        users:res.data.map(user=>user.username),
                        usersemails:res.data.map(user=>user.email),
                        // username:res.data[0].username,
                        // email:res.data[0].email
                    })
                    // console.log(this.state.users);
                }
            })
    }

    // componentDidMount(){
    //     axios.get('http://localhost:5000/user/')
    //         .then(res=>{
    //             if(res.data.length > 0){
    //                 this.setState({
    //                     usersemails:res.data.map(user=>user.email),
    //                     email:res.data[0].email
    //                 })
    //                 // console.log(this.state.users);
    //             }
    //         })
    // }

    onChangeMessage(e){
        this.setState({
            message:e.target.value
        });
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
        const usertips = {
            message:this.state.message,
            username:this.state.username,
            email:this.state.email
      
        }

        console.log(usertips);
        //sending user data to backend
        axios.post('http://localhost:5000/usertips/add',usertips)
            .then(res=>console.log(res.data));

            alert('Thanks for giving your valuable time !!')

        this.setState({
            message:'',
            username:'',
            email:''
        })
    }

    render(){
        return(
            <div className="pa3 pv2">
            <h3 className="tc grow hover-blue">!! Give Your Tips !!</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                 <label>Username:</label>
                 
                 <select ref="userInput" required className="form-control" value={this.state.username} 

                        

                        onChange={this.onChangeUsername}>

<option>Select Your Good Name </option>

                        {
                            this.state.users.map(function(user){
                                return <option key={user} value={user}>{user}

                                </option>;
                            })
                        }



                        </select>
            </div>
           
            <div className="form-group">
                 <label>Email:</label>
                 
                 <select ref="userInput" required className="form-control" value={this.state.email} 
                        onChange={this.onChangeEmail}>
                        <option>Please Choose Your Email </option>
                        {
                            this.state.usersemails.map(function(useremail){
                                return <option key={useremail} value={useremail}>{useremail}

                                </option>;
                            })
                        }
                        </select>
            </div>


            <div className="form-group">
                 <label>Message:</label>
                 <textarea type="text" required className="form-control" value={this.state.message} onChange={this.onChangeMessage} />
            </div>
             <div className="form-group">
                 <input type="submit" value="Add Your Tips" className="btn btn-outline-primary grow" />
             </div>
            </form>
         </div>
        )
    }
}