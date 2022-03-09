import ImageTitle from "./title/imageTitle.js";
import TitleText from "./title/titleText.js";
import "../style/title.css";

function title() {
    return (
        <div className="title">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <TitleText />
                        </td>
                        <td><ImageTitle /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default title;