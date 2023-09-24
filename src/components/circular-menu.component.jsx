import MenuItem from "./menu-item.component";
import { useState } from "react";
import { ReactComponent as DotsIcon } from '../assets/dots-icon.svg';
import { ReactComponent as XIcon } from '../assets/x-icon.svg';


const CircularMenu = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMovedToBottom, setIsMovedToBottom] = useState(false);

  const handleSetIsOpen = () => {
    if(isMovedToBottom) {
      setIsMovedToBottom(false)
      setIsOpen(prevBool => !prevBool)
    } else {
    setIsOpen(prevBool => !prevBool);
  };
}



  const handleCloseMenu = () => {
    setIsOpen(false);

    setIsMovedToBottom(true)

    
  };

  

  return (
    <>
    
    <div className={`circular-menu ${isMovedToBottom ? 'move-menu-bottom' : "" }`}>
    
      <div className="menu-button" onClick={handleSetIsOpen}>{isOpen ? <XIcon className='x-icon display-icon' /> : <DotsIcon className={`dots display-icon ${isOpen ? 'open' : ''}`} />  }</div>
        {pages.map((item, index) => (
          <MenuItem
            className={`${isMovedToBottom ? 'move-menu-bottom' : "" }`}
            
            key={index}
            item={item}
            rotation={(360 / pages.length) * index}
            menuIsOpen={isOpen}
            transitionDelay={index * 75}
            onClick={handleCloseMenu}
          />
        ))}
        
    </div>
    
    </>
  );
};
export default CircularMenu;
