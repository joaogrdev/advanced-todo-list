import { ListTodo } from "lucide-react";

const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-10 bg-contrast text-lightest">
      <ListTodo className="" />
      <h1 className=" font-bold text-base tablet:text-xl">ADVANCED TODO LIST</h1>
      <a
        href="https://www.linkedin.com/in/joaogrs/"
        target="_blank"
        title="Link to Linkedin"
      >
        <img
          src="https://img.icons8.com/?size=25&id=8808&format=png&color=ffffff"
          className="hover:scale-110 transition-all cursor-pointer"
        />
      </a>
    </nav>
  );
};

export default Header;
