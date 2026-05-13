import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const controllers = [
  {
    img: "https://www.glitched.online/wp-content/uploads/2022/08/06d8a7c076df3b090cf777525e61e9a65174f410-scaled-1.webp",
    alt: "DualSense Edge",
    category: "PlayStation",
    name: "DualSense Edge Wireless Controller",
    price: "$199.99",
    link: "https://www.amazon.com/s?k=DualSense+Edge+Controller",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.XlAIc4d3f6FXu2jYyp4wJwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Xbox Elite Series 2",
    category: "Xbox",
    name: "Xbox Elite Wireless Controller Series 2",
    price: "$179.99",
    link: "https://www.amazon.com/s?k=Xbox+Elite+Controller+Series+2",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.YLihWa9RU0JI3YpvuGQ1nAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Switch Pro Controller",
    category: "Nintendo",
    name: "Nintendo Switch Pro Controller",
    price: "$69.99",
    link: "https://www.amazon.com/s?k=Nintendo+Switch+Pro+Controller",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.xJ4X7z5SQPDB7fYbPbwF5gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "DualSense Wireless",
    category: "PlayStation",
    name: "DualSense Wireless Controller",
    price: "$69.99",
    link: "https://www.amazon.com/s?k=DualSense+Wireless+Controller",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.2Zv0ZyPfb8wvMkHE-7rL2QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Xbox Wireless Controller",
    category: "Xbox",
    name: "Xbox Wireless Controller – Carbon Black",
    price: "$59.99",
    link: "https://www.amazon.com/s?k=Xbox+Wireless+Controller+Carbon+Black",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.1Tl7XaGnfzLGhFGZ-UHK7AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "8BitDo Ultimate",
    category: "Multi-Platform",
    name: "8BitDo Ultimate Wireless Controller",
    price: "$49.99",
    link: "https://www.amazon.com/s?k=8BitDo+Ultimate+Wireless+Controller",
  },
];

const consoles = [
  {
    img: "https://www.pcworld.com/wp-content/uploads/2023/11/Steam-Deck-OLED-screen.jpg?quality=50&strip=all",
    alt: "Steam Deck OLED",
    category: "Steam / PC",
    name: "Steam Deck OLED 1TB",
    price: "$649.99",
    link: "https://www.amazon.com/s?k=Steam+Deck+OLED+1TB",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.Hc_R-z-nf9CtRrTDk6PJsQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Switch OLED",
    category: "Nintendo",
    name: "Nintendo Switch OLED Model",
    price: "$349.99",
    link: "https://www.amazon.com/s?k=Nintendo+Switch+OLED",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.kL5ufsmBH0wT4MpA4bGKqQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "PS5",
    category: "PlayStation",
    name: "PlayStation 5 Console",
    price: "$499.99",
    link: "https://www.amazon.com/s?k=PlayStation+5+Console",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.2U0gFbdHxFCjv5BjPLpqJAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Xbox Series X",
    category: "Xbox",
    name: "Xbox Series X Console",
    price: "$499.99",
    link: "https://www.amazon.com/s?k=Xbox+Series+X",
  },
];

const accessories = [
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.PlFWj9kGCCNqKFiMl3F-fgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Pulse 3D Headset",
    category: "PlayStation",
    name: "PULSE 3D Wireless Headset",
    price: "$99.99",
    link: "https://www.amazon.com/s?k=PlayStation+Pulse+3D+Wireless+Headset",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.bZ2kGmHmVnH_FLl8cGVc7QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Xbox Headset",
    category: "Xbox",
    name: "Xbox Wireless Headset",
    price: "$99.99",
    link: "https://www.amazon.com/s?k=Xbox+Wireless+Headset",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.R8T7wXQNqVmcBq3gNR9f-QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "SteelSeries Arctis Nova Pro",
    category: "Multi-Platform",
    name: "SteelSeries Arctis Nova Pro Wireless",
    price: "$349.99",
    link: "https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+Pro+Wireless",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.M_rFCZt8cH7lx7t0fv5yoAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Razer DeathAdder V3",
    category: "PC Gaming",
    name: "Razer DeathAdder V3 HyperSpeed",
    price: "$99.99",
    link: "https://www.amazon.com/s?k=Razer+DeathAdder+V3+HyperSpeed",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.uWIe7jyEU0uZVa3H4a_ZCwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Logitech G Pro X",
    category: "PC Gaming",
    name: "Logitech G Pro X Superlight 2",
    price: "$159.99",
    link: "https://www.amazon.com/s?k=Logitech+G+Pro+X+Superlight+2",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.eSuSnLMkM-O_hTF-8nMqpAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Corsair K100",
    category: "PC Gaming",
    name: "Corsair K100 RGB Mechanical Keyboard",
    price: "$229.99",
    link: "https://www.amazon.com/s?k=Corsair+K100+RGB+Mechanical+Keyboard",
  },
];

function EquipmentSection({ title, icon, items }) {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">
          <span className="icon">{icon}</span>
          {title}
        </div>
      </div>
      <div className="equipment-grid">
        {items.map((item, i) => (
          <div className="equipment-card" key={i}>
            <img src={item.img} alt={item.alt} />
            <div className="equipment-info">
              <div className="equipment-category">{item.category}</div>
              <h3 className="equipment-name">{item.name}</h3>
              <div className="equipment-price">{item.price}</div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
                style={{ marginTop: "12px" }}
              >
                 Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Equipment() {
  useEffect(() => {
    document.body.className = "";
  }, []);

  return (
    <>
      <Navbar variant="home" />

      <section className="hero">
        <h1>Gaming Equipment</h1>
        <p>
          Shop the best controllers, consoles, headsets, and accessories for
          every platform — all in one place.
        </p>
      </section>

      <EquipmentSection title="Controllers" icon="🎮" items={controllers} />
      <EquipmentSection title="Consoles" icon="🕹️" items={consoles} />
      <EquipmentSection title="Accessories" icon="🎧" items={accessories} />

      <Footer variant="home" />
    </>
  );
}
