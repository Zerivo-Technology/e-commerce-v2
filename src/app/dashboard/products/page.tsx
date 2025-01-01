import NavbarAdmin from "../components/NavbarAdmin";
import TableAdmin from "../components/TableAdmin";

export default function ProductsTable() {
  return (
    <>
      <div className="flex flex-row gap-5 h-full min-h-screen">
        <NavbarAdmin />
        <TableAdmin />
      </div>
    </>
  );
}
