import { useNavigate } from "react-router-dom";
import image from "../../images/not-found.png";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <img src={image} alt="image 404" className="notFound__img" />
      <h1>WUBBA LUBBA DUB DUB!</h1>
      <span>THE PORTAL GUN WARPED TO AN UNKNOWN UNIVERSE.</span>
      <span>DON'T EVEN TRIP, DAWG.</span>
      <button className="notFound__btn btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default NotFound;
