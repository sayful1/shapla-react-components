import React, {FC, useState} from "react";
import {StarRating} from "../../src"
import DocTab from "./components/DocTab";

const StarRatingPage:FC = () => {
    const [rating,setRating]= useState(3);
        const staticRating= 3.2;
        const  staticRating2 = 3.5;
        const staticRating3 = 3.7;
        const properties = {
            value: { type: [String, Number], default: `null` },
            isStatic: { type: Boolean, default: `false` },
            color: { type: String, default: "" },
            activeColor: { type: String, default: "" },
            ratings: {type: Array<number>(),default: `[1, 2, 3, 4, 5]`,}
        }
    return (
        <DocTab
        heading={"Star Rating"}
        slug="StarRating"
        name="StarRating"
        scss-mixin="star-rating"
        properties={properties}
        desc={{}}
        >
        <div>
            <div className="shapla-columns">
                <div className="shapla-column">
                    <span>Input</span>
                    <StarRating value={rating} onUpdateValue={(v)=>setRating(v as number)}/>
                    <pre>{rating}</pre>
                </div>
                <div className="shapla-column">
                    <span>Static</span>
                    <StarRating value={staticRating}
                    isStatic={true} />
                    <pre>{staticRating}</pre>
                </div>
                <div className="shapla-column">
                    <span>Static 2</span>
                    <StarRating value={staticRating2}
                    isStatic={true} />
                    <pre>{staticRating2}</pre>
                </div>
                <div className="shapla-column">
                    <span>Static 3</span>
                    <StarRating value={staticRating3}
                    isStatic={true} />
                    <pre>{staticRating3}</pre>
                </div>
            </div>
        </div>
        </DocTab>
    );
};
export default StarRatingPage;
=======
import React, { FC, useState } from "react";
import { StarRating } from "../../src";
import DocTab from "./components/DocTab";

const StarRatingPage: FC = () => {
  const [rating, setRating] = useState(3);
  const staticRating = 3.2;
  const staticRating2 = 3.5;
  const staticRating3 = 3.7;
  const properties = {
    value: { type: [String, Number], default: `null` },
    isStatic: { type: Boolean, default: `false` },
    color: { type: String, default: "" },
    activeColor: { type: String, default: "" },
    ratings: { type: Array<number>(), default: `[1, 2, 3, 4, 5]` },
  };
  return (
    <DocTab
      heading={"Star Rating"}
      slug="StarRating"
      name="StarRating"
      scss-mixin="star-rating"
      properties={properties}
      desc={{}}
    >
      <div>
        <div className="shapla-columns">
          <div className="shapla-column">
            <span>Input</span>
            <StarRating
              value={rating}
              onUpdateValue={(v) => setRating(v as number)}
            />
            <pre>{rating}</pre>
          </div>
          <div className="shapla-column">
            <span>Static</span>
            <StarRating value={staticRating} isStatic={true} />
            <pre>{staticRating}</pre>
          </div>
          <div className="shapla-column">
            <span>Static 2</span>
            <StarRating value={staticRating2} isStatic={true} />
            <pre>{staticRating2}</pre>
          </div>
          <div className="shapla-column">
            <span>Static 3</span>
            <StarRating value={staticRating3} isStatic={true} />
            <pre>{staticRating3}</pre>
          </div>
        </div>
      </div>
    </DocTab>
  );
};
export default StarRatingPage;
