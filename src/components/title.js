import ImageTitle from "./title/imageTitle.js";
import TitleText from "./title/titleText.js";
import "../style/title.css";

function title() {
    return (
        <div className="title">
            <div className="textContainer">
                <TitleText/>
            </div>
            <div className="textcontainer">
                <ImageTitle />
            </div>
        </div>
    );
}

export default title;