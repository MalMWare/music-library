//These components will be making seperate API calls from the app component to serve specific data about our artist

import { useState, useEffect } from 'react'
import ArtistView from './ArtistView'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <p>Album Data does here</p>
        </div>
    )
}

export default AlbumView