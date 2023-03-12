import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {props.data.length > 0 && <p>{props.data[0].artistName}</p>}
            {props.data.length > 0 && <p>{props.data[0].trackName}</p>}
        </div>
    )
}

export default GalleryItem
