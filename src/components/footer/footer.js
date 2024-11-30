import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-600  text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Track Order
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul>
              <li className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-400"
                >
                  info@example.com
                </a>
              </li>
              <li className="mb-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-700">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-base text-white">
            &copy; 2024 Electronics Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
