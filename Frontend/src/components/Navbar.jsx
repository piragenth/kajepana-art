import Logo from "../assets/drawing-pencil-pencil-with-word-pen-it_339976-59924.avif";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={Logo} alt="" />
    </div>
  );
}
