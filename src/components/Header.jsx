import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 my-4">
      <h1 className="">INICIO</h1>
      <NavBar />
      <h1>FINAL</h1>
    </div>
  );
};

export default Header;
