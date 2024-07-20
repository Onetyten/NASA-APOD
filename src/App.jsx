import { useEffect, useState } from 'react'
import Page from './Components/Page'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'

function App() {
  
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const[showModal,SetShowModal] = useState(false)

  function handleToggleModal(){
    SetShowModal(!showModal) 
    console.log("execute order 66")
  }

  useEffect(()=>{
    async function fetchApiData(){
      const NASA_kEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_kEY}`
      const today = new Date().toDateString
      const localkey = `NASA-${today}`
      if (localStorage.getItem(localkey)){
        const apiData = JSON.parse(localStorage.getItem(localkey))
        setData(apiData)
        console.log ('fetched from cache todaay')
        return
      }
      localStorage.clear()
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        localStorage.setItem(localkey,JSON.stringify(apiData))
        console.log('Data\n',apiData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchApiData() 

  },[])

  return (
    <>
    
    { data ? (<Page data ={data}/>):
    <div className='loadingState'>
      <i className="fa-solid fa-gear"></i>
    </div>
    }
    {showModal && (<SideBar handleToggleModal = {handleToggleModal} data ={data}/>)}
    {data && (<Footer handleToggleModal = {handleToggleModal} data ={data}/>)}
     
    </>
  )
}

export default App
