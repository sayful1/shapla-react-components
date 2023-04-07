import React, {FC, useEffect} from 'react';
import {Button, Cross, ImageContainer} from "../../../index";
import  "./FeaturedImage.scss";
interface Props {
    placeholderText: string;
    buttonText: string;
    removeButtonText: string;
    imageUrl: string;
    imageAltText?: string;
    addImages: () => void;
    clearImages: () => void;
}

const FeqaturedImage: FC<Props> = ({
                                        placeholderText="No Image Selected",
                                        buttonText="Select Image" ,
                                        removeButtonText ="Remove Image",
                                        imageUrl= "",
                                        imageAltText= "",
                                        addImages,  clearImages
                                   }) => {
    const [has_image, setHasImage] = React.useState(false);
    useEffect(() => {
        setHasImage(imageUrl !== "")
    }, [imageUrl]);


    return (
        <div className="shapla-featured-image">{
            has_image ? (<div className="shapla-featured-image__thumbnail">
                    <ImageContainer container-width="150px" container-height="150px">
                        <img src={imageUrl} alt={imageAltText}/>
                    </ImageContainer>
                    <Cross title={removeButtonText} onClick={clearImages}/>
                </div>) :
                (<div className="shapla-featured-image__placeholder">
                    {placeholderText}
                    <Button size="small" onClick={addImages}>
                        {buttonText}
                    </Button>
                </div>)
        }
        </div>
    );
}
export default FeqaturedImage;