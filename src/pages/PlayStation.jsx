import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredGames = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
    alt: "ASTRO BOT",
    title: "ASTRO BOT",
    price: "$59.99",
    link: "https://www.playstation.com/en-us/games/astro-bot/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    alt: "Ghost of Yōtei",
    title: "Ghost of Yōtei",
    price: "$69.99",
    link: "https://www.playstation.com/en-us/games/ghost-of-yotei/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    alt: "Death Stranding 2",
    title: "Death Stranding 2: On the Beach",
    price: "$69.99",
    link: "https://www.playstation.com/en-us/games/death-stranding-2-on-the-beach/",
  },
];

const psGames = [
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",  title: "Helldivers 2", price: "$39.99", link: "https://www.playstation.com/en-us/games/helldivers-2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", title: "Horizon Forbidden West", price: "$59.99", link: "https://www.playstation.com/en-us/games/horizon-forbidden-west/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", title: "The Last of Us Part I", price: "$49.99", link: "https://www.playstation.com/en-us/games/the-last-of-us-part-i/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg", title: "Ratchet & Clank: Rift Apart", price: "$59.99", link: "https://www.playstation.com/en-us/games/ratchet-and-clank-rift-apart/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg", title: "God of War Ragnarök", price: "$59.99", link: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg", title: "Marvel's Spider-Man 2", price: "$69.99", link: "https://www.playstation.com/en-us/games/marvels-spider-man-2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1841280/header.jpg", title: "Stellar Blade", price: "$69.99", link: "https://www.playstation.com/en-us/games/stellar-blade/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg", title: "Gran Turismo 7", price: "$29.99", link: "https://www.playstation.com/en-us/games/gran-turismo-7/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg", title: "Demon's Souls", price: "$39.99", link: "https://www.playstation.com/en-us/games/demons-souls/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg", title: "Returnal", price: "$49.99", link: "https://www.playstation.com/en-us/games/returnal/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg", title: "Ghost of Tsushima", price: "$49.99", link: "https://www.playstation.com/en-us/games/ghost-of-tsushima-directors-cut/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg", title: "Bloodborne", price: "$19.99", link: "https://store.playstation.com/en-us/product/UP9000-CUSA00207_00-BLOODBORNE0000EU" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",  title: "Marvel's Spider-Man: Miles Morales", price: "$49.99", link: "https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1333550/header.jpg", title: "Sackboy: A Big Adventure", price: "$39.99", link: "https://www.playstation.com/en-us/games/sackboy-a-big-adventure/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg", title: "Nioh 2", price: "$29.99", link: "https://www.playstation.com/en-us/games/nioh-2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/387290/header.jpg",  title: "The Last of Us Part II Remastered", price: "$49.99", link: "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/" },
];

export default function PlayStation() {
  useEffect(() => {
    document.body.className = "playstation-page";
    return () => { document.body.className = ""; };
  }, []);

  return (
    <>
      <Navbar variant="playstation" />

      <section className="hero playstation-hero">
        <h1>PlayStation eShop</h1>
        <p>Dive into the world of PlayStation with blockbuster titles and unforgettable gaming experiences.</p>
      </section>

      {/* Best Sellers */}
      <section className="section playstation-section">
        <div className="section-header ps-border">
          <h2 className="section-title playstation-title">Best Sellers</h2>
        </div>
        <div className="featured-games">
          {featuredGames.map((game, i) => (
            <div className="featured-card ps-card" key={i}>
              <span className="featured-badge ps-badge">TOP SELLER</span>
              <img src={game.img} alt={game.alt} />
              <div className="featured-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price ps-fp">{game.price}</div>
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="buy-btn ps-buy">
                  🎮 Go to Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PlayStation Games */}
      <section className="section playstation-section">
        <div className="section-header ps-border">
          <h2 className="section-title playstation-title">PlayStation Games</h2>
        </div>
        <div className="games-grid">
          {psGames.map((game, i) => (
            <div className="platform-game-card ps-game-card" key={i}>
              <img src={game.img} alt={game.title} />
              <div className="game-card-info">
                <div className="game-card-title">{game.title}</div>
                <div className="game-card-price">{game.price}</div>
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="buy-btn ps-buy">
                  🎮 Go to Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="playstation" />
    </>
  );
}
