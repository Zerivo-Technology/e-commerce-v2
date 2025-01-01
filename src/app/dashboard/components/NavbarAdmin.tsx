import { Button } from "@/components/ui/button";
export default function NavbarAdmin() {
  return (
    <div className="flex flex-col h-full min-h-screen sm:w-1/2 md:w-1/4 bg-slate-900 pl-10 pt-20 ">
      <h1 className="mb-20 text-white text-2xl">
        <a href="/dashboard">Dashboard Admin</a>
      </h1>
      <ul className="h-full space-y-9 font-semibold text-white">
        <li>
          <a href="/dashboard/products">Data Products</a>
        </li>
        <li>
          <a href="/dashboard/users">Data Users</a>
        </li>
        <li>
          <Button className="bg-red-600 px-10">log out</Button>
        </li>
      </ul>
    </div>
  );
}
