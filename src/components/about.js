import React from 'react';

import mypic from './yathartha.jpeg'


export default class About extends React.Component{
  render(){
    return(

      
     
        <article class="mw7 grow center bg-white hover-bg-green br3 pa3 pa4-ns mv0  ba b--black-10">
  <div className="tc">
  <img src={mypic} class="br-100 h4 w4 grow dib" alt="my pic" title="Photo of a kitty staring at you" />
    <h1 className="f4 grow green">Raj Patel</h1>
    <hr className="mw3 bb bw1 b--black-10" />
  </div>
  <p className="lh-copy measure center f6 black-90 tc">
   This is a simple blog where one can post his/her programming tips with their contact details for the begginers.In this project a funny thing will happened to you when you post your coding tip it will display on the home page with a funny and unique pic based on your name. I created this as my MERN Stack project.  
  </p>
  <div className="lh-copy measure center f6 black-70 tc">
    <p className="grow"><a href="mailto:kakhilesh79@gmail.com"><i class="far fa-envelope"></i> Kakhilesh79@gmail.com</a></p>
    <p className="grow "> <a  href="http://trustyathartha.in/"><i class="fab fa-firefox"></i> www.trustyathartha.in</a></p>
  </div>
</article>

    
    )
  }
}
