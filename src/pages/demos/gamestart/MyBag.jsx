import { useState } from "react";
import "./gamestart.css";

const INITIAL_CART = [
  {
    id: 1,
    name: "Resident Evil Requiem",
    platform: "PS5",
    price: 69.99,
    qty: 1,
    image: "/images/demos/gamestart/re-requiem.jpg",
  },
  {
    id: 2,
    name: "Crimson Desert",
    platform: "PS5 / Xbox Series X",
    price: 59.99,
    qty: 1,
    image: "/images/demos/gamestart/crimson-desert.jpg",
  },
  {
    id: 3,
    name: "Elder Ring",
    platform: "PS5 / Xbox Series X / PC",
    price: 59.99,
    qty: 1,
    image: "/images/demos/gamestart/elder-ring.jpg",
  },
];

const TAX_RATE = 0.08;

export function MyBag() {
  const [cart, setCart] = useState(INITIAL_CART);

  function updateQty(id, delta) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="gs-page" data-testid="cart-page">

      {/* ── Header ── */}
      <header className="gs-header" data-testid="gs-header">
        <div className="gs-logo" aria-label="Game Start home">
          <span className="gs-logo-icon" aria-hidden="true">▶</span>
          <span className="gs-logo-text">GAME START</span>
        </div>

        <nav className="gs-topnav" aria-label="Store navigation">
          <span>Games</span>
          <span>Consoles</span>
          <span>Accessories</span>
          <span>Deals</span>
        </nav>

        <div className="gs-header-actions">
          <span className="gs-cart-count" aria-label={`${totalItems} items in bag`} data-testid="header-cart-count">
            🛒 {totalItems}
          </span>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="gs-main">

        <p className="gs-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="gs-breadcrumb-sep">/</span>
          <span>My Bag</span>
        </p>

        <h1 className="gs-page-title">My Bag</h1>

        <div className="gs-layout">

          {/* Cart items */}
          <section aria-label="Cart items" data-testid="cart-items-section">
            <div className="gs-cart">
              {cart.length === 0 ? (
                <div className="gs-empty" data-testid="cart-empty">
                  <p>Your bag is empty.</p>
                </div>
              ) : (
                <>
                  <div className="gs-cart-header-row" aria-hidden="true">
                    <span>Item</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                    <span></span>
                  </div>

                  {cart.map((item) => (
                    <div
                      className="gs-cart-item"
                      key={item.id}
                      data-testid="cart-item"
                      data-item-id={item.id}
                    >
                      {/* Item info */}
                      <div className="gs-item-info">
                        <div className="gs-item-thumb">
                          <img src={item.image} alt={item.name} className="gs-item-cover" />
                        </div>
                        <div>
                          <p className="gs-item-name" data-testid="item-name">
                            {item.name}
                          </p>
                          <p className="gs-item-platform">{item.platform}</p>
                        </div>
                      </div>

                      {/* Unit price */}
                      <span className="gs-item-price" data-testid="item-price">
                        ${item.price.toFixed(2)}
                      </span>

                      {/* Qty stepper */}
                      <div
                        className="gs-qty-stepper"
                        role="group"
                        aria-label={`Quantity for ${item.name}`}
                        data-testid="qty-stepper"
                      >
                        <button
                          className="gs-qty-btn"
                          onClick={() => updateQty(item.id, -1)}
                          disabled={item.qty <= 1}
                          aria-label={`Decrease quantity of ${item.name}`}
                          data-testid="qty-decrease"
                        >
                          −
                        </button>
                        <span className="gs-qty-value" data-testid="item-qty">
                          {item.qty}
                        </span>
                        <button
                          className="gs-qty-btn"
                          onClick={() => updateQty(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          data-testid="qty-increase"
                        >
                          +
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="gs-item-line-total" data-testid="item-line-total">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>

                      {/* Remove */}
                      <button
                        className="gs-remove-btn"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from bag`}
                        data-testid="remove-item"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>

          {/* Order summary */}
          <aside className="gs-summary" aria-label="Order summary" data-testid="order-summary">
            <h2 className="gs-summary-title">Order Summary</h2>

            <div className="gs-summary-row">
              <span className="gs-summary-label">
                Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
              <span className="gs-summary-value" data-testid="cart-subtotal">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="gs-summary-row">
              <span className="gs-summary-label">Estimated Tax (8%)</span>
              <span className="gs-summary-value" data-testid="cart-tax">
                ${tax.toFixed(2)}
              </span>
            </div>

            <div className="gs-summary-row">
              <span className="gs-summary-label">Shipping</span>
              <span className="gs-free" data-testid="cart-shipping">FREE</span>
            </div>

            <div className="gs-summary-divider" />

            <div className="gs-summary-total-row">
              <span className="gs-summary-total-label">Total</span>
              <span className="gs-summary-total-value" data-testid="cart-total">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              className="gs-checkout-btn"
              data-testid="checkout-btn"
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>

            <p className="gs-secure-note" aria-hidden="true">🔒 Secure checkout</p>
          </aside>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="gs-footer">
        <p>© 2026 Game Start. All rights reserved.</p>
      </footer>

    </div>
  );
}
