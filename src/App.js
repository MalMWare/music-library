import { useEffect, useState } from 'react'
import Gallery from './components/gallery'
import Search from './components/search'
import { DataContext } from './context/DataContext'
import './App.css'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {

      const fetchData = async () => {
        if (search) {
            document.title = `${search} Music`
            const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
      }
      fetchData()
  }, [search])

  useEffect(() => console.log(data), [data])

    return (
        <div className='App'>
            <Search setSearch={setSearch}/>
            {message}
            <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>
        </div>
    )
}

export default App


