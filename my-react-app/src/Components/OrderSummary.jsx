import React from "react";
import "./OrderSummary.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="order-container">
      <div className="summary-section">
        <h2>Summary Order</h2>
        <p>Check your item and select your shipping for better experience order item.</p>
        <div className="items-list">
          <div className="item">
            <img src="/shoes1.jpg" alt="Sneakers" />
            <div className="item-details">
              <h3>New Balance 57/40 Men's Sneakers - Mindful Grey</h3>
              <p>$129.00 <span className="old-price">$180.00</span></p>
            </div>
          </div>
          <div className="item">
            <img src="/shoes2.jpg" alt="Sneakers" />
            <div className="item-details">
              <h3>New Balance 997H Men's Sneakers - Grey</h3>
              <p>$119.00 <span className="old-price">$170.00</span></p>
            </div>
          </div>
          <div className="item">
            <img src="/shoes3.jpg" alt="Sneakers" />
            <div className="item-details">
              <h3>New Balance 57/40 Women's - Oyster Pink</h3>
              <p>$149.00 <span className="old-price">$199.00</span></p>
            </div>
          </div>
        </div>
        <div className="shipping-section">
          <h3>Available Shipping Method</h3>
          <div className="shipping-option selected">Fedex Delivery - Free</div>
          <div className="shipping-option">DHL Delivery - $12.00</div>
        </div>
      </div>
      <div className="payment-section">
        <h2>Payment Details</h2>
        <div className="input-group">
          <label>Email Address</label>
          <div className="input-box"><MdEmail /> baryvallendito@gmail.com <FaCheckCircle className="check-icon" /></div>
        </div>
        <div className="input-group">
          <label>Card Detail</label>
          <div className="input-box"><FaCcVisa /> **** **** **** 1234</div>
        </div>
        <div className="input-group">
          <label>Card Holder</label>
          <input type="text" value="Barly Vallendi" readOnly />
        </div>
        <div className="input-group">
          <label>Billing Address</label>
          <div className="input-box">7851 Garfield Ave, Huntington Beach, CA 92648 <FaCheckCircle className="check-icon" /></div>
        </div>
        <div className="total-section">
          <p>Subtotal: <span>$397.00</span></p>
          <p>VAT (20%): <span>$2.89</span></p>
          <h3>Total: <span>$399.89</span></h3>
        </div>
        <button className="pay-button">Pay $399.89</button>
      </div>
    </div>
  );
};

export default OrderSummary;