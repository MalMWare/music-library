import { useState, useRef } from 'react'
import Gallery from './components/gallery'
import Search from './components/search'
import { DataContext } from './context/DataContext'
import './App.css'
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
            <SearchContext.Provider value={{
                term: searchInput,
                setSearch: handleSearch
            }}>
            <Search />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>
        </div>
    )
}

export default App


