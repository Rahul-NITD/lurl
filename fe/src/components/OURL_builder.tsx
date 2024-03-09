import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface IOURL_BuilderProps {}

export function OURL_Builder(props: IOURL_BuilderProps) {
  const [method, setMethod] = useState("GET");

  const DD = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-24 bg-inherit focus-visible:outline-none focus-visible:bg-slate-200"
        >
          {method}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
          <DropdownMenuRadioItem value="GET">GET</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="POST">POST</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const TTabs = () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );

  return (
    <div className="w-full p-3 bg-blue-100 flex flex-col md:flex-row">
      <div className="w-full p-2 bg-green-300">
        <div className="">
          <div className="w-full flex items-center gap-3">
            <Label htmlFor="url">URL</Label>
            <div className="flex w-full bg-slate-100 rounded-lg overflow-hidden">
              <DD />
              <Input
                type="url"
                placeholder="https://foo.bar"
                className="valid:bg-inherit focus:outline-dotted"
              />
            </div>
          </div>
          <TTabs />
        </div>
      </div>
      <div className="w-full p-2 bg-yellow-300"></div>
    </div>
  );
}
