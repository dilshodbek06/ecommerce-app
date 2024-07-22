"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Category } from "@/models/Category";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Index",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPublished: boolean = row.getValue("isPublished");

      return (
        <Badge
          className={cn(
            "bg-red-500 hover:bg-red-600",
            isPublished && "bg-green-500 hover:bg-green-600"
          )}
        >
          {isPublished ? "Published" : "Draft"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-4 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/teacher/courses/${id}`}>
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" /> View
              </DropdownMenuItem>
            </Link>
            <Link href={`/teacher/courses/${id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" /> Edit
              </DropdownMenuItem>
            </Link>
            <Link href={`/teacher/courses/${id}`}>
              <DropdownMenuItem>
                <Trash className="h-4 w-4 mr-2" /> Delete
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    header: "Actions",
  },
];
