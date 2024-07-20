import React from 'react'

export default function SideBar(props) {
  const {handleToggleModal,data} = props
  return (
    <div className='sidebar'>
      <div className='background-overlay'></div>
      <div className='sidebar-content'>
        <h2>
          {data?.title}
        </h2>
        <div>
          <p className='description-title'>
            {data?.date}
          </p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      
    </div>
  )
}
