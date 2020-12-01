import React from 'react';


const Footer=()=>{
  return (
      <footer className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div id="copyright">
                          <p>Copyright © - <a href="#home">The E-Guardians</a></p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="scroll-top">
                          <a href="#home"><i className="fa fa-angle-up" /></a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>

  );
}

export default Footer;
