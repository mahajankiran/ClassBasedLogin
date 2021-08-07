import React ,{Component} from 'react';


class LoginApp extends Component{
    constructor(props)
    {

        super(props);
       this.state={

           username:'',
           password:''

       }
    }
    handleUsernameChange =(event)=>
    {
            this.setState({username:event.target.value})
            console.log({username:event.target.value})
    }

    handlePasswordChange =(event)=>
    {
            this.setState({password:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        alert('Username:  '+this.state.username);

    }
    render()
    {

        return(
              <div>
                  <form>
                      <h1>Login</h1>
                      <div className="form-item">
                      <input  name="email" type="text" className='input' value={this.state.username} onChange={this.handleUsernameChange}/>
                      </div>
                      <div className="form-item">
                       <input name="password" type="password"  className='input'  value={this.state.password} onChange={this.handlePasswordChange}/>
                       </div>

                       <button type="submit" onClick={this.handleSubmit} >
                        Login
                       </button>   

                  </form>

              </div>




        )
    }



}


export default LoginApp;
