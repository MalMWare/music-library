//These components will be making seperate API calls from the app component to serve specific data about our artist

import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/artist/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results.filter(entry => entry.collectionType === 'Album'))
        }
        fetchData()
    }, [id])

    return (
        <div>
            <h2>The id passed was: { id }</h2>
            <p>Artist data goes here</p>
            {artistData.map((album, i) => 
            {return (
                <div key={i}>
                    <Link to={`/album/${album.collectionId}`}>
                        <p> {album.collectionName}</p>
                    </Link> 
                </div>
            )})
            }
        </div>
    )
}

export default ArtistView