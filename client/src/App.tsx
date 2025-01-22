import { use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { expenses } from "@/api/promises";

function App() {
  const { total } = use(expenses.get.total);

  return (
    <>
      <Card className="w-1/2 mx-auto">
        <CardHeader>
          <CardTitle>Total spent</CardTitle>
          <CardDescription>The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{total}$</p>
        </CardContent>
      </Card>

    </>
  )
}

export default App
