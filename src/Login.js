import React from 'react'

const Login = () => {
  return (
    <div id='login'>
    <div id='login2'>
    
      <input placeholder='Email address or phone number'></input> <br/>
      <input type='password' placeholder='Password'></input> <br/>
      <button id='but1'>Log in</button> <br/>
      <a id='n1' href="">Forgotten password?</a>
      <div className='line'></div>

      <button id='but2'>Create new account</button>

    </div>

    <a id='n2' href=''>Create a Page</a> <span className='n3'> for a celebrity, brand, or business.</span>



    </div>
  )
}

export default Login