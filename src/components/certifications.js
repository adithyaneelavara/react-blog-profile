import React from 'react'


class Certifications extends React.Component{
	 constructor(props) {
            super(props);
            this.state = {
                certs: []
            };

        };
	render() {

            return ( 
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" >
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
	            <li>
	              <i className="fa-li fa fa-trophy text-warning"></i>
	              Sun Certified Java Programmer</li>
	            <li>
	              <i className="fa-li fa fa-trophy text-warning"></i>
	              AWS Certified Developer - Associate <a target="_blank" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2016-09-06&ci=AWS00208684"><img width="42" height="48" src="https://www.certmetrics.com/api/ob/image/amazon/c/2 " /></a></li>
	            <li>
	              <i className="fa-li fa fa-trophy text-warning"></i>
	              AWS Certified DevOps Engineer - Professional<a target="_blank" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=5&t=c&d=2018-08-11&ci=AWS00208684"><img width="42" height="48" src="https://www.certmetrics.com/api/ob/image/amazon/c/5" /></a></li>
	        </ul>
       	 </div>
      </section>);
            }


}

export default Certifications;