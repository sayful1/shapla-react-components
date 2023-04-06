import React, {FC, ReactNode} from "react";
import "./style.scss";

interface Props {
    containerWidth?: string;
    containerHeight?: string;
    heightRatio?: number;
    widthRatio?: number;
    isRounded?: boolean;
    children: ReactNode;
}

const ImageContainer: FC<Props> = ({
                                       containerWidth = "",
                                       containerHeight = "",
                                       heightRatio = 1,
                                       widthRatio = 1,
                                       isRounded = false,
                                       children,
                                   }) => {
    const [className, setClassName] = React.useState<string>("");
    React.useEffect(() => {
        const classes = ["shapla-image-container"];
        if (!containerWidth) classes.push("is-fullwidth");
        if (isRounded) classes.push("is-rounded");
        setClassName(classes.join(" "));
    }, [containerWidth, isRounded]);
    const [containerStyles, setContainerStyles] = React.useState<{
        width?: string;
        height?: string;
        paddingTop?: string;
    }>({});
    React.useEffect(() => {
        const styles ={
            width: containerWidth? containerWidth : "",
            height: containerHeight? containerHeight : containerWidth ? containerWidth : "",
            paddingTop:!containerWidth ? `${(100 / widthRatio) * heightRatio}%` : "",
        }
        setContainerStyles(styles);
    }, [containerWidth, containerHeight, heightRatio, widthRatio]);
    return (
        <div className={className} style={containerStyles}>
            {children}
        </div>
    );
};

export default ImageContainer;
