import React from 'react';


import axios from 'axios';




export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      // usersname:[],
      // usersemail:[],
      // usersmsg:[],
      // test:{
      //   message:"hi test"},
      users:[],
      userslength:0
     
     


    }

    


  }

  componentDidMount(){
    axios.get('http://localhost:5000/usertips/')
        .then(res=>{
            if(res.data.length > 0){
                this.setState({
                    // usersname:res.data.map(user=>user.username),
                    // usersemail:res.data.map(user=>user.email),
                    // usersmsg:res.data.map(user=>user.message),
                    users:res.data
                    // username:res.data[0].username,
                    // email:res.data[0].email
                })
                this.setState({
                  userslength:this.state.users.length
                })
                // console.log(this.state.users.length);
                // console.log(this.state.userslength);
                // console.log(this.state.users[this.state.userslength -1 ].message);
                
            }
        })
}



  render(){
    
    const allavatar = this.state.users
    const threeavatar = allavatar.slice(this.state.userslength-3,this.state.userslength)
    const avatarlistarray =threeavatar.reverse()
    const arrayavatarlist = avatarlistarray.map((avatarcard,i)=>{
      return(
       
      <Avatar  key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].username} 
      message = {avatarlistarray[i].message} email={avatarlistarray[i].email} />
    
      );
  })

    return(
        <div>
            <h2 className="tc blue grow hover-pink mb4">!! Our Recent Tips !!</h2>

            <div className="flex flex-wrap justify-content-center">

              <div className="avatar_style mv3 mh4 mw5 grow bg-light-blue hover-bg-green hover-white dib pv1 ph3 grow shadow-4">
              <img src={`https://joeschmoe.io/api/v1/jon`} alt="avatar"  />
              <p className="tc mt2 mw5">Everyone is awesome with their own thoughts</p>
              <p className="tc mw5 b">Yathartha Singh</p>
              <p className="tc mw5 b"><i class="far fa-envelope"></i> kakhilesh79@gmail.com</p>
            </div>

            {arrayavatarlist}
            </div>
        </div>
    )
  }
}


///creating avatar

function Avatar(props){
  return(
    
      <div className="avatar_style mv3 mh4 mw5 grow bg-light-blue hover-bg-green hover-white dib pv1 ph3 grow shadow-4">
          <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"  />
          <p className="tc mt2 mw5">{props.message}</p>
          <p className="tc mw5 b">{props.name}</p>
          <p className="tc mw5 b"><i class="far fa-envelope"></i> {props.email}</p>
      </div>
      
  );
  
  }