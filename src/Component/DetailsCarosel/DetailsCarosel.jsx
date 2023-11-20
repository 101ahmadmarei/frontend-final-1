import ImageGallery from "react-image-gallery";
import './DetailsCarosel.css';
import { useRetriveData } from '../../API/getRetriveData';



export default function DetailsCarosel({img}) {

    const images = [
        {
            original: img,
            thumbnail: img,
        },
        {
            original: img,
            thumbnail: img,
        },
        {
            original: img,
            thumbnail: img,
        },
        {
            original: img,
            thumbnail: img,
        },
        {
            original: img,
            thumbnail: img,
        },
    ];

    return (
        <div style={{ width: '100%' }}><ImageGallery items={images} /></div>
    );


}

