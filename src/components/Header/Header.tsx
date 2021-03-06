import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header__container">
            <Link to="/uchiru-test/" className="header__link">
                Все котики
            </Link>
            <Link to="/uchiru-test/favorites" className="header__link">
                Любимые котики
            </Link>
        </div>
    );
};

export default Header;
