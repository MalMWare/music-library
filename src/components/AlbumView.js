//These components will be making seperate API calls from the app component to serve specific data about our artist

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import ArtistView from './ArtistView'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData.results)
            setAlbumData(resData.results.filter(entry => entry.wrapperType === 'track'))
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
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading...</h2>}
            <h4>The id passed was: {id} </h4>
            {albumData.map((song, i) => {
                return <div key={i}>
                    <p>{song.trackName}</p>
                </div>
            })}
        </div>
    )
}

export default AlbumView