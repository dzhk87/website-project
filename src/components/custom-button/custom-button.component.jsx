import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleLogIn, ...otherProps }) => (
  <button className={`${isGoogleLogIn ? 'google-log-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton