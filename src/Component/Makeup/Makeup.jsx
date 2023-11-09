import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: "auto", height: 400 }}
            variant="quilted"
            cols={4}
            rowHeight={300}
        >
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={item.cols || 2}
                    rows={item.rows || 1}
                >
                    <img
                        {...srcset(item.img, 300, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        cols: 4
    },

    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        cols: 2
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        cols: 2
    }
];