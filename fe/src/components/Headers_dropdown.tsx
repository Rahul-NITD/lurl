import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { NewTabs } from "./Content_tabs";

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

const HeadersContent = () => (
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

const AuthContent = () => (
  <Card>
    <CardHeader>
      <CardTitle className="font-thin text-lg uppercase tracking-widest">
        Authentication
      </CardTitle>
      <CardDescription>Add authentication parameters here</CardDescription>
    </CardHeader>
    <CardContent className="">
      <NewTabs
        tabs={[
          {
            name: "None",
            node: <>Helu</>,
          },
          {
            name: "Basic",
            node: <>Helu</>,
          },
        ]}
      />
    </CardContent>
  </Card>
);



export function TabsDemo() {
  return (
    <NewTabs tabs={[
      {
        name: "query",
        node: <QueryContent />
      },
      {
        name: "headers",
        node: <HeadersContent />
      },
      {
        name: 'auth',
        node: <AuthContent />
      }
    ]} /> 
  );
}
