import {Link} from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaRegComment,
  FaUserAlt,
} from "react-icons/fa";
import {useContext} from "react";
import {PropContainer} from "../../PropContainer";
import PictureUploadPopup2 from "../PictureUploadPopup/PictureUploadPopup";

function MobileNavbar() {
  const {username, buttonPopup, setButtonPopup} = useContext(PropContainer);
  return (
    <div className="mobile-navbar">
      <ul>
        <li>
          <Link to="/home" className="navlink">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/search" className="navlink">
            <FaSearch />
          </Link>
        </li>
        <li>
          <div className="btn">
            <button onClick={() => setButtonPopup(true)} className="btn-plus">
              <FaPlus className="plus" />
            </button>
            <PictureUploadPopup2 trigger={buttonPopup}></PictureUploadPopup2>
          </div>
        </li>
        <li>
          <Link to="/" className="navlink">
            <FaRegComment />
          </Link>
        </li>
        <li>
          <Link to={`/profile/${username}`} className="navlink">
            <FaUserAlt />
          </Link>
        </li>
      </ul>
      <div className="underline"></div>
    </div>
  );
}

export default MobileNavbar;
