import {useState, useEffect, FC} from "react";
import "./starRating.scss";

interface Props {
    modelValue?: string | number;
    isStatic?: boolean;
    color?: string;
    activeColor?: string;
    ratings?: number[];
    onUpdateModelValue?: (value: string | number) => void;
}

const StarRating: FC<Props> = ({
                                   modelValue = null,
                                   isStatic = false,
                                   color = "",
                                   activeColor = "",
                                   ratings = [1, 2, 3, 4, 5],
                                   onUpdateModelValue = null
                               }) => {
    const [tempValue, setTempValue] = useState<string | number>("");

    useEffect(() => {
        setTempValue(modelValue ?? "");
    }, [modelValue]);

    const getRating = (): number => {
        if (tempValue != null) {
            return parseFloat(tempValue.toString());
        }

        if (tempValue == null && modelValue != null) {
            return parseFloat(modelValue.toString());
        }

        return 0;
    };

    const isFullStar = (rating: number): boolean => {
        return getRating() >= rating;
    };

    const isHalfStar = (rating: number): boolean => {
        return getRating() < rating && getRating() > rating - 0.6;
    };

    const getLabelClass = (rating: number): string => {
        return isFullStar(rating) || isHalfStar(rating) ? "is-active" : "";
    };

    const emitEvent = (value: number): void => {
        if (!isStatic) {
            setTempValue(value);
            onUpdateModelValue?.(value);
        }
    };

    const starOver = (rating: number): void => {
        if (!isStatic) {
            setTempValue(rating);
        }
    };
    const starOut = (): void => {
        if (!isStatic) {
            setTempValue(modelValue ?? "");
        }
    };

    return (
        <div className={`star-rating ${isStatic ? "is-static" : ""}`}>
            {ratings?.map((rating) => (
                <label
                    key={rating}
                    className={`star-rating__label ${getLabelClass(rating)}`}
                    style={{color: isFullStar(rating) || isHalfStar(rating) ? activeColor : color,}}
                    onClick={() => emitEvent(rating)}
                    onMouseOver={() => starOver(rating)}
                    onMouseOut={() => starOut()}
                >
                    <input type="radio" className="star-rating__radio"/>
                    <span className="star-rating__star">
            {isFullStar(rating) && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            )}
                        {!isFullStar(rating) && isHalfStar(rating) && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <defs>
                                    <path id="a" d="M0 0h24v24H0V0z"/>
                                </defs>
                                <clipPath id="b">
                                    <use overflow="visible"/>
                                </clipPath>
                                <path clipPath="url(#b)" d="M0 0h24v24H0V0z"/>
                                <path
                                    clipPath="url(#b)"
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                />
                            </svg>
                        )}
                        {!isFullStar(rating) && !isHalfStar(rating) && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        )}
                             </span>

                </label>
                //     <label
                //         key={rating}
                //         className={`star-rating__label ${getLabelClass(rating)}`}
                //         style={{color: isFullStar(rating) || isHalfStar(rating) ? activeColor : color,}}
                //         onClick={() => emitEvent(rating)}
                //         onMouseOver={() => starOver(rating)}
                //         onMouseOut={() => starOut()}
                //     >
                //         <input type="radio" className="star-rating__radio" />
                //         <span className="star-rating__star">
                // {isFullStar(rating) && (
                //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                //         <path d="M0 0h24v24H0z" fill="none" />
                //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                //         <path d="M0 0h24v24H0z" fill="none" />
                //     </svg>
                // )}
                //             {!isFullStar(rating) && isHalfStar(rating) && (
                //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                //                     <defs>
                //                         <path id="a" d="M0 0h24v24H0V0z" />
                //                     </defs>
                //                     <clipPath id="b">
                //                         <use overflow="visible" />
                //                     </clipPath>
                //                     <path clipPath="url(#b)" d="M0 0h24v24H0V0z" />
                //                     <path
                //                         clipPath="url(#b)"
                //                         d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                //                     />
                //                 </svg>
                //             )}
                //             {!isFullStar(rating) && !isHalfStar(rating) && (
                //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                //                     <path d="M0 0h24v24H0z" fill="none" />
                //                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                //                     <path d="M0 0h24v24H0z" fill="none" />
                //                 </svg>
                //             )}
                //         </span>
                //     </label>
            ))}
        </div>
    );
}

export default StarRating;