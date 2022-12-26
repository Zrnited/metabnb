import React from "react";
import Navbar from "../components/Navbar";
import grouppic from "../assets/grouppic.png";
import mbtoken from "../assets/mbtoken.png";
import metamask from "../assets/metamask.png";
import opensea from "../assets/opensea.png";
import { AiFillStar } from "react-icons/ai";
import { homeNFTpictures } from "../components/nfthomepagedata";
import frame from "../assets/frame.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // console.log(homeNFTpictures);
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();
  const [moreLinks, setMoreLinks] = React.useState(false);
  const [learnConnect, setLearnConnect] = React.useState(false);
  // console.log(learnConnect);
  const component = "Home";
  const [connectedWallet, setConnectedWallet] = React.useState(null);

  window.addEventListener("load", () => {
    window.scrollY(0, 0);
  });

  const getWallet = (e) => {
    // alert('Selected');
    // console.log(e);
    if (!learnConnect) {
      if (connectedWallet) {
        setConnectedWallet(e);
        setModal(false);
        return;
      } else {
        setLearnConnect(true);
      }
    }
    setConnectedWallet(e);
    setModal(false);
  };

  const learnMore = () => {
    if (!connectedWallet) {
      // alert("Connect your wallet before proceeding");
      setModal(true);
    } else {
      if (learnConnect === false) {
        console.log('read');
        navigate('/place');
        return;
      } else {
        navigate("/place");
      }
      // return
    }
  };

  //hiding scrollbar
  if(moreLinks){
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

  React.useLayoutEffect(() => {
    const getWallet = JSON.parse(window.sessionStorage.getItem("wallet"));
    if (getWallet) {
      setConnectedWallet(getWallet);
    } else {
      setConnectedWallet(null);
    }
  }, []);

  React.useEffect(() => {
    if (connectedWallet) {
      window.sessionStorage.setItem("wallet", JSON.stringify(connectedWallet));
    }
  }, [connectedWallet]);

  React.useEffect(() => {
    // console.log('ran learnMore');
    if (learnConnect) {
      if (!connectedWallet) {
        learnMore();
        console.log("ran this");
      } else {
        return;
      }
    } else {
      return;
    }
    // learnMore();
  }, [learnConnect]);

  return (
    <div>
      <Navbar
        setModal={setModal}
        modal={modal}
        moreLinks={moreLinks}
        setMoreLinks={setMoreLinks}
        component={component}
        connectedWallet={connectedWallet}
      />

      {modal && (
        <Modal setModal={setModal} modal={modal} getWallet={getWallet} />
      )}

      <section className="section flex flex-row">
        <div className="px-4 flex flex-col gap-3 md:w-1/2 md:px-0 md:max-w-646">
          <h1 className="text-white font-bold text-3xl tracking-wider px-3 md:text-black md:mb-2 md:px-0 md:text-4xl lg:mb-5 lg:text-5xl lg:leading-tight">
            Rent a <span className="text-custompurple">Place</span> away from{" "}
            <span className="text-custompurple">Home</span> in the{" "}
            <span className="text-custompurple">Metaverse</span>
          </h1>
          <p className="text-white text-sm px-3 leading-normal mb-6 md:text-black md:px-0 md:text-lg lg:text-xl">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>
          <form className="flex flex-row pl-3 md:pl-0">
            <input
              type={"text"}
              className="w-2/3 h-10 px-5 focus:outline-none md:border md:border-gray-300 md:rounded-sm"
              placeholder="Search for location..."
            />
            <button className="w-1/3 bg-custompurple text-white text-sm h-10 opacity-80 hover:opacity-100 transition ease-in-out delay-100" onClick={(e)=> e.preventDefault()}>
              Submit
            </button>
          </form>
          <div className="bg-white w-4/3 ml-3 h-1 rounded-sm md:hidden"></div>
        </div>
        <div className="hidden max-w-476 md:flex w-1/2 justify-center">
          <img src={grouppic} alt="welcome-pic" />
        </div>
      </section>

      <section className="bg-custompurple flex flex-row justify-between py-2 px-4 md:mt-10 lg:justify-around">
        {/* <p>Just to test</p> */}
        <img src={mbtoken} alt="mb-token-logo" className="w-1/4 sm:w-36" />
        <img src={metamask} alt="mb-token-logo" className="w-1/4 sm:w-36" />
        <img src={opensea} alt="mb-token-logo" className="w-1/4 sm:w-36" />
      </section>

      <section className="p-5 flex flex-col justify-center items-center gap-3 lg:p-10">
        <div>
          <p className="text-xl text-center font-extrabold tracking-wide mb-4 sm:mb-8 sm:text-2xl lg:text-3xl">
            Inspiration for your next adventure
          </p>
        </div>
        <div className="flex flex-col gap-3 w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          {homeNFTpictures?.map((item) => {
            return (
              <motion.div
                className="w-292 border border-gray-300 rounded-xl p-3 gap-3 cursor-pointer hover:shadow-lg lg:w-64"
                whileHover={{ scale: 1.1 }}
              >
                <div>
                  <img src={item.image} alt="nft-pic" className="lg:w-full" />
                </div>
                <div className="flex flex-row gap-2 justify-between mt-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold">Desert King</p>
                    <p className="text-xs">2345km away</p>
                    <div className="flex flex-row gap-2">
                      <AiFillStar color="#A02279" size={"10px"} />
                      <AiFillStar color="#A02279" size={"10px"} />
                      <AiFillStar color="#A02279" size={"10px"} />
                      <AiFillStar color="#A02279" size={"10px"} />
                      <AiFillStar color="#A02279" size={"10px"} />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="text-xs font-bold">IMBT per night</p>
                    <p className="text-xs">2weeks stay</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-custompurple flex flex-col-reverse gap-9 p-10 items-center sm:flex-row sm:gap-1 sm:justify-evenly">
        <div className="text-white flex flex-col gap-7 sm:w-2/3 md:w-400">
          <h1 className="text-3xl"> Metabnb NFTs </h1>
          <p className="text-sm md:leading-loose text-justify">
            {" "}
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.{" "}
            <br/><a href="https://metabnb.com/learn" className="text-red-100 hover:underline">Learn more</a>
          </p>
          <button
            className="bg-white py-2 rounded-sm text-sm text-custompurple font-semibold tracking-wide sm:text-base text-center opacity-90 w-40 hover:opacity-100 transition ease-in-out delay-100"
            onClick={learnMore}
          >
            {/* <Link to={"/place"}>Learn</Link> */}
            {connectedWallet ? 'Get started' : 'Connect Wallet'}
          </button>
        </div>
        <div className="sm:w-2/3 md:w-480">
          <img src={frame} alt="frame-pic" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
