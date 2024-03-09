import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

export interface Tab {
  name: string;
  node: ReactNode;
}

export interface ITabProps {
  tabs: Tab[];
}

export function NewTabs(props: ITabProps) {
  return (
    <Tabs defaultValue={props.tabs[0]?.name} className="">
      <TabsList className="w-full flex justify-around">
        {props.tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.name} className="capitalize w-full">
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {props.tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.name}>
          {tab.node}
        </TabsContent>
      ))}
    </Tabs>
  );
}
