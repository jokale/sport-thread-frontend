 import React from 'react'
 import Form from 'react-bootstrap/Form'


class Login extends React.Component{

   

    //local state that belongs to the component    
    state = {
            username: '',
              password: '',
        }

        handleTheChange = (event) =>{
            this.setState({
               [event.target.name]: event.target.value,
               redirect: true
            })
        }
         handleTheSubmit = (event) => {
            event.preventDefault()
             alert('Your logged in great!');

            // this.props.addThreadd(this.state,this.props.history)
            this.setState({
            username: '',
            password: '',


            })
           
        
         }

     

    render(){
        return(
            <div >
                <center>
                <h5>Login</h5>
                 <Form style={{backgroundColor: "#A7BAE3"}} onSubmit={this.handleTheSubmit}>
         
                 <Form.Label>Username:</Form.Label><br></br>

                <input style={{color: "DodgerBlue"}}type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleTheChange}/><br></br>

                <br></br><label >Password:</label><br/><input style={{color: "DodgerBlue"}}type="password" placeholder="Password"value={this.state.password} name="password" onChange={this.handleTheChange}/><br></br>
                  <Form.Text className="text-muted">
                We'll never share your data with anyone else.
                </Form.Text>
                <br></br> <button type="submit">Submit</button>

                              
               

               
                </Form>
                  


                <br></br>
                <h5>Want to create an account?<a href="http://localhost:3001/signup"> <br></br>Sign up</a></h5>

            
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <center><h6>A Joanna E. Kalema Application</h6></center>
            </center>
            </div> 
        )
    }
}

export default Login;