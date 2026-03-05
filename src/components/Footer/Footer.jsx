import React from "react";
import envelop_icon from "../../assets/fi_envelop.png";
import facebook_icon from "../../assets/fi_facebook.png";
import linkedin_icon from "../../assets/fi_linkedin.png";
import globe_icon from "../../assets/fi_globe.png";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 border-t border-blue-500">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6 p-4">
        <div className="py-4">
          <h1 className="text-white font-bold">CS — Ticket System</h1>
          <p className="font-light">
            The **CS Ticket System** tracks issues, manages requests, assigns
            tasks, and ensures fast, accountable resolution.
          </p>
        </div>

        <div className="py-4">
          <h1 className="text-white font-bold">Company</h1>
          <p>
            <a className="link link-hover">About Us</a>
          </p>
          <p>
            <a className="link link-hover">Our Mission</a>
          </p>
          <p>
            <a className="link link-hover">Contact Sales</a>
          </p>
        </div>

        <div className="py-4">
          <h1 className="text-white font-bold">Services</h1>
          <p>
            <a className="link link-hover">Products & Services</a>
          </p>
          <p>
            <a className="link link-hover">Customer Stories</a>
          </p>
          <p>
            <a className="link link-hover">Download Apps</a>
          </p>
        </div>

        <div className="py-4">
          <h1 className="text-white font-bold">Information</h1>
          <p>
            <a className="link link-hover">Privacy Policy</a>
          </p>
          <p>
            <a className="link link-hover">Terms & Conditions</a>
          </p>
          <p>
            <a className="link link-hover">Join Us</a>
          </p>
        </div>

        <div className="py-4">
          <h1 className="text-white font-bold">Social Links</h1>
          <div className="flex flex-col gap-2">
            <span className="flex gap-1">
              <img className="h-6" src={globe_icon}></img>
              <span>@CS — Ticket System</span>
            </span>
            <span className="flex gap-1">
              <img className="h-6" src={linkedin_icon}></img>
              <span>@CS — Ticket System</span>
            </span>
            <span className="flex gap-1">
              <img className="h-6" src={facebook_icon}></img>
              <span>@CS — Ticket System</span>
            </span>
            <span className="flex gap-1">
              <img className="h-6" src={envelop_icon}></img>{" "}
              <span> support@cst.com</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 mt-6  text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
