import { Link } from "react-router-dom";

const MenuItem = ({ onClick, page, item, rotation, menuIsOpen, transitionDelay }) => {
  
  const Icon = item.icon
  
  const handleMenuItemClick = () => {
    if (onClick) {
      onClick(); // 
    }
  };
    return (
      <Link to={item.route}>
    <div
      className="menu-item"
      style={{
        backgroundColor: item.color,
        transform: `rotate(${rotation}deg) translate(${menuIsOpen ? 175 : 0}%)`,
        transitionDelay: `${menuIsOpen ? transitionDelay : 0}ms`,
      }}
      onClick={handleMenuItemClick}
    >
      <span style={{
        transform: `rotate(${-rotation}deg)`
      }}><Icon className='display-icon' /></span>
    </div>
    </Link>
  );
};
export default MenuItem;
