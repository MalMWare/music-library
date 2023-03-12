import GalleryItem from './galleryItem'

function Gallery(props){
    return (
        <div>
            <GalleryItem data={props.data} />
        </div>
    )
}

export default Gallery
