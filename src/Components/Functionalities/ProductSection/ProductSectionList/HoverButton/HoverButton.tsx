import React from "react";
import "./HoverButton.sass";
const HoverButton: React.FC<{
  mouseHover: Boolean;
  setMouseHover: (mouseHoverFunc: Boolean) => void;
}> = ({mouseHover,setMouseHover}) => {
  return <div className={mouseHover?`HoverProduct`:`NonHoverProduct`}>View Product</div>;
};

export default HoverButton;
