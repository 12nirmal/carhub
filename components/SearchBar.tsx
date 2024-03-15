"use client";

import { use, useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, steManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            steManufacturer={steManufacturer}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
