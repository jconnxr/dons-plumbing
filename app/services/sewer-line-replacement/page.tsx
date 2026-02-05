import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight, PipetteIcon } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sewer Line Replacement | Don's Plumbing - Oklahoma City",
  description: "Expert sewer line repair and replacement in Oklahoma City. Trenchless technology available. 24/7 emergency service. Call Don's Plumbing at 405-996-8259.",
}

const benefits = [
  'Trenchless repair options',
  'Traditional replacement',
  'Tree root removal',
  'Pipe bursting technology',
  'Pipe relining services',
  'Complete line replacement',
  'Minimal landscape disruption',
  'Long-lasting solutions',
]

const emergencySigns = [
  'Sewage backing up into home',
  'Multiple drains clogging',
  'Sewage smell in yard',
  'Wet spots in your lawn',
  'Foundation cracks appearing',
  'Sinkholes forming in yard',
]

const relatedServices = [
  { name: 'Video Camera Inspection', href: '/services/video-camera-inspection' },
  { name: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
]

export default function SewerLineReplacementPage() {
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
                <PipetteIcon className="w-4 h-4" />
                Professional Plumbing Service
              </div>
              <h1 className="heading-1 text-white mb-6">
                Sewer Line Replacement
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                When your sewer line fails, you need experts who can diagnose the 
                problem accurately and provide lasting solutions with minimal 
                disruption to your property.
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
                src="/assets/images/services/dons-commercial.jpg"
                alt="Sewer line replacement"
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
                  Expert Sewer Line Repair & Replacement
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  A damaged sewer line is one of the most serious plumbing problems a 
                  homeowner can face. Whether it's caused by tree root intrusion, aging 
                  pipes, ground shifting, or corrosion, sewer line issues require 
                  professional diagnosis and repair. At Don's Plumbing, we have the 
                  experience and equipment to handle even the most challenging sewer problems.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We always start with a video camera inspection to understand exactly 
                  what's happening in your sewer line. This allows us to recommend the 
                  most effective and cost-efficient solution — whether that's spot repair, 
                  trenchless relining, or complete replacement.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Sewer Line Services Include:
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
                    <h4 className="font-bold text-gray-900 mb-3">Trenchless Repair</h4>
                    <p className="text-gray-600 text-sm">
                      When possible, we use trenchless technology to repair or replace 
                      your sewer line without digging up your entire yard. This saves 
                      time, money, and your landscaping.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Traditional Replacement</h4>
                    <p className="text-gray-600 text-sm">
                      For severely damaged lines or certain soil conditions, traditional 
                      excavation may be the best option. We work efficiently to minimize 
                      disruption and restore your yard.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <PlaceholderImage 
                  src="/assets/images/services/dons-new-construction2.jpg"
                  alt="Sewer line repair work"
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
                    Sewer line problems can escalate quickly. Call us immediately if you notice:
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
                  <h3 className="text-xl font-bold mb-4">Sewer Line Issues?</h3>
                  <p className="text-primary-100 mb-6">
                    Don't wait until a small problem becomes a big one. Contact us for a 
                    professional assessment.
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
        title="Need Sewer Line Service?"
        subtitle="Contact Don's Plumbing today for expert diagnosis and repair of your sewer line."
      />
    </>
  )
}
