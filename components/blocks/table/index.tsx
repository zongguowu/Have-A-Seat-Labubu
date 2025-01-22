import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TableColumn } from "@/types/blocks/table";

export default function ({
  columns,
  data,
  empty_message,
}: {
  columns: TableColumn[];
  data?: any[];
  empty_message?: string;
}) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {columns.map((item: TableColumn, idx: number) => {
            return (
              <TableHead key={idx} className={item.className}>
                {item.title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data ? (
          data.map((item: any, idx: number) => (
            <TableRow key={idx}>
              {columns.map((column: TableColumn, iidx: number) => {
                return (
                  <TableCell key={iidx} className={column.className}>
                    {column.callback
                      ? column.callback(item)
                      : item[column.name as keyof typeof item]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length}>
              <div className="flex w-full justify-center items-center py-8 text-muted-foreground">
                <p>{empty_message}</p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
