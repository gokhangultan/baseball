import { Link } from "react-router-dom/cjs/react-router-dom";

export default function HeaderNavBar() {

    return (
        <>
            <Link to="/">
                <button className="hover:text-[#203682]">Home</button>
            </Link>
            <Link to="/about">
                <button className="hover:text-[#203682]">About</button>
            </Link>
            <Link to="/">
                <button className="hover:text-[#203682]">How To</button>
            </Link>
            <Link to="/">
                <button className="hover:text-[#203682]">NFTs</button>
            </Link>
            <a href="https://twitter.com/baseballersbase" target="_blank">
                <button className="hover:text-[#203682]">Twitter</button>
            </a>
            <a href="https://discord.gg/baseballers" target="_blank">
                <button className="hover:text-[#203682]">Discord</button>
            </a>
            <a href="https://discord.gg/baseballers" target="_blank">
                <button className="hover:text-[#203682]">Telegram</button>
            </a>
        </>
    )
}