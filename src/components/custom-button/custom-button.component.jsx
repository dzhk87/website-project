import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleLogIn, inverted, ...otherProps }) => (
  <button
    className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleLogIn ? 'google-log-in' : ''}
      custom-button
    `}
    {...otherProps}>
    {children}
  </button>
)

export default CustomButton