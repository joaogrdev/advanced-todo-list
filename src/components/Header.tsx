import { ListTodo, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="w-full flex items-center justify-between py-5 px-5 tablet:px-10 bg-contrast text-lightest">
      <ListTodo className="" />
      <h1 className=" font-bold text-sm mobile:text-base tablet:text-xl">
        ADVANCED TODO LIST
      </h1>
      <div className="flex gap-2 tablet:gap-5 items-center">
        {theme === "light" ? (
          <Sun
            className="cursor-pointer hover:scale-115"
            onClick={toggleTheme}
          />
        ) : (
          <Moon
            className="cursor-pointer hover:scale-115"
            onClick={toggleTheme}
          />
        )}

        <a
          href="https://github.com/joaogrdev/advanced-todo-list"
          target="_blank"
          title="Link to Github"
        >
          <img
            src="https://img.icons8.com/?size=25&id=12599&format=png&color=ffffff"
            alt="Icon Github"
            className="hover:scale-110 transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joaogrs/"
          target="_blank"
          title="Link to Linkedin"
        >
          <img
            src="https://img.icons8.com/?size=25&id=8808&format=png&color=ffffff"
            className="hover:scale-110 transition-all cursor-pointer"
            alt="Icon Linkedin"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
