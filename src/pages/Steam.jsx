import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredGames = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    alt: "Baldur's Gate 3",
    title: "Baldur's Gate 3",
    price: "$59.99",
    link: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    alt: "Counter-Strike 2",
    title: "Counter-Strike 2",
    price: "Free to Play",
    link: "https://store.steampowered.com/app/730/CounterStrike_2/",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    alt: "Elden Ring",
    title: "Elden Ring",
    price: "$59.99",
    original: "$69.99",
    link: "https://store.steampowered.com/app/1245620/Elden_Ring/",
  },
];

const popularGames = [
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/header.jpg", title: "Hades II", price: "$29.99", discount: "-10%", link: "https://store.steampowered.com/app/1145350/Hades_II/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg", title: "Palworld", price: "$29.99", link: "https://store.steampowered.com/app/1623730/Palworld/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg", title: "Helldivers 2", price: "$39.99", link: "https://store.steampowered.com/app/553850/HELLDIVERS_2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg", title: "Lethal Company", price: "$9.99", link: "https://store.steampowered.com/app/1966720/Lethal_Company/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg", title: "Sons of the Forest", price: "$29.99", link: "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg", title: "Valheim", price: "$19.99", discount: "-25%", link: "https://store.steampowered.com/app/892970/Valheim/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg", title: "Rust", price: "$39.99", link: "https://store.steampowered.com/app/252490/Rust/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg", title: "Terraria", price: "$9.99", discount: "-50%", link: "https://store.steampowered.com/app/105600/Terraria/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", title: "GTA V", price: "$29.99", link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", title: "Red Dead Redemption 2", price: "$39.99", discount: "-33%", link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", title: "Cyberpunk 2077", price: "$59.99", link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", title: "The Witcher 3", price: "$14.99", discount: "-75%", link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg", title: "Stardew Valley", price: "$14.99", link: "https://store.steampowered.com/app/413150/Stardew_Valley/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg", title: "Dota 2", price: "Free to Play", link: "https://store.steampowered.com/app/570/Dota_2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", title: "Apex Legends", price: "Free to Play", link: "https://store.steampowered.com/app/1172470/Apex_Legends/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg", title: "PUBG: BATTLEGROUNDS", price: "Free to Play", link: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg", title: "Dark Souls III", price: "$39.99", discount: "-50%", link: "https://store.steampowered.com/app/374320/DARK_SOULS_III/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg", title: "Sekiro: Shadows Die Twice", price: "$59.99", link: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg", title: "Monster Hunter: World", price: "$29.99", discount: "-25%", link: "https://store.steampowered.com/app/582010/Monster_Hunter_World/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg", title: "Subnautica", price: "$29.99", link: "https://store.steampowered.com/app/264710/Subnautica/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg", title: "Deep Rock Galactic", price: "$17.99", discount: "-40%", link: "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg", title: "V Rising", price: "$34.99", link: "https://store.steampowered.com/app/1604030/V_Rising/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/header.jpg", title: "Core Keeper", price: "$12.99", link: "https://store.steampowered.com/app/1621690/Core_Keeper/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg", title: "Satisfactory", price: "$35.00", link: "https://store.steampowered.com/app/526870/Satisfactory/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/440900/header.jpg", title: "Conan Exiles", price: "$39.99", link: "https://store.steampowered.com/app/440900/Conan_Exiles/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg", title: "7 Days to Die", price: "$24.99", link: "https://store.steampowered.com/app/251570/7_Days_to_Die/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg", title: "Project Zomboid", price: "$19.99", link: "https://store.steampowered.com/app/108600/Project_Zomboid/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg", title: "RimWorld", price: "$34.99", link: "https://store.steampowered.com/app/294100/RimWorld/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg", title: "Crusader Kings III", price: "$33.49", discount: "-33%", link: "https://store.steampowered.com/app/1158310/Crusader_Kings_III/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg", title: "Civilization VI", price: "$8.99", discount: "-85%", link: "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg", title: "War Thunder", price: "Free to Play", link: "https://store.steampowered.com/app/236390/War_Thunder/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg", title: "Warframe", price: "Free to Play", link: "https://store.steampowered.com/app/230410/Warframe/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg", title: "Destiny 2", price: "Free to Play", link: "https://store.steampowered.com/app/1085660/Destiny_2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg", title: "Team Fortress 2", price: "Free to Play", link: "https://store.steampowered.com/app/440/Team_Fortress_2/" },
  { img: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg", title: "Left 4 Dead 2", price: "$1.99", discount: "-80%", link: "https://store.steampowered.com/app/550/Left_4_Dead_2/" },
];

export default function Steam() {
  useEffect(() => {
    document.body.className = "steam-page";
    return () => { document.body.className = ""; };
  }, []);

  return (
    <>
      <Navbar variant="steam" />

      <section className="hero steam-hero">
        <h1>Steam Store</h1>
        <p>Discover thousands of PC games, from AAA blockbusters to indie gems. Special deals updated daily.</p>
      </section>

      {/* Best Sellers */}
      <section className="section">
        <div className="section-header steam-border">
          <h2 className="section-title steam-title">Best Sellers</h2>
        </div>
        <div className="featured-games">
          {featuredGames.map((game, i) => (
            <div className="featured-card steam-card" key={i}>
              <span className="featured-badge">TOP SELLER</span>
              <img src={game.img} alt={game.alt} />
              <div className="featured-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price steam-fp">
                  {game.price}
                  {game.original && <span className="original-price-lg">{game.original}</span>}
                </div>
                <a className="buy-btn" href={game.link} target="_blank" rel="noopener noreferrer">
                  View on Steam
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Games */}
      <section className="section">
        <div className="section-header steam-border">
          <h2 className="section-title steam-title">Popular Steam Games</h2>
        </div>
        <div className="games-grid">
          {popularGames.map((game, i) => (
            <div className="platform-game-card steam-game-card" key={i}>
              <img src={game.img} alt={game.title} />
              <div className="game-card-info">
                <div className="game-card-title">{game.title}</div>
                <div className="game-card-price steam-price">
                  {game.discount && <span className="discount-tag">{game.discount}</span>}
                  {game.price}
                </div>
                <a className="buy-btn" href={game.link} target="_blank" rel="noopener noreferrer">
                  View on Steam
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="steam" />
    </>
  );
}
