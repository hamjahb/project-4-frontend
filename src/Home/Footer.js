
import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (

        <React.Fragment>
<footer className="page-footer font-small cyan darken-3">

    {/* <!-- Footer Elements --> */}
    <div className="container">
  
      {/* <!-- Grid row--> */}
      <div className="row">
  
        {/* <!-- Grid column --> */}
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">
  
            {/* <!-- Facebook --> */}
            <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            {/* <!-- Twitter --> */}
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            {/* <!-- Google +--> */}
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            {/* <!--Linkedin --> */}
            <a className="li-ic">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
           
          </div>
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row--> */}
  
    </div>
    {/* <!-- Footer Elements --> */}
  
    {/* <!-- Copyright --> */}
    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> Meddico Trip</a>
    </div>
    {/* <!-- Copyright --> */}
  
  </footer>
 
  </React.Fragment>
  );
}
}

export default Footer;