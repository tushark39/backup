import React from 'react'
class UploadSucess extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center",marginBottom:200,marginTop:100}}>
                <img src="images/confirm.png" alt="" style={{height:200,width:200,marginBottom:50}}/>
                <h1>You have Sucessfully uploaded the form</h1>
                <h3>If you want to update the response Please <a href="https://wa.link/5msjac">Click Here</a></h3>
            </div>
        )
    }
}
export default UploadSucess;