import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bestSellers = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    alt: "Baldur's Gate 3",
    platform: "steam",
    label: "Steam",
    title: "Baldur's Gate 3",
    price: "$59.99",
    discount: "-10%",
    link: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    alt: "Elden Ring",
    platform: "steam",
    label: "Steam",
    title: "Elden Ring",
    price: "$59.99",
    original: "$79.99",
    discount: "-25%",
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
    alt: "Helldivers 2",
    platform: "playstation",
    label: "PlayStation",
    title: "Marvel's Spider-Man 2",
    price: "$69.99",
    link: "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg",
    alt: "Starfield",
    platform: "xbox",
    label: "Xbox",
    title: "Starfield",
    price: "$69.99",
    original: "$79.99",
    link: "https://www.xbox.com/en-US/games/starfield",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
    alt: "Palworld",
    platform: "steam",
    label: "Steam",
    title: "Palworld",
    price: "$29.99",
    link: "https://store.steampowered.com/app/1623730/Palworld/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    alt: "God of War Ragnarok",
    platform: "playstation",
    label: "PlayStation",
    title: "God of War Ragnarök",
    price: "$69.99",
    original: "$79.99",
    link: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    alt: "Forza Horizon 5",
    platform: "xbox",
    label: "Xbox",
    title: "Forza Horizon 5",
    price: "$59.99",
    discount: "-40%",
    link: "https://www.xbox.com/en-US/games/forza-horizon-5",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
    alt: "Super Mario Bros Wonder",
    platform: "nintendo",
    label: "Nintendo",
    title: "Super Mario Bros. Wonder",
    price: "$59.99",
    link: "https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/",
  },
];

const featuredEquipment = [
  {
    img: "https://www.glitched.online/wp-content/uploads/2022/08/06d8a7c076df3b090cf777525e61e9a65174f410-scaled-1.webp",
    alt: "DualSense Edge",
    category: "PlayStation",
    name: "DualSense Edge Controller",
    price: "$199.99",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.XlAIc4d3f6FXu2jYyp4wJwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Elite Controller",
    category: "Xbox",
    name: "Xbox Elite Controller Series 2",
    price: "$179.99",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.YLihWa9RU0JI3YpvuGQ1nAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Pro Controller",
    category: "Nintendo",
    name: "Switch Pro Controller",
    price: "$69.99",
  },
  {
    img: "https://www.pcworld.com/wp-content/uploads/2023/11/Steam-Deck-OLED-screen.jpg?quality=50&strip=all",
    alt: "Steam Deck",
    category: "Steam",
    name: "Steam Deck OLED 1TB",
    price: "$649.99",
  },
];

export default function Home() {
  useEffect(() => {
    document.body.className = "";
  }, []);

  return (
    <>
      <Navbar variant="home" />

      {/* Hero */}
      <section className="hero">
        <h1>All Your Games, One Store</h1>
        <p>Browse the best deals and best-selling games from Steam, Xbox, PlayStation, and Nintendo Switch.</p>

        <div className="deals-banner">
          <div className="deal-card">
            <div className="deal-label">Flash Deals</div>
            <div className="deal-text">Up to 75% off on Steam titles</div>
          </div>
          <div className="deal-card">
            <div className="deal-label">Xbox Sale</div>
            <div className="deal-text">Game Pass Ultimate - 3 months for $1</div>
          </div>
          <div className="deal-card">
            <div className="deal-label">PlayStation Deals</div>
            <div className="deal-text">Save 30% on select exclusives</div>
          </div>
          <div className="deal-card">
            <div className="deal-label">Nintendo Sale</div>
            <div className="deal-text">Indie game discounts up to 50%</div>
          </div>
        </div>

        <div className="platform-selector">
          <Link to="/steam" className="platform-btn steam">
            <span className="platform-icon platform-icon-steam">S</span>
            Browse Steam
          </Link>
          <Link to="/xbox" className="platform-btn xbox">
            <span className="platform-icon platform-icon-xbox">X</span>
            Browse Xbox
          </Link>
          <Link to="/playstation" className="platform-btn playstation">
            <span className="platform-icon platform-icon-playstation">P</span>
            Browse PlayStation
          </Link>
          <Link to="/nintendo" className="platform-btn nintendo">
            <span className="platform-icon platform-icon-nintendo">N</span>
            Browse Nintendo
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="icon">🔥</span>
            Best Sellers
          </div>
          <Link to="/steam" className="see-all-btn">View All Best Sellers →</Link>
        </div>
        <div className="best-sellers-grid">
          {bestSellers.map((game, i) => (
            <div className="game-card" key={i}>
              <img src={game.img} alt={game.alt} />
              <div className="game-info">
                <span className={`game-platform platform-${game.platform}`}>{game.label}</span>
                <h3 className="game-title">{game.title}</h3>
                <div className="game-price-row">
                  <span className="game-price">{game.price}</span>
                  {game.original && <span className="original-price">{game.original}</span>}
                  {game.discount && <span className="discount-badge">{game.discount}</span>}
                </div>
                <a href={game.link} target="_blank" rel="noopener noreferrer" className="go-website-btn">
                  Go to Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="icon">🎮</span>
            Featured Equipment
          </div>
          <Link to="/equipment" className="see-all-btn">View All Equipment →</Link>
        </div>
        <div className="equipment-grid">
          {featuredEquipment.map((item, i) => (
            <div className="equipment-card" key={i}>
              <img src={item.img} alt={item.alt} />
              <div className="equipment-info">
                <div className="equipment-category">{item.category}</div>
                <h3 className="equipment-name">{item.name}</h3>
                <div className="equipment-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="home" />
    </>
  );
}
