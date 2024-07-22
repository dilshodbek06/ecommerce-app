import { Breadcrumbs } from "@/components/breadcrumbs";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Category } from "@/models/Category";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      title: "Category 1",
      description: "lorem nimadir",
      imageUrl: "m@example.com",
      isPublished: true,
    },
  ];
}

const CategoriesPage = async () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin" },
    { title: "Categories", link: "/admin/categories" },
  ];

  const data = await getData();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <div className="flex justify-between items-center">
          <Breadcrumbs items={breadcrumbItems} />
          <Button>+ create</Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default CategoriesPage;
