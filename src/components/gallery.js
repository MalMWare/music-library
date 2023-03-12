import GalleryItem from './galleryItem'

function Gallery(props){

    return (
        <div>
            {
                props.data.map((item, index) => {
                    return <GalleryItem key={index} data={item} />
                })
            }
        </div>
    )
}

export default Gallery
