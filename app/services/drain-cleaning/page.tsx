import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight, Droplets } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Drain Cleaning Services | Don's Plumbing - Oklahoma City",
  description: "Professional drain cleaning in Oklahoma City. Clear stubborn clogs, tree roots, and buildup. 24/7 emergency service. Call Don's Plumbing at 405-996-8259.",
}

const benefits = [
  'Fast, effective clog removal',
  'Advanced hydro jetting technology',
  'Preventive maintenance plans',
  'Kitchen, bathroom & main line service',
  'Tree root removal',
  'Video inspection available',
  'Upfront pricing, no surprises',
  'Same-day service available',
]

const emergencySigns = [
  'Multiple drains clogging at once',
  'Water backing up into other fixtures',
  'Sewage odors from drains',
  'Gurgling sounds in pipes',
  'Standing water in sinks or tubs',
  'Toilet overflowing repeatedly',
]

const relatedServices = [
  { name: 'Video Camera Inspection', href: '/services/video-camera-inspection' },
  { name: 'Sewer Line Replacement', href: '/services/sewer-line-replacement' },
  { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
]

export default function DrainCleaningPage() {
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
                <Droplets className="w-4 h-4" />
                Professional Plumbing Service
              </div>
              <h1 className="heading-1 text-white mb-6">
                Drain Cleaning Services
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Stubborn clogs got you down? Our professional drain cleaning services 
                restore flow fast, whether it's a simple kitchen backup or a main 
                line blockage.
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
                src="/assets/images/services/dons-residential.jpg"
                alt="Professional drain cleaning"
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
                  Expert Drain Cleaning for Homes & Businesses
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Don's Plumbing, we understand that a clogged drain is more than just 
                  an inconvenience — it can disrupt your daily routine and even lead to 
                  serious plumbing problems if left untreated. Our experienced technicians 
                  use professional-grade equipment to clear any blockage quickly and effectively.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Unlike store-bought drain cleaners that can damage your pipes and only 
                  provide temporary relief, our drain cleaning services address the root 
                  cause of the problem. We use a combination of mechanical snaking and 
                  high-pressure hydro jetting to completely clear your drains and restore 
                  proper flow.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Drain Cleaning Services Include:
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
                  src="/assets/images/services/dons-new-construction.jpg"
                  alt="Drain cleaning in progress"
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
                    Some drain issues require immediate attention. Call us right away if you notice:
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
                  <h3 className="text-xl font-bold mb-4">Need Drain Cleaning?</h3>
                  <p className="text-primary-100 mb-6">
                    Don't let a clogged drain ruin your day. Contact us now for fast, 
                    reliable service.
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
        title="Ready for Clean, Clear Drains?"
        subtitle="Contact Don's Plumbing today for professional drain cleaning service."
      />
    </>
  )
}
