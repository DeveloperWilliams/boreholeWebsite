import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
      <div className="notfound">
        <Link to='/'>Go Home Back</Link>
      </div>
    </>
  )
}

export default Notfound