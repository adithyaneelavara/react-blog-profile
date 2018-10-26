import React from 'react';



class Education extends React.Component{

	render(){

		return(
			<section className="resume-section p-3 p-lg-5 d-flex flex-column" >
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Visvesvaraya Technological University</h3>
              <div className="subheading mb-3">Bachelor of Engineering (B.E.)</div>
              <div>Computer Science</div>
              <p>Distinction</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2003 - June 2007</span>
            </div>
          </div>

        </div>
      </section>);
	}
}
export default Education;