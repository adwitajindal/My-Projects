import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>      
      </div>
      <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineOne">
                Hello
            </span>
            <span className="header__optionLineTwo">
                Sign in
            </span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">
                Returns
            </span>
            <span className="header__optionLineTwo">
                & Orders
            </span>
            </div>
        <div className="header__option">

            <span className="header__optionLineOne">
                Your
            </span>
            <span className="header__optionLineTwo">
                Prime
            </span>
        </div>
        <div className="header__cart">
    <ShoppingCartOutlinedIcon/>
    <span className=" header__optionLineTwo cart__count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
