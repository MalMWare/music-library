import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Gallery from './components/gallery'
import Search from './components/search'
import './App.css'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

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

    return (
        <div className='App'>
            {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Search setSearch={setSearch}/>
                            <Gallery data={data} />
                        </>
                    }  />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
            
        </div>
    )
}

export default App


