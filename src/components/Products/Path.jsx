import {useParams, Link} from "react-router-dom";
import {capitalize} from "../Helpers/Helpers";
const Path = () => {
    const path = useParams();
   
    return (
        <div className="path-links container">
            <Link to="/">Home</Link>
            {path.category && <Link to={path.category}>{capitalize(path.category)}</Link>}
        </div>
    )
}

export default Path;