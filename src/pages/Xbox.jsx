import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredGames = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg",
    alt: "Halo Infinite",
    title: "Halo Infinite",
    price: "$59.99",
    link: "https://www.xbox.com/en-us/games/store/halo-infinite/9NP1P1WFS0LB",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
    alt: "Forza Horizon 5",
    title: "Forza Horizon 5",
    price: "$59.99",
    link: "https://www.xbox.com/en-us/games/store/forza-horizon-5/9NKX70L8NG0S",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
    alt: "Starfield",
    title: "Starfield",
    price: "$69.99",
    link: "https://www.xbox.com/en-us/games/store/starfield/9NCCH3J0X1SP",
  },
];

const xboxGames = [
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1828090/header.jpg", title: "Minecraft", price: "$29.99", link: "https://www.xbox.com/en-us/games/store/minecraft/9MVXMVT8ZKWC" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg", title: "Gears 5", price: "$29.99", link: "https://www.xbox.com/en-us/games/store/gears-5/9P3J32FCX7MB" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg", title: "Microsoft Flight Simulator", price: "$59.99", link: "https://www.xbox.com/en-us/games/store/microsoft-flight-simulator/9NM4T0T0C4XJ" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg", title: "Sea of Thieves", price: "$39.99", link: "https://www.xbox.com/en-us/games/store/sea-of-thieves/9P2N57MC619K" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",  title: "Grounded", price: "$29.99", link: "https://www.xbox.com/en-us/games/store/grounded/9P8PGV0ML4T8" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg", title: "Psychonauts 2", price: "$59.99", link: "https://www.xbox.com/en-us/games/store/psychonauts-2/9P3J5W8W8Z0M" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1333550/header.jpg", title: "Hi-Fi Rush", price: "$29.99", link: "https://www.xbox.com/en-us/games/store/hi-fi-rush/9N1P4X5C8J3K" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/header.jpg", title: "Pentiment", price: "$19.99", link: "https://www.xbox.com/en-us/games/store/pentiment/9N7D3Q6F2L1K" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1841280/header.jpg", title: "Hellblade II: Senua's Saga", price: "$49.99", link: "https://www.xbox.com/en-us/games/store/hellblade-ii/9P5P4X6C8J2K" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg", title: "Avowed", price: "$69.99", link: "https://www.xbox.com/en-us/games/store/avowed/9P3Q5R7T9V2X" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1585690/header.jpg", title: "Indiana Jones and the Great Circle", price: "$69.99", link: "https://www.xbox.com/en-us/games/store/indiana-jones/9N8P6M4K2J1H" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg", title: "Halo: The Master Chief Collection", price: "$39.99", link: "https://www.xbox.com/en-us/games/store/halo-the-master-chief-collection/9MT8PTGVHX2P" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg", title: "Ori and the Will of the Wisps", price: "$29.99", link: "https://www.xbox.com/en-us/games/store/ori-and-the-will-of-the-wisps/9P3J32FC9B1M" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/387290/header.jpg",  title: "Ori and the Blind Forest", price: "$19.99", link: "https://www.xbox.com/en-us/games/store/ori-and-the-blind-forest/9P5P4X6C8J2K" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg", title: "State of Decay 3", price: "$59.99", link: "https://www.xbox.com/en-us/games/store/state-of-decay-3/9Q7S9U1W3Y5A" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg", title: "Fable", price: "$69.99", link: "https://www.xbox.com/en-us/games/store/fable/9P5R7T9V2X1Z" },
];

export default function Xbox() {
  useEffect(() => {
    document.body.className = "xbox-page";
    return () => { document.body.className = ""; };
  }, []);

  return (
    <>
      <Navbar variant="xbox" />

      <section className="hero xbox-hero">
        <h1>Xbox Store</h1>
        <p>Discover the latest Xbox games, from exclusive blockbusters to indie favorites.</p>
      </section>

      {/* Best Sellers */}
      <section className="section xbox-section">
        <div className="section-header xbox-border">
          <h2 className="section-title xbox-title">Best Sellers</h2>
        </div>
        <div className="featured-games">
          {featuredGames.map((game, i) => (
            <div className="featured-card xbox-card" key={i}>
              <span className="featured-badge xbox-badge">TOP SELLER</span>
              <img src={game.img} alt={game.alt} />
              <div className="featured-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price xbox-fp">{game.price}</div>
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="buy-btn xbox-buy">
                  🎮 Go to Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Xbox Games */}
      <section className="section xbox-section">
        <div className="section-header xbox-border">
          <h2 className="section-title xbox-title">Xbox Games</h2>
        </div>
        <div className="games-grid">
          {xboxGames.map((game, i) => (
            <div className="platform-game-card xbox-game-card" key={i}>
              <img src={game.img} alt={game.title} />
              <div className="game-card-info">
                <div className="game-card-title">{game.title}</div>
                <div className="game-card-price xbox-price">{game.price}</div>
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="buy-btn xbox-buy">
                  🎮 Go to Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="xbox" />
    </>
  );
}
