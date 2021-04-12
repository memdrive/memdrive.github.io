import {Link} from "react-router-dom";

function Root() {
    return (
    <header>
        <div class="headerwrapper">
            <Link to="/">memdrive</Link>
            <nav>
                <ul>
                    <li><Link to="/listening">listening</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Root;