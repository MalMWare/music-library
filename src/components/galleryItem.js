import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} >
           <h3>{props.data.artistName}</h3>
           <p>{props.data.trackName}</p>
        </div>
    )
}

export default GalleryItem
