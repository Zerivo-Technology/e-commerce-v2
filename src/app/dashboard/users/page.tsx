import NavbarAdmin from "../components/NavbarAdmin";
import TableAdmin from "../components/TableAdmin";

const DataAdmin = () => {
  return (
    <div className="flex flex-row gap-5 h-full">
      <NavbarAdmin />
      <TableAdmin />
    </div>
  );
};

export default DataAdmin;
