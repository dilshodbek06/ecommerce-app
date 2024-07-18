export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-[80px] border-2 md:pl-56 fixed inset-y-0 w-full">
        {/* <AdminNavbar /> */}
      </div>
      <div className="hidden md:flex border-2 bg-gray-200 h-full w-56 flex-col fixed inset-y-0 z-50">
        {/* <Sidebar /> */}
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
}
