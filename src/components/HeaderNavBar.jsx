import { Link } from "react-router-dom/cjs/react-router-dom";

export default function HeaderNavBar({ setIsNavVisible }) {

    return (
        <>
            <Link to="/" onClick={() => setIsNavVisible(false)} >
                <button className="hover:text-[#203682]">Home</button>
            </Link>
            <Link to="/about" onClick={() => setIsNavVisible(false)} >
                <button className="hover:text-[#203682]">About</button>
            </Link>
         
            <a onClick={() => setIsNavVisible(false)} href="https://dexscreener.com/base/0x562bfbc941cd92d6a02eb108fd4413a5b455c467" target="_blank">
                <button className="hover:text-[#203682]">Dexscreener</button>
            </a>
 <a onClick={() => setIsNavVisible(false)} href="https://www.dextools.io/app/en/base/pair-explorer/0x466a105e839a94c12bc8ad534d3b3a192f99c0ae?t=1716142843005" target="_blank">
                <button className="hover:text-[#203682]">Dextools</button>
            </a>
            <a onClick={() => setIsNavVisible(false)} href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x562bfbc941cd92d6a02eb108fd4413a5b455c467" target="_blank">
                <button className="hover:text-[#203682]">Uniswap</button>
            </a>
            <a onClick={() => setIsNavVisible(false)} href="https://basescan.org/token/0x562bfbc941cd92d6a02eb108fd4413a5b455c467" target="_blank">
                <button className="hover:text-[#203682]">Explorer</button>
            </a>
            <a onClick={() => setIsNavVisible(false)} href="https://twitter.com/baseballersbase" target="_blank">
                <button className="hover:text-[#203682]">Twitter</button>
            </a>
            <a onClick={() => setIsNavVisible(false)} href="https://discord.gg/baseballers" target="_blank">
                <button className="hover:text-[#203682]">Discord</button>
            </a>
            <a onClick={() => setIsNavVisible(false)} href="https://t.me/baseballersofficial" target="_blank">
                <button className="hover:text-[#203682]">Telegram</button>
            </a>
        </>
    )
}