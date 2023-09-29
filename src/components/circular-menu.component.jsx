import MenuItem from "./menu-item.component";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as DotsIcon } from "../assets/dots-icon.svg";
import { ReactComponent as XIcon } from "../assets/x-icon.svg";

const CircularMenu = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMovedToBottom, setIsMovedToBottom] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMovedToBottom(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Clicked outside the menu
        setIsOpen(false);
        setIsMovedToBottom(true);
        const contentToBlur = document.querySelector(".route-content");
        if (contentToBlur) {
          contentToBlur.classList.remove("blur-background");
        }
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleSetIsOpen = (event) => {
    if (isMovedToBottom) {
      setIsMovedToBottom(false);
      setIsOpen((prevBool) => !prevBool);

      const contentToBlur = document.querySelector(".route-content");
      if (contentToBlur) {
        if (!isOpen) {
          contentToBlur.classList.add("blur-background");
        } else {
          contentToBlur.classList.remove("blur-background");
        }
      }
      event.stopPropagation();
    } else {
      if (isOpen) {
        setIsOpen(false);
        setIsMovedToBottom(true);
        const contentToBlur = document.querySelector(".route-content");
        if (contentToBlur) {
          contentToBlur.classList.remove("blur-background");
        }
      } else {
        setIsOpen(true);
        setIsMovedToBottom(false);
        const contentToBlur = document.querySelector(".route-content");
        if (contentToBlur) {
          contentToBlur.classList.add("blur-background");
        }
      }
    }
    localStorage.setItem("isMovedToBottom", isMovedToBottom ? "true" : "false");
  };

  const handleCloseMenu = () => {
    setIsOpen(false);

    setIsMovedToBottom(true);
    const contentToBlur = document.querySelector(".route-content");
    contentToBlur.classList.remove("blur-background");
  };

  // useEffect(() => {

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     document.body.classList.remove('blur-background');
  //   }
  // }, []);
  

  return (
    <>
      <div
        ref={menuRef}
        className={`circular-menu ${isMovedToBottom ? "move-menu-bottom" : ""}`}
      >
        <div className="menu-button" onClick={handleSetIsOpen}>
          {isOpen ? (
            <XIcon className="x-icon display-icon" />
          ) : (
            <DotsIcon className={`dots display-icon ${isOpen ? "open" : ""}`} />
          )}
        </div>
        {pages.map((item, index) => (
          <MenuItem
            className={`${isMovedToBottom ? "move-menu-bottom" : ""}`}
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
