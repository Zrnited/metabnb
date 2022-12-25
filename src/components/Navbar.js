import React from "react";
import metalogo from "../assets/metalogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import ExtendedNav from "./ExtendedNav";
import { motion } from "framer-motion";
// import { BiCheck } from 'react-icons/bi'

const Navbar = ({
  modal,
  setModal,
  setMoreLinks,
  moreLinks,
  component,
  connectedWallet,
  currentPage,
}) => {
  // console.log(currentPage);

  const scroll = () => {
    if (component === "Home") {
      if (moreLinks) {
        window.scrollTo(0, 3560);
        setMoreLinks(false);
      } else {
        window.scrollTo(0, 2158);
      }
    } else {
      return;
    }
  };

  window.addEventListener("resize", () => {
    setMoreLinks(false);
  });

  return (
    <header className="flex flex-col p-4 shadow-lg fixed left-0 right-0 top-0 bg-white z-20">
      <nav className="flex flex-row justify-between items-center w-full lg:justify-around">
        <img src={metalogo} alt="logo" className="w-36 sm:w-40" />

        <div className="flex flex-row items-center gap-3 sm:hidden">
          <button
            className={
              !connectedWallet
                ? "bg-custompurple px-3 py-2 rounded-lg text-sm text-white opacity-90 hover:opacity-100 transition ease-in-out delay-100"
                : "bg-green-500 flex flex-row gap-2 tracking-wide items-center px-3 py-2 rounded-lg text-sm text-white font-bold opacity-90 hover:opacity-100 transition ease-in-out delay-100"
            }
            // onClick={() => setModal(!modal)}
            onClick={()=>{
              if (currentPage === 'place'){
                return
              } else {
                setModal(!modal);
              }
            }}
          >
            {connectedWallet && <img src={connectedWallet?.image} alt='wallet-logo' width={'25px'}/>}
            {!connectedWallet ? "Connect Wallet" : `${connectedWallet.name}`}
          </button>
          <motion.button
            className="text-lg"
            onClick={() => setMoreLinks(!moreLinks)}
            animate={{ rotate: moreLinks ? 90 : 0 }}
            whileHover={{ scale: 1.2 }}
          >
            <i>
              {" "}
              <GiHamburgerMenu color="#B840AE" />{" "}
            </i>
          </motion.button>
        </div>

        <ul className="hidden sm:flex flex-row gap-2 md:gap-6">
          <li>
            <Link
              to={"/"}
              className="hover:text-custompurple transition ease-in-out delay-100 lg:text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/place"}
              className="hover:text-custompurple transition ease-in-out delay-100 lg:text-lg"
            >
              Place to Stay
            </Link>
          </li>
          <li>
            <Link
              onClick={scroll}
              className="hover:text-custompurple transition ease-in-out delay-100 lg:text-lg"
            >
              NFTs
            </Link>
          </li>
          <li>
            <Link
              id="#community"
              className="hover:text-custompurple transition ease-in-out delay-100 lg:text-lg"
            >
              Community
            </Link>
          </li>
        </ul>
        <button
          className={
            !connectedWallet
              ? "hidden sm:flex bg-custompurple px-3 py-2 rounded-md text-sm text-white opacity-90 hover:opacity-100 transition ease-in-out delay-100 tracking-wide"
              : "hidden sm:flex sm:flex-row sm:gap-2 sm:items-center bg-green-500 px-3 py-2 rounded-md text-sm text-white font-bold opacity-90 hover:opacity-100 transition ease-in-out delay-100 tracking-wide"
          }
          // onClick={() => setModal(!modal)}
          onClick={()=>{
            if (currentPage === 'place'){
              return
            } else {
              setModal(!modal);
            }
          }}
        >
            {connectedWallet && <img src={connectedWallet?.image} alt='wallet-logo' width={'25px'}/>}
          {!connectedWallet ? "Connect Wallet" : `${connectedWallet.name}`}
        </button>
      </nav>

      {moreLinks && <ExtendedNav scroll={scroll} />}
    </header>
  );
};

export default Navbar;
