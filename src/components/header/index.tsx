import Link from "next/link"
import { FC } from "react";

const Header: FC = () => {
    return <header className="py-8 xl:py-12 text-white">
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Alwan<span className="text-accent">.</span>
            </h1>
        </Link>
    </header>
}

export default Header;