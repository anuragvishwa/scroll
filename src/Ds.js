import React from 'react'
const button = {
  backgroundColor: 'rgba(75, 82, 233, 0.81)',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  position: 'absolute',
  right: '0',
  borderRadius: '10px',
  top: '50%'
}

export const Ds = function Fab() {
  return (
    <a style={button} href="https://competent-meitner-09679a.netlify.com/">
      Data Science
    </a>
  )
}
