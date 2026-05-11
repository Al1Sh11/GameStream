import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredGames = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
    alt: "The Legend of Zelda: Tears of the Kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    price: "$69.99",
    link: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
    alt: "Super Mario Bros. Wonder",
    title: "Super Mario Bros. Wonder",
    price: "$59.99",
    link: "https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
    alt: "Metroid Prime 4: Beyond",
    title: "Metroid Prime 4: Beyond",
    price: "$59.99",
    link: "https://www.nintendo.com/us/store/products/metroid-prime-4-beyond-switch/",
  },
];

const nintendoGames = [
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",  title: "Mario Kart 8 Deluxe", price: "$59.99", link: "https://www.nintendo.com/us/store/products/mario-kart-8-deluxe-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",  title: "Animal Crossing: New Horizons", price: "$59.99", link: "https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", title: "Pokémon Scarlet and Violet", price: "$59.99", link: "https://www.nintendo.com/us/store/products/pokemon-scarlet-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/header.jpg", title: "Super Smash Bros. Ultimate", price: "$59.99", link: "https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg", title: "Splatoon 3", price: "$59.99", link: "https://www.nintendo.com/us/store/products/splatoon-3-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",  title: "Kirby and the Forgotten Land", price: "$59.99", link: "https://www.nintendo.com/us/store/products/kirby-and-the-forgotten-land-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", title: "Xenoblade Chronicles 3", price: "$59.99", link: "https://www.nintendo.com/us/store/products/xenoblade-chronicles-3-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg", title: "Fire Emblem Engage", price: "$59.99", link: "https://www.nintendo.com/us/store/products/fire-emblem-engage-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", title: "Bayonetta 3", price: "$59.99", link: "https://www.nintendo.com/us/store/products/bayonetta-3-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg", title: "Pokémon Legends: Arceus", price: "$59.99", link: "https://www.nintendo.com/us/store/products/pokemon-legends-arceus-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1841280/header.jpg", title: "Pikmin 4", price: "$59.99", link: "https://www.nintendo.com/us/store/products/pikmin-4-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg", title: "Nintendo Switch Sports", price: "$49.99", link: "https://www.nintendo.com/us/store/products/nintendo-switch-sports-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg", title: "Hollow Knight: Silksong", price: "$29.99", link: "https://www.nintendo.com/us/store/products/hollow-knight-silksong-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg", title: "Hades", price: "$24.99", link: "https://www.nintendo.com/us/store/products/hades-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg", title: "Cuphead", price: "$19.99", link: "https://www.nintendo.com/us/store/products/cuphead-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",  title: "Shovel Knight: Treasure Trove", price: "$39.99", link: "https://www.nintendo.com/us/store/products/shovel-knight-treasure-trove-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1333550/header.jpg", title: "Stardew Valley", price: "$14.99", link: "https://www.nintendo.com/us/store/products/stardew-valley-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg", title: "Celeste", price: "$19.99", link: "https://www.nintendo.com/us/store/products/celeste-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/387290/header.jpg",  title: "Undertale", price: "$14.99", link: "https://www.nintendo.com/us/store/products/undertale-switch/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg", title: "Minecraft", price: "$29.99", link: "https://www.nintendo.com/us/store/products/minecraft-switch-edition-switch/" },
];

export default function Nintendo() {
  useEffect(() => {
    document.body.className = "nintendo-page";
    return () => { document.body.className = ""; };
  }, []);

  return (
    <>
      <Navbar variant="nintendo" />

      <section className="hero nintendo-hero">
        <h1>Nintendo eShop</h1>
        <p>
          Explore Nintendo Switch exclusives, beloved franchises, and indie
          favorites — all in one place.
        </p>
      </section>

      {/* Best Sellers */}
      <section className="section">
        <div className="section-header nintendo-border">
          <h2 className="section-title nintendo-title">Best Sellers</h2>
        </div>
        <div className="featured-games">
          {featuredGames.map((game, i) => (
            <div className="featured-card nintendo-card" key={i}>
              <span className="featured-badge nintendo-badge">TOP SELLER</span>
              <img src={game.img} alt={game.alt} />
              <div className="featured-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price nintendo-fp">{game.price}</div>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-btn nintendo-buy"
                >
                  🎮 Go to eShop
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nintendo Games Grid */}
      <section className="section">
        <div className="section-header nintendo-border">
          <h2 className="section-title nintendo-title">Nintendo Switch Games</h2>
        </div>
        <div className="games-grid">
          {nintendoGames.map((game, i) => (
            <div className="platform-game-card nintendo-game-card" key={i}>
              <img src={game.img} alt={game.title} />
              <div className="game-card-info">
                <div className="game-card-title">{game.title}</div>
                <div className="game-card-price">
                  <span className="nswitch-badge">Switch</span>
                  {game.price}
                </div>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-btn nintendo-buy"
                >
                  🎮 Go to eShop
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="nintendo" />
    </>
  );
}
