"use client";

import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  DonutChart,
  Legend,
} from "@tremor/react";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-9">
        <SubscriptionTable />
      </div>
      <div className="col-span-12 sm:col-span-3">
        <SubscriptionCategoryChart />
      </div>
    </div>
  );
}

function SubscriptionTable() {
  return (
    <Card>
      <h2 className=" mb-4">Subscriptions</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Subscription</TableHeaderCell>
            <TableHeaderCell>Cost</TableHeaderCell>
            <TableHeaderCell>Frequency</TableHeaderCell>
            <TableHeaderCell>Payment Date</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </Card>
  );
}

function SubscriptionCategoryChart() {
  return (
    <Card className="flex flex-col justify-between h-full">
      <h2 className=" mb-4">Subscription by Category</h2>
    </Card>
  );
}
