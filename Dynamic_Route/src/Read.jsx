import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



function Read() {
  const [data, setData] = useState([])
const {id} = useParams()
useEffect(() => {
  axios
    .get("http://localhost:3000/users/" + id)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}, []);
return(
  <div className='flex justify-center items-center content-center h-[100vh]'>

  <div className='w-[40%] flex flex-col gap-3 bg-gray-50 py-4 pb-8 shadow-lg items-start px-9' >
    <h1 className='text-2xl font-semibold mx-auto my-3 underline'>  Details of User</h1>
    <div>
      <strong>
        Name : {data.name}
      </strong>
    </div>
    <div>
      <strong>
        Email : {data.email}
      </strong>
    </div>
    <div>
      <strong>
        phone : {data.name}
      </strong>
    </div>

<div className='flex gap-2 py-3'>

  <Link to={'/edit'} className='bg-green-500 hover:bg-green-700 px-4 py-1 shadow-md rounded-md text-white text-lg font-medium '> Edit </Link>
  <Link to={'/'} className='bg-red-500 hover:bg-red-700 px-4 py-1 shadow-md rounded-md text-white text-lg font-medium '> Back </Link>
</div>
  </div>
  </div>
)
}

export default Read