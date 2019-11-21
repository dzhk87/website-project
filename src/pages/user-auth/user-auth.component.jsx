import React from 'react'

import './user-auth.styles.scss'

import LogIn from '../../components/log-in/log-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const UserAuth = () => (
  <div className='user-auth'>
    <LogIn />
    <SignUp />
  </div>
)

export default UserAuth