//These components will be making seperate API calls from the app component to serve specific data about our artist

import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const navigate = useNavigate()

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
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate(1)}>Forward</button>
            </div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            <h4>The id passed was: { id }</h4>
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