//These components will be making seperate API calls from the app component to serve specific data about our artist

import { useState, useEffect } from "react";

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>Artist data goes here</p>
        </div>
    )
}

export default ArtistView