import React from 'react'
import Header from './Header'

export default function Base({children}) {
  return (
    <div>
        <Header/>
    {children}
    <footer>
        
    </footer>
    </div>
  )
}
