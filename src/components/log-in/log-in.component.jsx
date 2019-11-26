import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './log-in.styles.scss'

class LogIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })

    } catch (error) {
      alert(error)
    }    
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='log-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Log in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required />
          <div className='buttons'>
            <CustomButton type='submit'>Log In</CustomButton>
            <CustomButton isGoogleLogIn onClick={signInWithGoogle} >Log In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn