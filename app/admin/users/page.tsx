import { Breadcrumbs } from "@/components/breadcrumbs";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

const UsersPage = async () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin" },
    { title: "Users", link: "/admin/users" },
  ];

  const data = await getData();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default UsersPage;
