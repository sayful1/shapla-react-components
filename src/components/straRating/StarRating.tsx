import { useState, useEffect, FC } from "react";
import "./starRating.scss";

interface Props {
  value?: string | number;
  isStatic?: boolean;
  color?: string;
  activeColor?: string;
  ratings?: number[];
  onUpdateValue?: (value: string | number) => void;
}

const StarRating: FC<Props> = ({
  value = null,
  isStatic = false,
  color = "",
  activeColor = "",
  ratings = [1, 2, 3, 4, 5],
  onUpdateValue = null,
}) => {
  const [tempValue, setTempValue] = useState<string | number>("");

  useEffect(() => {
    setTempValue(value ?? "");
  }, [value]);

  const getRating = (): number => {
    if (tempValue != null) {
      return parseFloat(tempValue.toString());
    }

    if (tempValue == null && value != null) {
      return parseFloat(value.toString());
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
      onUpdateValue && onUpdateValue(value);
    }
  };

  const starOver = (rating: number): void => {
    if (!isStatic) {
      setTempValue(rating);
    }
  };
  const starOut = (): void => {
    if (!isStatic) {
      setTempValue(value ?? "");
    }
  };

  return (
    <div className={`star-rating ${isStatic ? "is-static" : ""}`}>
      {ratings?.map((rating) => (
        <label
          key={rating}
          className={`star-rating__label ${getLabelClass(rating)}`}
          style={{
            color:
              isFullStar(rating) || isHalfStar(rating) ? activeColor : color,
          }}
          onClick={() => emitEvent(rating)}
          onMouseOver={() => starOver(rating)}
          onMouseOut={() => starOut()}
        >
          <input type="radio" className="star-rating__radio" />
          {isFullStar(rating) && (
            <span className="star-rating__star-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          )}
          {!isFullStar(rating) && isHalfStar(rating) && (
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmln:xlink="http://www.w3.org/1999/xlink"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <defs>
                  <path id="a" d="M0 0h24v24H0V0z" />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#b)"
                  d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
              </svg>
            </span>
          )}
          {!isFullStar(rating) && !isHalfStar(rating) && (
            <span className="star-rating__star">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          )}
        </label>
      ))}
    </div>
  );
};

export default StarRating;
