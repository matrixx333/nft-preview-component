import "./creator.css";
import avatar from "../../assets/image-avatar.png";

function Creator() {
  return (
    <div className="creator-container">
      <img id="avatar" src={avatar} alt="Avatar" />
      <div className="name-container">
        <div>
          Creation of <span className="caption">Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
}

export default Creator;
