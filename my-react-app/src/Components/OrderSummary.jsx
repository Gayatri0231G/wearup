import React from "react";
import "./OrderSummary.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="container">
      {/* Top Navigation Section */}
      <div className="nav">
        <h2 className="brand">Wearup.</h2>
        <div className="steps">
          <span className="completed">✔ Information</span>
          <span className="current">2 Payment Details</span>
          <span>3 Complete Order</span>
        </div>
      </div>

      <div className="content">
        {/* Left Section - Summary Order */}
        <div className="summary">
          <h3>Summary Order</h3>
          <p>Check your item and select your shipping for better experience order item.</p>
          <div className="order-items">
            <div className="item">
              <img src="/shoes1.jpg" alt="Shoe 1" />
              <div>
                <p>New Balance 57/40 Men's Sneakers - Mindful Grey</p>
                <span>$129.00 <del>$189.00</del></span>
              </div>
            </div>
            <div className="item">
              <img src="/shoes2.jpg" alt="Shoe 2" />
              <div>
                <p>New Balance 997H Men's Sneakers - Grey</p>
                <span>$119.00 <del>$179.00</del></span>
              </div>
            </div>
            <div className="item">
              <img src="/shoes3.jpg" alt="Shoe 3" />
              <div>
                <p>New Balance 57/40 Women's - Oyster Pink</p>
                <span>$149.00</span>
              </div>
            </div>
          </div>

          {/* Shipping Methods */}
          <h4>Available Shipping Method</h4>
          <div className="shipping">
            <label className="selected">
              <input type="radio" name="shipping" checked />
              FedEx Delivery (Free) - 2-3 days
            </label>
            <label>
              <input type="radio" name="shipping" />
              DHL Delivery ($12.00) - 1-3 days
            </label>
          </div>
        </div>

        {/* Right Section - Payment Details */}
        <div className="payment">
          <h3>Payment Details</h3>
          <p>Complete your purchase item by providing your payment details order.</p>

          <label>Email Address</label>
          <input type="email" value="barlyvallendito@gmail.com" readOnly />

          <label>Card Detail</label>
          <div className="card-input">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVC" />
            <FaCcVisa className="card-icon" />
            <FaCcMastercard className="card-icon" />
          </div>

          <label>Card Holder</label>
          <input type="text" value="Barly Vallendi" readOnly />

          <label>Billing Address</label>
          <div className="address-box">
            <span>🇺🇸 7851 Garfield Ave, Huntington Beach</span>
            <span>California (CA) 92648</span>
          </div>

          {/* Pricing Details */}
          <div className="pricing">
            <p>Subtotal: <span>$397.00</span></p>
            <p>VAT (20%): <span>$2.89</span></p>
            <p className="total">Total: <span>$399.89</span></p>
          </div>

          <button className="pay-btn">Pay $399.89</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
