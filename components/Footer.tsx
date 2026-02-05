import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const services = [
  { name: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { name: 'Water Heaters', href: '/services/water-heaters' },
  { name: 'Sewer Line Replacement', href: '/services/sewer-line-replacement' },
  { name: 'Video Camera Inspection', href: '/services/video-camera-inspection' },
  { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'All Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container-custom text-center">
          <p className="text-white font-semibold text-lg">
            <Clock className="w-5 h-5 inline mr-2" />
            24/7 Emergency Service — Call{' '}
            <a href="tel:4059968259" className="underline hover:text-red-100 transition-colors">
              (405) 996-8259
            </a>
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-white">Don's Plumbing</span>
            </div>
            <p className="text-gray-400">
              Oklahoma City's trusted plumbing experts for over 13 years. Family owned & operated, providing reliable service 24/7.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:4059968259" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-400" />
                (405) 996-8259
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                Oklahoma City, Oklahoma
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="hover:text-white hover:pl-1 transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-white hover:pl-1 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Area</h3>
            <p className="text-gray-400 mb-4">
              Proudly serving Oklahoma City and surrounding areas including:
            </p>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Edmond</li>
              <li>• Norman</li>
              <li>• Moore</li>
              <li>• Midwest City</li>
              <li>• Del City</li>
              <li>• Yukon</li>
              <li>• Mustang</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Don's Plumbing. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Licensed & Insured | Oklahoma City, OK
          </p>
        </div>
      </div>
    </footer>
  )
}
