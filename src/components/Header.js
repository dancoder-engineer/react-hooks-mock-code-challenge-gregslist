import React from "react";
import Search from "./Search";

function Header({searchATerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchATerm={searchATerm}/>
    </header>
  );
}

export default Header;
