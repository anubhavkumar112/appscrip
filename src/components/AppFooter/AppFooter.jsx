

import  { useState } from "react";
import "./AppFooter.css";
import USD from "../../images/usFLAG.png";
import insta from "../../images/Insta.png";
import linkedin from "../../images/linkedin.png";
import gpay from "../../images/g-pay.png";
import mastercard from "../../images/masercard.png";
import amex from "../../images/amex.png";
import paypal from "../../images/paypal.png";
import apay from "../../images/a-pay.png";
import dpay from "../../images/d-pay.png";
import dropdown from "../../images/arrow-right.png";

const AppFooter = () => {
  const [metta, setMetta] = useState(false);
  const [quicklinks, setQuicklinks] = useState(false);
  const [l1class, setL1class] = useState("l1 h75");
  const [l2class, setL2class] = useState("l2 h75");
  const [footerbtmcls, setFooterbtmcls] = useState("footer-bottom");
  const [l1icocls, setL1icocls] = useState("");
  const [l2icocls, setL2icocls] = useState("");

  const handlemettamuse = () => {
    metta ? setMetta(false) : setMetta(true);
    metta ? setL1class("l1 h75") : setL1class("l1");
    !metta ? setL1icocls("rotate180") : setL1icocls("");
    !metta ? setFooterbtmcls("height536") : setFooterbtmcls("footer-bottom");
  };
  const handleQuicklinks = () => {
    quicklinks ? setQuicklinks(false) : setQuicklinks(true);
    quicklinks ? setL2class("l2 h75") : setL2class("l2");
    !quicklinks ? setL2icocls("rotate180") : setL2icocls("");
    !quicklinks
      ? setFooterbtmcls("height536")
      : setFooterbtmcls("footer-bottom");
  };


  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-about">BE THE FIRST TO KNOW</div>
          <p>Sign up for updates from mettā muse.</p>
          <div className="footer-input">
            <input type="email" placeholder="Enter your E-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-about">CONTACT US</div>
          <div className="footer-contactinfo">
            <span className="contactNo">+44221135360</span>
            <span className="mail">customercare@mettamuse.com</span>
          </div>
          <div className="currencysection">
            <div className="footer-about gap24">CURRENCY</div>
            <img src={USD} alt="usd" />
          </div>

          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className={footerbtmcls}>
        <div className="footer-bottom-left">
          <div className={l1class}>
            <div className="l1-heading">
              mettā muse{" "}
              <img
                src={dropdown}
                onClick={handlemettamuse}
                className={l1icocls}
              />
            </div>
            {metta ? (
              <>
                <span>About</span>
                <span>Stories</span>
                <span>Artisans</span>
                <span>Boutiques</span>
                <span>Contact Us</span>
                <span>EU Compliances Docs</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className={l2class}>
            <div className="l2-heading">
              QUICK LINKS{" "}
              <img
                src={dropdown}
                className={l2icocls}
                onClick={handleQuicklinks}
              />
            </div>
            {quicklinks ? (
              <>
                <span>Order & Shipping</span>
                <span>Join/Login as Seller</span>
                <span>Payment & Pricing</span>
                <span>Return & Refunds</span>
                <span>FAQs</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="footer-links">
            <div>
            <span>About</span>
                <span>Stories</span>
                <span>Artisans</span>
                <span>Boutiques</span>
                <span>Contact Us</span>
                <span>EU Compliances Docs</span>
            </div>
            <div>
            <span>Order & Shipping</span>
                <span>Join/Login as Seller</span>
                <span>Payment & Pricing</span>
                <span>Return & Refunds</span>
                <span>FAQs</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-right">
          <div className="bot-media">
            <div className="footer-followus">
              FOLLOW US <img src={dropdown} alt="" />
            </div>
            <div className="footer-media">
              <img src={insta} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="payment-portals">mettā muse ACCEPTS</div>
          <div className="payment-portals-img">
            <img src={gpay} alt="gpay" />
            <img src={mastercard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
            <img src={amex} alt="amex" />
            <img src={apay} alt="apay" />
            <img src={dpay} alt="dpay" />
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  )
}

export default AppFooter