import axios from 'axios';
import React from 'react';
import IsUploading from './IsUploading';
import UploadSucess from './UploadSucess';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
            uploaded: localStorage.getItem("uploaded_theeguardians_backup_dec") ? true : false,
            name: false,
            email: "",
            aemail: "",
            course: false,
            branch: false,
            sem: false,
            evs: false,
            am: false,
            dels: false,
            efe: false,
            em: false,
            ep: false,
            icpc: false,
            usfe: false,
            french: false,
            ipr: false,
            mf: false,
            interiorDesign: false,
            designProcess: false,
            pj: false,
            hr: false,
            errorMessageMinor: false,
            errorMessage: false
        }
    }
    handleChange = (e) => {
        this.setState({ minor: e.target.value })
    }
    upload=()=>{
        console.log(this.state);
         if(this.state.evs===false||!this.state.am||!this.state.dels||!this.state.efe||!this.state.em||!this.state.ep||!this.state.icpc||!this.state.usfe||!this.state.french)   {
            this.setState({errorMessage:"Please Select All Major Subjects!"})
            document.getElementById("contact-us").scrollIntoView()
        }
        else if(
            !this.state.mf&&!this.state.designProcess&&!this.state.interiorDesign&&!this.state.ipr&&!this.state.pj&&!this.state.hr
        ){
            this.setState({errorMessageMinor:"Please Select Any Minor Subjects!"})
        }
        else{
            this.setState({isUploading:true})
            axios.post('https://amityform2.herokuapp.com/course/form/api',{
            "name": this.state.name,
            "email": this.state.email,
            "aemail": this.state.aemail,
            "course": this.state.course,
            "branch": this.state.branch,
            "sem": this.state.sem,
            "evs": this.state.evs,
            "am": this.state.am,
            "dels": this.state.dels,
            "efe": this.state.efe,
            "em": this.state.em,
            "ep": this.state.ep,
            "icpc": this.state.icpc,
            "usfe": this.state.usfe,
            "french": this.state.french,
            "ipr": this.state.ipr,
            "mf": this.state.mf,
            "interiorDesign": this.state.interiorDesign,
            "designProcess": this.state.designProcess,
            "pj": this.state.pj,
            "hr": this.state.hr,
            })
              .then(()=>{
                localStorage.setItem("uploaded_theeguardians_backup_dec",true);
                this.setState({isUploading:false,uploaded:true});
              })
              .catch(e=>{
                alert("Please Contact Administration with this screnshot",e.error)
                this.setState({isUploading:false,uploaded:false,errorMessage:"Please Contact Administration"})
              })

        }

    }
    onFileUpload = (e) => {
        e.preventDefault()
        if(this.state.name&&
        this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&
        this.state.branch&&this.state.course&&this.state.sem
        )
        this.upload()
        else if(!this.state.name){
        this.setState({errorMessage:"Please Enter your Name!"})
        document.getElementById("contact-us").scrollIntoView()
        }
        else if(!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            this.setState({errorMessage:"Please Enter your Valid Email Adress!"})
            document.getElementById("contact-us").scrollIntoView()

        }
        else if(!this.state.branch){
            this.setState({errorMessage:"Please Enter your Branch Name!"})
            document.getElementById("contact-us").scrollIntoView()

        }
        else if(!this.state.course){
            this.setState({errorMessage:"Please Enter your Course Name!"})
            document.getElementById("contact-us").scrollIntoView()

        }  
        else if(!this.state.sem){
            this.setState({errorMessage:"Please Enter your Semester!"})
            document.getElementById("contact-us").scrollIntoView()

        }     
    
    }
    render() {
        return (
            <section className="contact-us" id="contact-us">
                {
                    !this.state.uploaded && <div className="comtainer bounceIn">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="section-title">
                                    <h2>Form</h2>
                                    <p><h4><span style={{color:'red'}}>**Select Yes, only if you need extra class for the given subject**</span></h4></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* // eslint-disable-next-line */}
                {
                    !this.state.isUploading && !this.state.uploaded && <div className="contact-us-form wow bounceInRight">
                        <div className="container">
                            {
                                this.state.errorMessage && <div class="alert alert-danger" role="alert" style={{}} >
                                    {this.state.errorMessage}
                                </div>
                            }
                            <form role="form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" id="name" placeholder="Name *" onChange={(e) => this.setState({ name: e.target.value })} />
                                        <input className="form-control" type="text" id="email" placeholder="Email *" onChange={(e) => this.setState({ email: e.target.value })} />
                                        <input className="form-control" type="text" id="aemail" placeholder="Amity Student Email" onChange={(e) => this.setState({ aemail: e.target.value })} />
                                        <input className="form-control" type="text" id="branch" placeholder="Branch" onChange={(e) => this.setState({ branch: e.target.value })} />
                                        <input className="form-control" type="text" id="course" placeholder="Course" onChange={(e) => this.setState({ course: e.target.value })} />
                                        <input className="form-control" type="text" id="sem" placeholder="Semester" onChange={(e) => this.setState({ sem: e.target.value })} />
                                        <h3 style={{ marginTop: 30 }}>Major Subjects :-</h3>
                                        <h4><span style={{color:'red'}}>**Select Yes, only if you need extra class for the given subject**</span></h4>

                                        <div>
                                            INTRODUCTION TO ENVIRONMENTAL STUDIES :- <br />
                                            <input value="yes" name="evs" type="radio" onChange={(e) => this.setState({ evs: "yes" })} />Yes
                           <input value="no" name="evs" type="radio" onChange={(e) => this.setState({ evs: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            APPLIED MATHEMATICS-I :- <br />
                                            <input value="yes" name="am" type="radio" onChange={(e) => this.setState({ am: "yes" })} />Yes
                           <input value="no" name="am" type="radio" onChange={(e) => this.setState({ am: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            DEVELOPING ENGLISH LANGUAGE SKILLS - I :- <br />
                                            <input value="yes" name="dels" type="radio" onChange={(e) => this.setState({ dels: "yes" })} />Yes
                           <input value="no" name="dels" type="radio" onChange={(e) => this.setState({ dels: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            ECONOMICS FOR ENGINEERS :- <br />
                                            <input value="yes" name="efe" type="radio" onChange={(e) => this.setState({ efe: "yes" })} />Yes
                           <input value="no" name="efe" type="radio" onChange={(e) => this.setState({ efe: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            ENGINEERING MECHANICS :- <br />
                                            <input value="yes" name="em" type="radio" onChange={(e) => this.setState({ em: "yes" })} />Yes
                           <input value="no" name="em" type="radio" onChange={(e) => this.setState({ em: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            ENGINEERING PHYSICS :- <br />
                                            <input value="yes" name="ep" type="radio" onChange={(e) => this.setState({ ep: "yes" })} />Yes
                           <input value="no" name="ep" type="radio" onChange={(e) => this.setState({ ep: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            INTRODUCTION TO COMPUTERS & PROGRAMMING IN C :- <br />
                                            <input value="yes" name="icpc" type="radio" onChange={(e) => this.setState({ icpc: "yes" })} />Yes
                           <input value="no" name="icpc" type="radio" onChange={(e) => this.setState({ icpc: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            UNDERSTANDING SELF FOR EFFECTIVENESS :- <br />
                                            <input value="yes" name="usfe" type="radio" onChange={(e) => this.setState({ usfe: "yes" })} />Yes
                           <input value="no" name="usfe" type="radio" onChange={(e) => this.setState({ usfe: "no" })} style={{ marginLeft: 30 }} />No
                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            INTRODUCTION TO FRENCH AS A FOREIGN LANGUAGE :- <br />
                                            <input value="yes" name="french" type="radio" onChange={(e) => this.setState({ french: "yes" })} />Yes
                           <input value="no" name="french" type="radio" onChange={(e) => this.setState({ french: "no" })} style={{ marginLeft: 30 }} />No
                           </div>

                                        {/* Minor Track */}
                                        {
                                            this.state.errorMessageMinor && <div class="alert alert-danger" role="alert" style={{marginTop:20}} >
                                                {this.state.errorMessageMinor}
                                                {/* {this.state.errorMessage} */}
                                            </div>
                                        }
                                        <h3 style={{ marginTop: 30 }}>Minor Tracks :-</h3>
                                        <h4><span style={{color:'red'}}>**Select Yes, only if you need extra class for the given subject**</span></h4>

                                        <div style={{ marginTop: 20 }}>
                                            Management Foundation :- <br />

                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ mf: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ mf: "no" })} style={{ marginLeft: 30 }} />No
                          </div>
                                        <div style={{ marginTop: 20 }}>
                                            Design Process & Colour Concept :- <br />
                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ designProcess: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ designProcess: "no" })} style={{ marginLeft: 30 }} />No
                                                     </div>
                                        <div style={{ marginTop: 20 }}>
                                            INTRODUCTION TO INTERIOR DESIGN,MODEL MAKING & COLOR COMBINATION :- <br />
                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ interiorDesign: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ interiorDesign: "no" })} style={{ marginLeft: 30 }} />No

                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            PRINCIPLES OF INTELLECTUAL PROPERTY RIGHTS :- <br />
                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ ipr: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ ipr: "no" })} style={{ marginLeft: 30 }} />No
                                           </div>
                                        <div style={{ marginTop: 20 }}>
                                            PRINT JOURNALISM :- <br />
                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ pj: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ pj: "no" })} style={{ marginLeft: 30 }} />No
                                          </div>
                                        <div style={{ marginTop: 20, marginBottom: 20 }}>
                                            HR-CONCEPT AND THEORETICAL UNDERSTANDING OF HUMAN RIGHTS :- <br />
                                            <input value="yes" name="mf" type="radio" onChange={(e) => this.setState({ hr: "yes" })} />Yes
                           <input value="no" name="mf" type="radio" onChange={(e) => this.setState({ hr: "no" })} style={{ marginLeft: 30 }} />No
                                          </div>

                                        <button type="submit" onClick={this.onFileUpload} className="btn btn-default submit-btn form_submit">SEND</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 wow bounceInLeft">
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="https://www.instagram.com/tushar.pandey112/"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="https://www.github.com/tushark39/"><i className="fa fa-github" /></a></li>
                                            <li><a href="https://www.linkedin.com/in/tushark39/"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
                {
                    this.state.isUploading && !this.state.uploaded && <IsUploading />
                }
                {
                    this.state.uploaded && !this.state.isUploading && <UploadSucess />
                }
            </section>

        );

    }

}

export default App;
