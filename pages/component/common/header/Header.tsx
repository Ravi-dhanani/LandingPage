import React from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <div>
      <header className="border-b ">
        <TopHeader />
        <div className="md:hidden">
          <MobileView />
        </div>
        <div className="hidden md:block">
          <DesktopView />
        </div>
      </header>
    </div>
  );
}
