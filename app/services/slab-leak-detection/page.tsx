import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight, Search } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Slab Leak Detection | Don's Plumbing - Oklahoma City",
  description: "Expert slab leak detection in Oklahoma City. Non-invasive electronic leak detection. 24/7 emergency service. Call Don's Plumbing at 405-996-8259.",
}

const benefits = [
  'Non-invasive detection methods',
  'Electronic leak location',
  'Acoustic listening devices',
  'Thermal imaging available',
  'Precise leak pinpointing',
  'Hot & cold water line detection',
  'Sewer line leak detection',
  'Detailed inspection reports',
]

const emergencySigns = [
  'Unexplained spike in water bill',
  'Sound of running water when none is on',
  'Hot spots on your floor',
  'Cracks in walls or flooring',
  'Mold or mildew odors',
  'Damp or warm spots on floor',
  'Low water pressure',
  'Foundation shifting',
]

const relatedServices = [
  { name: 'Video Camera Inspection', href: '/services/video-camera-inspection' },
  { name: 'Sewer Line Replacement', href: '/services/sewer-line-replacement' },
  { name: 'Water Heaters', href: '/services/water-heaters' },
]

export default function SlabLeakDetectionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 -z-10" />
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Search className="w-4 h-4" />
                Professional Plumbing Service
              </div>
              <h1 className="heading-1 text-white mb-6">
                Slab Leak Detection
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Hidden leaks under your foundation can cause serious damage. Our 
                advanced detection technology finds leaks accurately without 
                tearing up your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:4059968259"
                  className="btn-emergency"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (405) 996-8259
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Service
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="left">
              <PlaceholderImage 
                src="/assets/images/services/dons-new-construction2.jpg"
                alt="Slab leak detection"
                className="rounded-2xl shadow-2xl overflow-hidden"
                aspectRatio="video"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="heading-3 text-gray-900 mb-6">
                  Advanced Leak Detection Technology
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Slab leaks occur when water lines running beneath your concrete 
                  foundation develop cracks or holes. These hidden leaks can go 
                  undetected for months, causing extensive damage to your foundation, 
                  flooring, and belongings. Early detection is critical to minimizing 
                  damage and repair costs.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  At Don's Plumbing, we use state-of-the-art electronic detection 
                  equipment to locate slab leaks precisely without destructive 
                  excavation. Our non-invasive methods allow us to pinpoint the exact 
                  location of the leak, so repairs can be made with minimal disruption 
                  to your home.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Detection Services Include:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <PlaceholderImage 
                  src="/assets/images/services/dons-residential.jpg"
                  alt="Leak detection equipment"
                  className="rounded-2xl shadow-lg overflow-hidden mb-8"
                  aspectRatio="video"
                />
              </AnimatedSection>

              {/* Emergency Signs */}
              <AnimatedSection>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Signs You May Have a Slab Leak
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    If you notice any of these warning signs, contact us immediately for an inspection:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {emergencySigns.map((sign) => (
                      <li key={sign} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-500 font-bold">•</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:4059968259"
                    className="btn-emergency mt-6"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (405) 996-8259
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Danger of Ignoring Slab Leaks
                </h3>
                <p className="text-gray-600 mb-4">
                  Left untreated, slab leaks can cause:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold">•</span>
                    Foundation damage and structural issues
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold">•</span>
                    Mold and mildew growth
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold">•</span>
                    Warped or damaged flooring
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold">•</span>
                    Significantly higher water bills
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold">•</span>
                    Costly emergency repairs
                  </li>
                </ul>
                <p className="text-gray-600">
                  The sooner you address a slab leak, the less damage and expense 
                  you'll face. Our team responds quickly to help you protect your home.
                </p>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* CTA Card */}
                <div className="bg-primary-600 rounded-2xl p-6 text-white mb-8">
                  <h3 className="text-xl font-bold mb-4">Suspect a Slab Leak?</h3>
                  <p className="text-primary-100 mb-6">
                    Don't wait for the damage to get worse. Contact us now for 
                    professional leak detection.
                  </p>
                  <a 
                    href="tel:4059968259"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (405) 996-8259
                  </a>
                </div>

                {/* Related Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((service) => (
                      <li key={service.name}>
                        <Link 
                          href={service.href}
                          className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors group"
                        >
                          {service.name}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Leak Detection?"
        subtitle="Contact Don's Plumbing today for professional slab leak detection services."
      />
    </>
  )
}
