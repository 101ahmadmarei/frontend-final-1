import ImageGallery from "react-image-gallery";
import './DetailsCarosel.css';
import { useRetriveData } from '../../API/getRetriveData';

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
    const RetriveQuery = useRetriveData();


    if (RetriveQuery.isLoading)
        return <div>Loading...</div>
    if (RetriveQuery.error) {
        return <div>{RetriveQuery.error.message}</div>
    }

    return (
        <div style={{ width: '100%' }}><ImageGallery items={images} /></div>
    );


}

