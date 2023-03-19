import { useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function Search() {
    const {term, setSearch} = useContext(SearchContext)


    return (
        <form >
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <input type="submit" onClick={e => setSearch(e, term.current.value)} />
        </form>
    )
}

export default Search
