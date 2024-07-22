import { Breadcrumbs } from "@/components/breadcrumbs";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Category } from "@/models/Category";
import { getDBConnection } from "@/app/database/connection";

const CategoriesPage = async () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin" },
    { title: "Categories", link: "/admin/categories" },
  ];

  const connection = await getDBConnection();
  const response = await connection.getRepository(Category).find();
  const data = response.map((category) => ({
    id: category.id,
    title: category.title,
    imageUrl: category.imageUrl,
    isPublished: category.isPublished,
    description: category.description,
  }));

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <div className="flex justify-between items-center">
          <Breadcrumbs items={breadcrumbItems} />
          <Link href={`/admin/categories/create`}>
            <Button>+ Add New</Button>
          </Link>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default CategoriesPage;
