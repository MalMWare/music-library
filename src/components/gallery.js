import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './galleryItem'

function Gallery(){
const data = useContext(DataContext)

    return (
        <div>
            {
                data.map((item, index) => {
                    return <GalleryItem key={index} item={item} />
                })
            }
        </div>
    )
}

export default Gallery
