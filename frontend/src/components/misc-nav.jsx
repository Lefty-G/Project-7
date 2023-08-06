import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function MiscNav () {

    return (
        <nav className="misc-nav">
            <Link to="/home" className="misc-nav--back-arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="misc-nav--title">Create a post</h1>
        </nav>
    )
}

export default MiscNav