import {useParams, Link} from "react-router-dom";
import {capitalize} from "../Helpers/Helpers";
const Path = () => {
    const path = useParams();
   
    return (
        <div className="path-links container">
            <Link to="/" className="text--sm">Home</Link>
            {path.category   && <Link to={path.category} className="text--sm">{capitalize(path.category)}</Link>}
        </div>
    )
}

export default Path;