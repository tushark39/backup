import React from 'react';

const Header = () => {
    return (
        <header className="header" id="home">
            <nav className="navbar navbar-expand-lg navbar-light navbar fixed-top navbar-custom">
                <a className="navbar-brand" href="#">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGgfwY00csmZw/company-logo_200_200/0/1602017894371?e=1614211200&v=beta&t=qtjxN4LGKpYEBWH4zQiAszqEJFH3McRfGZk-Ff7Z17Q" alt="logo" style={{height:60,width:40}} />
                </a> &nbsp; <span className="logo-name">The E-Guardians</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#losoSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="losoSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li>
                            {/* <a className="nav-link" href="#about">LOGIN</a> */}
                        </li>
                        <li>
                            <a className="nav-link" href="#contact-us">FORM</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="header-overlay header-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logo text-center">
                                <img src="images/logo-smal.png" style={{height:400,width:350}} alt="logo" className="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="header-text">
                                <h1>Parents Feedback Form </h1>
                                <br />
                                {/* <p>The name QUK ADS is a short form of telling Business People to Advertise Quickly.</p> */}
                            </div>
                            <div className="header-btns" style={{marginTop:0}}>
                                {/* <a href="#download-now" className="btn btn-download wow fadeInLeft">Download</a> */}
                                <a href="#contact-us" className="btn btn-tour wow fadeInRight">Click Here <i className="fa fa-angle-down" /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="hearder-iphone wow bounceIn">
                                {/* <img src="images/phoe-header.png" height="100%" width="200%" alt="iphone-header" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </header>
    );
}

export default Header;
