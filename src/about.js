import React from 'react'


class AboutMe extends React.Component{

  render(){

    return (


      <section className="resume-section p-3 p-lg-5 d-flex d-column" >
        <div className="my-auto">
          <h2 className="mb-0">Adithya
            <span className="text-primary">Neelavara</span>
          </h2>
          <div className="subheading mb-5">Camberley, UK 
   
          </div>
          
          <p className="lead mb-5">Experienced Technology Manager and Solutions Architect with a demonstrated history of working in the information technology and services industry. Over 10 years of experience in Requirements Analysis, J2EE, Design Patterns, Multi-Tiered Java Applications, Service Oriented Architectures, DevOps, API Management, Oracle Database, Agile Methodologies, Portlet Architecture , AWS, Serverless, Python and Micro services.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/adithya-neelavara-95258424/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a   href="https://github.com/adithyaneelavara">
              <i className="fab fa-github"></i>
            </a>
            <a   href="AdithyaNeelavara-Resume.pdf" target="_blank">
              <i className="far fa-file"></i>
            </a>
          </div>
        </div>
      </section>
      );
  }
}

export default AboutMe;