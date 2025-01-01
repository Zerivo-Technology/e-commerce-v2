import NavbarAdmin from "./components/NavbarAdmin";

const dashboardAdmin = () => {
  return (
    <div className="flex flex-row gap-5 h-screen">
      <NavbarAdmin />
      <div className="w-full py-10 px-10"></div>
    </div>
  );
};

export default dashboardAdmin;
