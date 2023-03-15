import { useState } from 'react'

function Search(props) {
    let [searchTerm, setSearchTerm] = useState('')

function handleChange (e) {
    setSearchTerm(e.target.value)
}

function handleSubmit (e) {
    e.preventDefault()
    props.setSearch(searchTerm) 
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a search term here" value={searchTerm} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default Search
