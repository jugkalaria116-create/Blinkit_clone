import React from "react";
import "./Shop.css";

const categories = [
  {
    name: "Fruits",
    icon: "🍎",
    desc: "Fresh seasonal, organic & imported fruits like apples, bananas, mangoes, berries and more"
  },
  {
    name: "Vegetables",
    icon: "🥕",
    desc: "Farm-fresh leafy greens, root vegetables, tomatoes, onions, potatoes and daily kitchen essentials"
  },
  {
    name: "Dairy",
    icon: "🥛",
    desc: "Pure milk, curd, paneer, cheese, butter, ghee and other fresh dairy products"
  },
  {
    name: "Bakery",
    icon: "🥖",
    desc: "Freshly baked bread, buns, cakes, cookies, pastries and healthy baked snacks"
  },
  {
    name: "Drinks",
    icon: "🥤",
    desc: "Refreshing fruit juices, soft drinks, energy drinks, milkshakes and bottled beverages"
  },
  {
    name: "Others",
    icon: "📦",
    desc: "Groceries, pulses, spices, packaged foods, household and daily-use essentials"
  }
];

function Shop() {
  return (
    <div className="shop-page">
      <h2 className="shop-title">Shop by Category</h2>

      <div className="category-cards">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <span className="category-icon">{cat.icon}</span>
            <h4>{cat.name}</h4>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
