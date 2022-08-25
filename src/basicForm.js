import React,{useState} from 'react'

const BasicForm = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
   
  return (
    <form action=''>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" autoComplete='off' value={email}
        
            />
        
        </div>
        <div>
        <label htmlFor='password'>password</label>
            <input type="password" name="password" id="password" autoComplete='off' value={password}
         
          />
        
        </div>
        <button type='submit'>Login</button>
    </form>
  )
}

export default BasicForm