import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-600 text-white text-3xl p-3 text-center mx-[10%] my-10'>User: {userid}</div>
  )
}

export default User