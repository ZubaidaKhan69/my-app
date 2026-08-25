import React from 'react';
import greekSalad from './greek-salad.jpg';
import bruschetta from './bruschetta.jpg';
import lemonDessert from './lemon-dessert.jpg';

function Main() {
  return (
    <main className="container specials-container">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="btn btn-primary">Online Menu</button>
      </div>

      <div className="cards-grid">
        {/* Card 1 */}
        <article className="card">
          <img src={greekSalad} alt="Greek Salad" className="card-img" />
          <div className="card-content">
            <div className="card-header">
              <h3>Greek salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a href="/" className ="order-btn">Order a delivery 🚴</a>
          </div>
        </article>

        {/* Card 2 */}
        <article className ="card">
          <img src={bruschetta} alt="Bruschetta" className="card-img" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruchetta</h3>
              <span className="price">$ 5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="/" className="order-btn">Order a delivery 🚴</a>
          </div>
        </article>

        {/* Card 3 */}
        <article className="card">
          <img src={lemonDessert} alt="Lemon Dessert" className="card-img" />
          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$ 5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a href="/" className="order-btn">Order a delivery 🚴</a>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Main;