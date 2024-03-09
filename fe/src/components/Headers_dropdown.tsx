import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { TabsLayout } from "./Content_tabs";
import { Button } from "./ui/button";

const QueryContent = () => (
  <Card className="rounded-none">
    <CardHeader>
      <CardTitle className="font-thin text-lg uppercase tracking-widest">
        Query Parameters
      </CardTitle>
      <CardDescription>
        <span className="text-gray-300">https://foo.bar?</span>
        <span>key=value</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="">
      <Table>
        <TableHeader className="hidden">
          <TableRow>
            <TableHead className="w-1"></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <Input
                className="border-b border-x-0 border-t-0 focus-visible:border-gray-400 rounded-none"
                placeholder="key"
              />
            </TableCell>
            <TableCell>
              <Input
                className="border-b border-x-0 border-t-0 focus-visible:border-gray-400 rounded-none"
                placeholder="value"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

interface IHeaderProps {
  headers: IKeyValueCheckProps[];
  setHeader: React.Dispatch<React.SetStateAction<IKeyValueCheckProps[]>>;
}

const HeaderHandler = (
  index: number,
  setHeader: React.Dispatch<React.SetStateAction<IKeyValueCheckProps[]>>
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeader((prev) => {
      return prev.map((val, idx) => {
        return idx == index ? { ...val, [e.target.name]: e.target.value } : val;
      });
    });
  };
};

const EmptyHeader = {
  key: "",
  value: "",
  include: true,
};

const HeadersContent = (props: IHeaderProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="font-thin text-lg uppercase tracking-widest">
        Headers
      </CardTitle>
      <CardDescription>
        <span>Add Header key value pairs</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="">
      <Table>
        <TableHeader className="hidden">
          <TableRow>
            <TableHead className="w-1"></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.headers.map((h, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="p-1">
                <Checkbox
                  checked={h.include}
                  onCheckedChange={() =>
                    props.setHeader((prev) =>
                      prev.map((val, idx) =>
                        idx === index ? { ...val, include: !val.include } : val
                      )
                    )
                  }
                />
              </TableCell>
              <TableCell className="p-1">
                <Input
                  className="border-b border-x-0 border-t-0 focus-visible:border-gray-400 rounded-none"
                  placeholder="key"
                  value={h.key}
                  name="key"
                  onChange={HeaderHandler(index, props.setHeader)}
                />
              </TableCell>
              <TableCell className="p-1">
                <Input
                  value={h.value}
                  className="border-b border-x-0 border-t-0 focus-visible:border-gray-400 rounded-none"
                  placeholder="value"
                  name="value"
                  onChange={HeaderHandler(index, props.setHeader)}
                />
              </TableCell>
              <TableCell
                className="p-0"
                onClick={() =>
                  props.setHeader((prev) => prev.filter((_, i) => i != index))
                }
              >
                <Button variant={"outline"} className="border-none px-0 py-0">
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600"
                  >
                    <path
                      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-xs text-end cursor-pointer flex justify-end">
        <svg
          onClick={() => {
            props.setHeader((prev) => [...prev, EmptyHeader]);
          }}
          width="18"
          height="18"
          viewBox="0 0 15 15"
          className="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </CardContent>
  </Card>
);

const AuthContent = () => (
  <Card>
    <CardHeader>
      <CardTitle className="font-thin text-lg uppercase tracking-widest">
        Authentication
      </CardTitle>
      <CardDescription>Add authentication parameters here</CardDescription>
    </CardHeader>
    <CardContent className="">
      <TabsLayout
        tabs={[
          {
            name: "None",
            node: <>Helu</>,
          },
          {
            name: "Basic",
            node: <>Hi</>,
          },
        ]}
      />
    </CardContent>
  </Card>
);

export interface IKeyValueCheckProps {
  key: string;
  value: string;
  include: boolean;
}

export interface ITabProps {
  headers: IKeyValueCheckProps[];
  setHeader: React.Dispatch<React.SetStateAction<IKeyValueCheckProps[]>>;
}

export function MainTab(props: ITabProps) {
  return (
    <TabsLayout
      tabs={[
        {
          name: "headers",
          node: (
            <HeadersContent
              headers={props.headers}
              setHeader={props.setHeader}
            />
          ),
        },
        {
          name: "auth",
          node: <AuthContent />,
        },
        {
          name: "query",
          node: <QueryContent />,
        },
      ]}
    />
  );
}
