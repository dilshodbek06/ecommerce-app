import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import prisma from "@/lib/db";

const ProductsPage = async () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin" },
    { title: "Products", link: "/admin/products" },
  ];

  const data = await prisma.product.findMany({
    include: {
      Category: {
        select: {
          title: true,
        },
      },
    },
    orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" }],
  });

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <div className="flex justify-between items-center">
          <Breadcrumbs items={breadcrumbItems} />
          <Link href={`/admin/products/create`}>
            <Button>+ Add New</Button>
          </Link>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default ProductsPage;
