import React from "react";
import { galleryDataFromDatabase } from "../gallery"
import { useState } from "react";

export const Gallery = () =>{
    const [gallery,setGallery] = useState(galleryDataFromDatabase)
    console.log(gallery);
    
    return (
        <div className="d-flex justify-content-center flex-column gap-3">
            {gallery.map(obj => 
                <img key={obj.id} id={obj.id} src={obj.url} alt={obj.title} />
            )}
        </div>
    )
}