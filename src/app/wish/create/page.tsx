import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import WishForm from "./_components/WishForm";

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>Share Your Wishes</CardTitle>
        </CardHeader>
        <CardContent>
          <WishForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
