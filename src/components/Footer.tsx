const Footer = () => {
  return (
    <footer className="flex justify-center py-1 px-10 text-xs w-full text-lightest bg-contrast">
      <p className="whitespace-nowrap">
        Criado por{" "}
        <a
          href="https://www.linkedin.com/in/joaogrs/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-contrast"
        >
          João Gabriel Ribeiro
        </a>{" "}
        | Desenvolvido em 2025
      </p>
    </footer>
  );
};

export default Footer;
