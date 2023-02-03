import React from "react";
import DesktopView from "../common/header/DesktopView";
import DesktopCarousal from "./DesktopCarousal";
import MobileViewCarousal from "./MobileViewCarousal";

export default function HomeCarousal() {
  return (
    <div>
      <div className="hidden md:block sm:block">
        <DesktopCarousal />
      </div>
      <div className="sm:hidden">
        <MobileViewCarousal />
      </div>
    </div>
  );
}
