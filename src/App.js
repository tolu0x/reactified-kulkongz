import "./App.scss";
import Navbar from "./components/Navbar";
import kongz from "./static/kongz";
import { useEffect, useState, useRef } from "react";

function App() {
  const hasWindow = typeof window !== "undefined";

  const [showMap, setShowMap] = useState(false);
  const ref = useRef(null);

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMap(false);

        document.body.style.overflow = "unset";
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section className="section-1" id="home">
        <h1 className="hero-text">KULKONGZ</h1>
        {/* <img
          src="/images/KULKONGZ_text.png"
          alt="KULKONGZ"
          className="hero-text"
        /> */}
        <p className="hero-text-2">Society</p>
        <p className="mint-text">Minting Soon</p>
        <img
          alt=""
          src="/images/hero_monkey_left.png"
          className="monkey_left"
        />
        <img
          alt=""
          src="/images/hero_monkey_right.png"
          className="monkey_right"
        />
        <img
          alt=""
          src="/images/hero_monkey_mobile.png"
          className="monkey_mobile"
        />
      </section>
      <section className="section-2" id="story">
        <div className="story-board">
          <img
            alt=""
            src="/images/story_monkey_ellipse.png"
            className="monkey_ellipse"
          />
          <p className="heading">THE STORY</p>
          <p className="content">
            The kul kongz were once boring kongz: some nerds, some
            mathematicians, some artist, and some philosophers. Although they
            came from all works of life, they had one thing in common, they were
            all boring: While out on a Sunday morning watching others have fun
            in the park, the Ku god of all the kulness in the metaverse
            appeared. What do you want the most in the world he asked and they
            all answered “we want to be the kulest kongz in the world”. There
            you have it as he disappeared like a genie jumping out of a bottle
            into the sunny sky making everything glitter and shine like the
            colors of a rainbow.
          </p>
        </div>
        <img
          alt=""
          src={
            windowDimensions.width > 700
              ? "/images/story_monkeys.png"
              : "/images/story_monkeys_mobile.png"
          }
          className="story_monkeys"
        />
      </section>

      <section className="section-3">
        <p className="heading">What are Kulkongz?</p>
        <div className="board">
          <p className="content">
            Kulkongz Society is a community-based NFT project on Avalanche.
            Kulkongz is a collection of algorithmically generated kong
            characters minted as NFTs on AVAX C-chain. A total of 2222 kongz
            will be generated from various clothing outfits, faces, headpieces,
            gadgets, and colors. The Kongz have different body types, some rarer
            than others.
          </p>
        </div>
        <p className="heading meet">Meet the kulest kongz</p>
        {/* <div className="marquee">
          <div className="track">
            <div className="cont">
              <p>Meet the kuLlest kongz</p>
              <img alt="" src="/images/shades.png" />
              <p>Meet the kuLlest kongz</p>
              <img alt="" src="/images/shades.png" />
              <p>Meet the kuLlest kongz</p>
              <img alt="" src="/images/shades.png" />
              <p>Meet the kuLlest kongz</p>
              <img alt="" src="/images/shades.png" />
              <p>Meet the kuLlest kongz</p>
              <img alt="" src="/images/shades.png" />
            </div>
          </div>
        </div> */}

        <p className="content desc">
          While all kongz are created equally, some kongz are way kulller than
          others. Each of them has their own hardcore yet extraordinary
          personality. are you ready to meet the kullest kongz?
        </p>
        <div className="kong_collection">
          {kongz.map((kong) => (
            <div key={`kong-${kong.id}`} className="kong_card">
              <img alt="" src={kong.image} />
              <p className="description">{kong.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-4" id="roadmap">
        <div className="board">
          <p className="heading">ROADMAP</p>
          <div
            className="redacted"
            onClick={() => {
              setShowMap(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <p className="heading">[CLICK ME]</p>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <h1 className="hero-text heading">KULKONGZ</h1>
        <p className="hero-text-2">Society</p>
        {/* <div className="footer-kongz">
          <img
            alt=""
            src="/images/footer_monkey_left.png"
            className="monkey_left"
          />
          <img
            alt=""
            src="/images/footer_monkey_right.png"
            className="monkey_right"
          />
        </div> */}
        <p className="connect">
          Connect With us on{" "}
          <a
            href="https://twitter.com/kongzsociety"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: "bold", color: "white" }}
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="/"
            // href="https://twitter.com/kulkongz"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: "bold", color: "white" }}
          >
            Discord
          </a>
        </p>
      </section>
      {showMap && (
        <section className="popup">
          <div className="roadmap" ref={ref}>
            <img src="images/roadmap_image.jpg" alt="roadmap" />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
