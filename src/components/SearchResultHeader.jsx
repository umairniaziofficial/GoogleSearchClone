import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { menu } from "../utils/Constants";
import { Context } from "../utils/ContextApi";

const SearchResultHeader = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("All");

  useEffect(() => {
    return () => {
      setImageSearch(false);
    };
  }, []);

  const clickHandle = (menuItem) => {
    let isImageType = menuItem.name === "Images";
    setSelectedMenuItem(menuItem.name);
    setImageSearch(isImageType ? true : false);
  };
  const { setImageSearch } = useContext(Context);

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              className="hidden md:block w-[92px] mr-10"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menuItem, index) => (
          <span
            key={index}
            className={`relative flex items-center p-3 cursor-pointer ${
              selectedMenuItem === menuItem.name
                ? "text-[#1a73e8]"
                : "text-[#5f6368]"
            } relative`}
            onClick={() => clickHandle(menuItem)}
          >
            <span className="hidden md:block mr-2">{menuItem.icon}</span>
            <span className="text-sm">{menuItem.name}</span>
            {selectedMenuItem === menuItem.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
