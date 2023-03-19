import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Gallery from './components/gallery'
import Search from './components/search'
import { DataContext } from './context/DataContext'
import './App.css'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { SearchContext } from './context/SearchContext'

function App(){
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

async function handleSearch(e, term) {
    e.preventDefault()
    document.title = `${term} Music`
    const response = await fetch(`https://itunes.apple.com/search?term=${term}`)
    const resData = await response.json()
    if (resData.results.length > 0) {
        setData(resData.results)
    } else {
        setMessage('Not Found')
    }
}

    return (
        <div className='App'>
            {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <SearchContext.Provider value={{
                                term: searchInput,
                                setSearch: handleSearch
                            }}>
                            <Search />
                            </SearchContext.Provider>
                            <DataContext.Provider value={data} >
                             <Gallery />
                            </DataContext.Provider>
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


