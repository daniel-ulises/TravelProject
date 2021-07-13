import React, {useState, useContext} from "react";
import {PropContainer} from "../../../PropContainer";
import {AiOutlineLike} from "react-icons/ai";
import {GiAirplaneDeparture} from "react-icons/gi";
import MobileComments from "./MobileComments";

function GalleryCard(props) {
  const {setAirlines} = useContext(PropContainer);

  const [count, setCount] = useState(props.likesNum);

  const addLike = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <img className="img one" src={props.postPicture} alt="" />

      <div className="text text-one">
        <p className="card-date">
          {new Date(props.date).toLocaleString("en-GB")}
        </p>
        <h3 className="card-header">
          {props.location}
          <div className="airplane-button">
            <GiAirplaneDeparture
              className="airplane"
              onClick={() => setAirlines(true)}
            />
          </div>
        </h3>
        <p>{props.description}</p>

        <div className="description">
          <p className="description__from-user">
            {/* <span className="bold">{props.authorName}</span>:{" "} */}
            {/* //comment section */}
          </p>
        </div>

        <div className="profile">
          <div className="profile__container">
            <img
              className="profile__container--photo"
              src={props.authorPicture}
              alt=""
            />
            <div className="profile__container--user-data">
              <p className="full-name">{props.authorName}</p>
              <p className="username">{props.authorName}</p>
            </div>
            <div className="profile__container--likes">
              <p>Likes: {props.likes}</p>
            </div>
            <button className="like-ico">
              <AiOutlineLike onClick={addLike} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
