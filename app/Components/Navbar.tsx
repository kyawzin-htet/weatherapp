"use client";
import React from "react";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";


function Navbar() {

  return (
    <div className="w-full py-4 flex items-center justify-between">    
        <SearchDialog />
        <ThemeDropdown />
    </div>
  );
}

export default Navbar;