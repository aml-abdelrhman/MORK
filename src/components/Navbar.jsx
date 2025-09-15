import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ activeTab, setActiveTab, showCart, setShowCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">MORK</h1>
        <ul className="nav-links">
          <li>
            <a
              href="#men"
              onClick={() => setActiveTab("men")}
              className={activeTab === "men" ? "active" : ""}
            >
             رجال
            </a>
          </li>
          <li>
            <a
              href="#women"
              onClick={() => setActiveTab("women")}
              className={activeTab === "women" ? "active" : ""}
            >
              نساء 
            </a>
          </li>
          <li>
            <a
              href="#kids"
              onClick={() => setActiveTab("kids")}
              className={activeTab === "kids" ? "active" : ""}
            >
              أطفال
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="/help">المساعدة</Link>
        <Link to="/contact">تواصل معنا</Link>
        <a
          href="#"
          onClick={() => {
            setShowCart(!showCart); 
          }}
          className={showCart ? "active-cart" : ""}
        >
          <FaShoppingCart size={24} />
        </a>
      </div>
    </nav>
  );
}
