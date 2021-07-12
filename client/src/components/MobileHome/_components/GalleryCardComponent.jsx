import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { useContext } from "react";
import { PropContainer } from "../../../PropContainer";
import ShowAirlinesPopup from "./ShowAirlinesPopup";

function GalleryCard(props) {
  const { setAirlines } = useContext(PropContainer);

  const addLike = () => {
    return <></>;
  };
  return (
    <div className="card">
      <img className="img one" src={props.src} alt="" />

      <div className="text text-one">
        <p className="card-date">{props.date}</p>
        <h3 className="card-header">
          {props.location}
          <div className="airplane-button">
            <GiAirplaneDeparture
              className="airplane"
              onClick={() => setAirlines(true)}
            />
          </div>
        </h3>
        <p>Example place description {props.placeDescr}</p>

        <div className="description">
          <p className="description__from-user">
            <span className="bold">{props.username}</span>: {props.picDescUser}
          </p>
        </div>

        <div className="profile">
          <div className="profile__container">
            <img className="profile__container--photo" src={props.src} alt="" />
            <div className="profile__container--user-data">
              <p className="full-name">{props.name}</p>
              <p className="username">{props.username}</p>
            </div>
            <div className="profile__container--likes">
              <p>Likes: {props.likesNum}</p>
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
