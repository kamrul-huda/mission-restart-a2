import React from "react";
import envelop_icon from "../../assets/fi_envelop.png";
import facebook_icon from "../../assets/fi_facebook.png";
import linkedin_icon from "../../assets/fi_linkedin.png";
import globe_icon from "../../assets/fi_globe.png";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 border-t border-blue-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 py-10">
        {/* Brand */}
        <div className="space-y-3">
          <h1 className="text-white font-bold text-lg">CS — Ticket System</h1>

          <p className="text-sm leading-relaxed text-gray-400">
            The CS Ticket System tracks issues, manages requests, assigns tasks,
            and ensures fast, accountable resolution.
          </p>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <h1 className="text-white font-semibold">Company</h1>
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

        {/* Services */}
        <div className="space-y-2">
          <h1 className="text-white font-semibold">Services</h1>
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

        {/* Information */}
        <div className="space-y-2">
          <h1 className="text-white font-semibold">Information</h1>
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

        {/* Social */}
        <div className="space-y-3">
          <h1 className="text-white font-semibold">Social Links</h1>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src={globe_icon} />
              <span className="text-sm">@CS — Ticket System</span>
            </div>

            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src={linkedin_icon} />
              <span className="text-sm">@CS — Ticket System</span>
            </div>

            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src={facebook_icon} />
              <span className="text-sm">@CS — Ticket System</span>
            </div>

            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src={envelop_icon} />
              <span className="text-sm">support@cst.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs md:text-sm text-gray-400">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
