import React from 'react';

function Testimonials() {
  const reviews = [
    { id: 1, name: "Sara L.", rating: "5/5", text: "Serious value for money!", img: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "John D.", rating: "5/5", text: "The Greek salad was incredible.", img: "https://i.pravatar.cc/100?img=3" },
    { id: 3, name: "Maria R.", rating: "5/5", text: "Great atmosphere and service.", img: "https://i.pravatar.cc/100?img=5" },
    { id: 4, name: "Alex K.", rating: "5/5", text: "Best lemon dessert in Chicago!", img: "https://i.pravatar.cc/100?img=8" }
  ];

  return (
    <section className="testimonials-bg">
      <div className="container testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {reviews.map((item) => (
            <div key={item.id} className="testimonial-card">
              <span className="rating">Rating: {item.rating}</span>
              <div className="user-info">
                <img src={item.img} alt={item.name} className="user-img" />
                <h4>{item.name}</h4>
              </div>
              <p>"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;