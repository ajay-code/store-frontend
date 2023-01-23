import { useEffect } from 'react'
import { getStores } from '@/core/api'

function App() {
  async function loadData(){
    const stores = await getStores()
    console.log(stores)
  }
  
  useEffect(() => {
    loadData()
  },[])

  return (
    <div className="App">
      <h1>Welcome to Store</h1>
      <div className="card">
          <img src="/store-icon-dark-mode.svg" alt="store icon" style={{width: 200}}/> 
        <p>
          Store App Frontend
        </p>
      </div>
    </div>
  )
}

export default App
