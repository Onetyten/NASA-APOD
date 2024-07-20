import React from 'react'

export default function Page(props) {
  const {data} = props
  return (
    <div className='image-container'>
      <img src={data?.hdurl}alt={data?.title} className='main-img'/>
      {/* <img src={data?.hdurl} alt="" className='main-img'/> */}
    </div>
   
    
  )
}
