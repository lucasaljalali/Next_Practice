import Link from "next/link";

export default function Navbar() {
  const pagesLinks = ["Home", "Pokemons", "Contact"];
  return (
    <div className="flex items-center gap-5 p-6 bg-stone-700 text-md text-stone-300 justify-center sm:justify-start	">
      {pagesLinks.map((link) => {
        return (
          <Link
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="px-4 py-2 text-sm rounded-xl transition-all bg-stone-800 hover:bg-stone-900 sm:px-6 text-md"
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
