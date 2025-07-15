import React from "react";
import ShopFrontpage from "@/components/shop-frontpage";
import Temp from "@/components/helpers/temp";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Temp />
        <ShopFrontpage />
      </div>
    </div>
  );
}
