import ImageGallery from "react-image-gallery";
import './DetailsCarosel.css';
const images = [
    {
        original: require("../assets/personalcare.png"),
        thumbnail: require("../assets/personalcare.png"),
    },
    {
        original: require("../assets/personalcare.png"),
        thumbnail: require("../assets/personalcare.png"),
    },
    {
        original: require("../assets/personalcare.png"),
        thumbnail: require("../assets/personalcare.png"),
    },
];

export default function DetailsCarosel() {


    return (
        <div style={{ width: '50%', height: 600 }}><ImageGallery items={images} /></div>
    );


}

