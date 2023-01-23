import { useEffect } from 'react'
import { getStores } from '@/core/api'
import { Outlet } from 'react-router-dom'
import Nav from './components/navigation/nav'

function Root() {
  async function loadData(){
    const stores = await getStores()
    console.log(stores)
  }
  
  useEffect(() => {
    loadData()
  },[])

  return (
    <div className="main">
      <header>
        <Nav/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root
