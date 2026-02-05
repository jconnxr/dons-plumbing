import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight, Flame } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Water Heater Services | Don's Plumbing - Oklahoma City",
  description: "Expert water heater installation, repair & replacement in Oklahoma City. Tank and tankless systems. 24/7 emergency service. Call Don's Plumbing at 405-996-8259.",
}

const benefits = [
  'Tank and tankless installation',
  'Same-day repair service',
  'Energy-efficient upgrades',
  'Proper sizing & recommendations',
  'Gas and electric systems',
  'Sediment flush & maintenance',
  'Warranty-backed work',
  'Upfront pricing',
]

const emergencySigns = [
  'No hot water at all',
  'Water heater leaking',
  'Strange noises from the tank',
  'Rusty or discolored hot water',
  'Hot water runs out quickly',
  'Smell of gas near the unit',
]

const relatedServices = [
  { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
  { name: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { name: 'Video Camera Inspection', href: '/services/video-camera-inspection' },
]

export default function WaterHeatersPage() {
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
                <Flame className="w-4 h-4" />
                Professional Plumbing Service
              </div>
              <h1 className="heading-1 text-white mb-6">
                Water Heater Services
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                From repairs to full replacements, our water heater experts ensure 
                you always have reliable hot water when you need it most.
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
                src="/assets/images/services/dons-water-heater.jpg"
                alt="Water heater installation"
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
                  Complete Water Heater Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your water heater is essential to your daily comfort — from hot showers 
                  to clean dishes. When it stops working properly, you need a team you can 
                  trust to diagnose the problem quickly and provide the right solution. 
                  Don's Plumbing has over 13 years of experience servicing all types of 
                  water heaters.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you need a simple repair, routine maintenance, or a complete 
                  replacement, we'll help you choose the best option for your needs and 
                  budget. We work with both traditional tank water heaters and modern 
                  tankless systems, and we'll always explain your options before any work begins.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Water Heater Services Include:
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
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Tank Water Heaters</h4>
                    <p className="text-gray-600 text-sm">
                      Traditional and reliable. We service all major brands and can help 
                      you upgrade to a more efficient model when it's time for replacement.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Tankless Water Heaters</h4>
                    <p className="text-gray-600 text-sm">
                      Endless hot water and energy savings. We install and service tankless 
                      systems for homes and businesses of all sizes.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <PlaceholderImage 
                  src="/assets/images/services/dons-residential.jpg"
                  alt="Water heater service"
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
                      When to Call an Emergency Plumber
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Some water heater issues require immediate attention. Call us right away if you notice:
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* CTA Card */}
                <div className="bg-primary-600 rounded-2xl p-6 text-white mb-8">
                  <h3 className="text-xl font-bold mb-4">Water Heater Problems?</h3>
                  <p className="text-primary-100 mb-6">
                    No hot water? Strange noises? Leaking tank? We can help — contact us 
                    now for fast service.
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
        title="Need Water Heater Service?"
        subtitle="Contact Don's Plumbing today for expert water heater repair, replacement, or installation."
      />
    </>
  )
}
