import React from "react";
import {Card, Skeleton} from "@nextui-org/react";

export default function SkeletonCard() {
  return (
    <Card className="min-w-[180px] w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[200px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
