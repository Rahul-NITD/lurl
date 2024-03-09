import * as React from "react";
import { Input } from "./ui/input";
import { TabsDemo } from "./Headers_dropdown";
import { Button } from "./ui/button";
import { MethodDropDown } from "./Method_dropdown";

export interface IURL_BuilderProps {}



export function URL_Builder(props: IURL_BuilderProps) {
  return (
    <div className="grid grid-cols-2 p-5 mx-20">
      <div className="">
        <div className="grid grid-cols-[max-content_auto] w-full overflow-clip">
          <div className="w-full p-3 text-right font-light tracking-widest">URL</div>
          <div className="w-full flex border">
            <MethodDropDown />
            <Input
              type="url"
              placeholder="https://foo.bar"
              className="p-3 h-full rounded-none border-none w-full focus-visible:outline-none"
            />
          </div>
        </div>
        <div className="bg-blue-100 w-full col-span-2">
          <TabsDemo />
        </div>
      </div>
      <div className="res"></div>
    </div>
  );
}
