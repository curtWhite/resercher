import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ResearchReviews</h3>
            <p className="text-gray-300 mb-4">
              A platform dedicated to reviewing and discussing the latest research papers across various scientific disciplines.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/papers" className="text-gray-300 hover:text-white">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contribute" className="text-gray-300 hover:text-white">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-gray-300 hover:text-white">
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Have questions or suggestions?
            </p>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ResearchReviews. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}