

import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist
        or has been moved.
      </p>

      <Link to="/" className="back-home">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;