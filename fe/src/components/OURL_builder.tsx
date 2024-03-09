import { Input } from "./ui/input";
import { TabsDemo } from "./Headers_dropdown";
import { MethodDropDown } from "./Method_dropdown";
import { useState } from "react";
import FormUrl from "./utils/FormUrl";

export interface IURL_BuilderProps {}



export function URL_Builder(props: IURL_BuilderProps) {

  const BASEURL = "https://aargee.pythonanywhere.com/curl?";
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")

  return (
    <div className="grid grid-cols-2 p-5 mx-20">
      <div className="">
        <div className="grid grid-cols-[max-content_auto] w-full overflow-clip">
          <div className="w-full p-3 text-right font-light tracking-widest">URL</div>
          <div className="w-full flex border">
            <MethodDropDown method={method} setMethod={setMethod} />
            <Input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://foo.bar"
              className="p-3 h-full rounded-none border-none w-full focus-visible:outline-none"
            />
          </div>
        </div>
        <div className="bg-blue-100 w-full col-span-2">
          <TabsDemo />
        </div>
      </div>
      <div className="res px-3">
        <div className="w-full h-full border border-dashed p-3 text-gray-600 font-medium">
          <FormUrl BASE_URL={BASEURL} req={url} method={method} />
        </div>
      </div>
    </div>
  );
}
