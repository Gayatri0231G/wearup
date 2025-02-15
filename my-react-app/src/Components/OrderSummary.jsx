import React from "react";
import "./OrderSummary.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OrderSummary = () => {
  return (
   
    <div className="container">
      <div className="top-section">
      <h2 className="brand">Wearup. <span className="order-overview">  | Order Overview</span></h2>
      <div className="steps">
        <span className="step completed">
          <FaCheckCircle className="icon" /> Information
        </span>
        <span className="step current">2 Payment Details</span>
        <span className="step">3 Complete Order</span>
      </div>
    </div>

      <div className="content">
        
        {/* <div className="summary">
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
        </div> */}
        <div className="order-summary">
      <h3 className="section-title">Summary Order</h3>
      <p className="section-description">
        Check your item and select your shipping for better experience order item.
      </p>

      {/* Order Items */}
      <div className="order-items">
        <div className="item">
          <img src="/shoes1.jpg" alt="Shoe 1" />
          <div>
            <p className="item-title">New Balance 57/40 Men's Sneakers - Mindful Grey</p>
            <span className="item-price">$129.00 <del>$189.00</del></span>
            <span className="item-size">42 EU - 8.5 US</span>
          </div>
        </div>
        <div className="item">
          <img src="/shoes2.jpg" alt="Shoe 2" />
          <div>
            <p className="item-title">New Balance 997H Men's Sneakers - Grey</p>
            <span className="item-price">$119.00 <del>$179.00</del></span>
            <span className="item-size">42.5 EU - 9 US</span>
          </div>
        </div>
        <div className="item">
          <img src="/shoes3.jpg" alt="Shoe 3" />
          <div>
            <p className="item-title">New Balance 57/40 Women's - Oyster Pink</p>
            <span className="item-price">$149.00</span>
            <span className="item-size">41.5 EU - 8 US</span>
          </div>
        </div>
      </div>

      {/* Shipping Methods */}
      <h4 className="shipping-title">Available Shipping Method</h4>
      <div className="shipping-methods">
        <label className="shipping-option selected">
          <input type="radio" name="shipping" checked readOnly />
          <div className="shipping-info">
            <img src="/fedex-logo.png" alt="FedEx" className="shipping-logo" />
            <span>FedEx Delivery</span>
            <p>Delivery: 2-3 days work</p>
          </div>
          <span className="shipping-price">Free</span>
        </label>

        <h4 className="shipping-title">Available International Shipping:</h4>
        <label className="shipping-option">
          <input type="radio" name="shipping" readOnly />
          <div className="shipping-info">
            <img src="/dhl-logo.png" alt="DHL" className="shipping-logo" />
            <span>DHL Delivery</span>
            <p>Delivery: 1-3 days work</p>
          </div>
          <span className="shipping-price">$12.00</span>
        </label>
      </div>
    </div>

        
        {/* <div className="payment">
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

          Pricing Details
          <div className="pricing">
            <p>Subtotal: <span>$397.00</span></p>
            <p>VAT (20%): <span>$2.89</span></p>
            <p className="total">Total: <span>$399.89</span></p>
          </div>

          <button className="pay-btn">Pay $399.89</button>
        </div> */}
        <div className="payment-details">
      <h3 className="section-title">Payment Details</h3>
      <p className="section-description">
        Complete your purchase item by providing your payment details order.
      </p>

      {/* Email Address */}
      <div className="input-group">
        <label>Email Address</label>
        <div className="input-box">
          <MdEmail className="icon" />
          <input type="email" value="barlyvallendito@gmail.com" readOnly />
          <FaCheckCircle className="check-icon" />
        </div>
      </div>

      {/* Card Detail */}
      <div className="input-group">
        <label>Card Detail</label>
        <div className="card-input">
          <input type="text" placeholder="Card Number" disabled />
          <input type="text" placeholder="MM / YY" disabled />
          <input type="text" placeholder="CVC" disabled />
        </div>
      </div>

      {/* Card Holder */}
      <div className="input-group">
        <label>Card Holder</label>
        <input type="text" value="Barly Vallendi" readOnly />
      </div>

      {/* Billing Address */}
      <div className="input-group">
        <label>Billing Address</label>
        <div className="input-box">
          <img src="/us-flag.png" alt="USA Flag" className="flag-icon" />
          <input type="text" value="7851 Garfield Ave, Huntington Beach" readOnly />
          <FaCheckCircle className="check-icon" />
        </div>
        <div className="billing-row">
          <input type="text" value="California(CA)" readOnly />
          <input type="text" value="92648" readOnly />
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="price-details">
        <div className="price-row">
          <span>Subtotal</span>
          <span>$ 397.00</span>
        </div>
        <div className="price-row">
          <span>Vat (20%)</span>
          <span>$ 2.89</span>
        </div>
        <div className="price-total">
          <span>Total</span>
          <span>$ 399.89</span>
        </div>
      </div>

      {/* Pay Button */}
      <button className="pay-button">Pay $ 399.89</button>
    </div>
      </div>
    </div>
    
  );
};

export default OrderSummary;
