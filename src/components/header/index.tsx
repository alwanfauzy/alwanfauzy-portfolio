import Link from "next/link";
import { FC } from "react";
import Nav from "../nav";
import { Button } from "../ui/button";

const Header: FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Alwan<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/*<Link
            href="https://docs.google.com/document/d/1tlXo26tF2k1ko7JkMmZfxldvS7fIf-mW/edit?usp=sharing&ouid=108685435910779053166&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </Link>*/}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
