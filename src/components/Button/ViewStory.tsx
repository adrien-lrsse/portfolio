import { Container } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import "./viewStory.css";


function ViewStory ({link} : {link : string}) {
    return (
        <a className="view-story" href={link}>
            <p>View Story</p>
            <IoIosArrowForward />

        </a>
    )
}

export default ViewStory;