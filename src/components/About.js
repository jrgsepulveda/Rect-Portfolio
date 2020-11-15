import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span >{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={`mailto:${resumeData.email}`}>Email Me: jsepulvewd@gmail.com</a>
                    <br></br>
                    <a href={"https://www.linkedin.com/in/jrgsepulveda/"} target="_blank">LinkedIn: jrgsepulveda</a>
                    <br></br>
                    <a href={"https://github.com/jrgsepulveda"} target="_blank">GitHub: jrgsepulveda</a>
       					   </p>
                  </div>
                  <div className="columns download">
                  <p>
                     <a href={resumeData.resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}