import React from 'react';
import './menu.css';

function Menu() {
  const items = [
    {
      name: 'Espresso',
      price: '$3.00',
      description: 'Strong and bold, served in a short cup.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Latte',
      price: '$4.00',
      description: 'Smooth and creamy with steamed milk.',
      image: 'https://images.unsplash.com/photo-1558211583-d26d1f5c1e6d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Cappuccino',
      price: '$4.50',
      description: 'Equal parts espresso, steamed milk, and foam.',
      image: 'https://images.unsplash.com/photo-1585314062344-3ba9f1d5f3a4?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mocha',
      price: '$5.00',
      description: 'Espresso with chocolate and milk, topped with whipped cream.',
      image: 'https://images.unsplash.com/photo-1572449043417-55f4685c7e75?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section  id="menu" className="menu-section">
      <h2>Our Coffee Menu</h2>
      <div className="menu-grid">
        {items.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="menu-details">
              <h3>{item.name} <span>{item.price}</span></h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
