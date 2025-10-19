import './gallery.css'
import Gallery1 from '../Assets/gallery-1.png';
import Gallery2 from '../Assets/gallery-2.png';
import Gallery3 from '../Assets/gallery-3.png';
import Gallery4 from '../Assets/gallery-4.png';
import GalleryArrow from '../Assets/white-arrow.png';



function Gallery() {
  return (
    <div className="gallery">
       <div className="galleryUp">
        <div className="galleryImg">
        <img src={Gallery1} alt="" />
       </div>
       <div className="galleryImg">
        <img src={Gallery2} alt="" />
       </div>
       <div className="galleryImg">
        <img src={Gallery3} alt="" />
       </div>
       <div className="galleryImg">
        <img src={Gallery4} alt="" />
       </div>
       </div>
       <button className='galleryBtn'>See More Here <img src={GalleryArrow} alt="" /></button>

    </div>
  )
}

export default Gallery