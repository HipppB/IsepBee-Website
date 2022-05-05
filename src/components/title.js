import ImageTitle from "./title/imageTitle.js";
import TitleText from "./title/titleText.js";
import "../style/title.css";

function Title() {
  return (
    <div className="title" id="title">
      <div className="textContainer">
        <TitleText />
      </div>
      <div className="textcontainer imageTitleContainer">
        <ImageTitle />
      </div>
    </div>
  );
}

export default Title;
