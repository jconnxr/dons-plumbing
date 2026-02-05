'use client'

import Link from 'next/link'
import { Phone, ArrowRight, Droplets, Flame, PipetteIcon, Video, Search, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'

const services = [
  {
    title: 'Drain Cleaning',
    slug: 'drain-cleaning',
    image: '/assets/images/services/dons-residential.jpg',
    description: 'Professional drain cleaning services to clear clogs and restore proper flow. We use advanced equipment to handle even the toughest blockages in your home or business.',
    icon: Droplets,
    features: ['Kitchen & bathroom drains', 'Main line cleaning', 'Hydro jetting', 'Preventive maintenance'],
  },
  {
    title: 'Water Heaters',
    slug: 'water-heaters',
    image: '/assets/images/services/dons-water-heater.jpg',
    description: 'Complete water heater services including installation, repair, and replacement. We work with traditional tank and tankless systems for optimal efficiency.',
    icon: Flame,
    features: ['Installation & replacement', 'Repairs & maintenance', 'Tankless systems', 'Energy efficient options'],
  },
  {
    title: 'Sewer Line Replacement',
    slug: 'sewer-line-replacement',
    image: '/assets/images/services/dons-commercial.jpg',
    description: 'Expert sewer line repair and replacement services using modern trenchless technology when possible, minimizing disruption to your property.',
    icon: PipetteIcon,
    features: ['Trenchless repair options', 'Full line replacement', 'Root removal', 'Pipe relining'],
  },
  {
    title: 'Video Camera Inspection',
    slug: 'video-camera-inspection',
    image: '/assets/images/services/dons-new-construction.jpg',
    description: 'State-of-the-art video camera technology to accurately diagnose plumbing issues without destructive exploration. See exactly what\'s happening in your pipes.',
    icon: Video,
    features: ['Sewer line inspection', 'Drain diagnostics', 'Locate blockages', 'Pre-purchase inspections'],
  },
  {
    title: 'Slab Leak Detection',
    slug: 'slab-leak-detection',
    image: '/assets/images/services/dons-new-construction2.jpg',
    description: 'Advanced electronic leak detection to find hidden leaks under your concrete foundation. Early detection prevents costly damage to your home.',
    icon: Search,
    features: ['Non-invasive detection', 'Foundation leak repair', 'Water line leaks', 'Hot water line leaks'],
  },
]

export default function ServicesPage() {
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
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="heading-1 text-white mt-2 mb-6">
              Professional Plumbing Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              From routine maintenance to emergency repairs, Don's Plumbing provides 
              comprehensive solutions for all your residential and commercial plumbing needs.
            </p>
            <a 
              href="tel:4059968259"
              className="btn-emergency inline-flex"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (405) 996-8259
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="heading-3 text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                    >
                      Learn More About {service.title}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Service Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <PlaceholderImage 
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl overflow-hidden"
                      aspectRatio="video"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Additional Plumbing Services
            </h2>
            <p className="text-xl text-gray-600">
              Beyond our core services, we also handle a variety of other plumbing needs.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Toilet repair & installation',
                'Faucet replacement',
                'Garbage disposal repair',
                'Pipe repair & replacement',
                'Water pressure issues',
                'Fixture installation',
                'Leak repairs',
                'Backflow prevention',
                'Gas line services',
              ].map((service, index) => (
                <div 
                  key={service}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see what you need? Give us a call — we handle all types of plumbing work!
            </p>
            <a 
              href="tel:4059968259"
              className="btn-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (405) 996-8259
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Plumbing Service?"
        subtitle="Contact us today for a free estimate on your plumbing project."
      />
    </>
  )
}
