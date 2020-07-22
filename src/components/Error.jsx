import React from 'react';

const Error = (props) => {
  const errorDivStyle = {
    margin: '12% auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
  return (
    <div style={errorDivStyle}>
      <h1 className="text-center">404</h1>
      <h2 className="text-center">Page Not Found</h2>
    </div>
  )
}

export default Error
