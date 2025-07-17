"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, LoaderIcon, PanelTopOpenIcon } from "lucide-react";


export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola Mundo")}>Click Me</Button>
      <Button variant="success">success</Button>
      <Button className="normal-case">capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button>
        <PanelTopOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}