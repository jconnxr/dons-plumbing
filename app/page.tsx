import Link from 'next/link'
import { Phone, Calendar, Shield, Clock, Users, Award, ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ServiceCard from '@/components/ServiceCard'
import PlaceholderImage from '@/components/PlaceholderImage'
import CTASection from '@/components/CTASection'
import TestimonialsSection from '@/components/TestimonialsSection'

const services = [
  {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services to clear clogs and keep your pipes flowing smoothly.',
    href: '/services/drain-cleaning',
    iconName: 'Droplets' as const,
  },
  {
    title: 'Water Heaters',
    description: 'Expert water heater installation, repair, and replacement services for your home or business.',
    href: '/services/water-heaters',
    iconName: 'Flame' as const,
  },
  {
    title: 'Sewer Line Replacement',
    description: 'Complete sewer line repair and replacement using modern techniques and equipment.',
    href: '/services/sewer-line-replacement',
    iconName: 'PipetteIcon' as const,
  },
  {
    title: 'Video Camera Inspection',
    description: 'State-of-the-art camera technology to diagnose plumbing issues quickly and accurately.',
    href: '/services/video-camera-inspection',
    iconName: 'Video' as const,
  },
  {
    title: 'Slab Leak Detection',
    description: 'Advanced leak detection services to find hidden leaks under your foundation.',
    href: '/services/slab-leak-detection',
    iconName: 'Search' as const,
  },
]

const trustFactors = [
  {
    icon: Award,
    title: '13+ Years Experience',
    description: 'Over a decade of trusted service to Oklahoma City residents and businesses.',
  },
  {
    icon: Users,
    title: 'Family Owned & Operated',
    description: 'We treat every customer like family with personalized, caring service.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Plumbing emergencies don\'t wait, and neither do we. Available around the clock.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your complete peace of mind.',
  },
]

const serviceAreas = [
  'Oklahoma City',
  'Edmond',
  'Norman',
  'Moore',
  'Midwest City',
  'Del City',
  'Yukon',
  'Mustang',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-primary-50 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/5 -z-10 rounded-bl-[100px]" />
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                24/7 Emergency Service Available
              </div>
              
              <h1 className="heading-1 text-gray-900 mb-6">
                Oklahoma City's{' '}
                <span className="text-gradient">Trusted Plumber</span>{' '}
                for Over 13 Years
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From emergency repairs to planned installations, Don's Plumbing delivers 
                fast, reliable, and professional service to residential and commercial 
                customers throughout Oklahoma City.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:4059968259"
                  className="btn-emergency"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (405) 996-8259
                </a>
                <Link 
                  href="/contact"
                  className="btn-secondary"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Service
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Free Estimates
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Same Day Service
                </div>
              </div>
            </AnimatedSection>
            
            {/* Image */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl -z-10 rotate-3" />
                <PlaceholderImage 
                  src="/assets/images/contact/Dons-home-page.jpg"
                  alt="Don's Plumbing professional service"
                  className="rounded-2xl shadow-2xl overflow-hidden"
                  aspectRatio="video"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="heading-2 text-gray-900 mt-2 mb-4">
              Professional Plumbing Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We offer a comprehensive range of plumbing services for both residential 
              and commercial properties.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                iconName={service.iconName}
                index={index}
              />
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl -z-10 -rotate-3" />
                <PlaceholderImage 
                  src="/assets/images/services/dons-residential.jpg"
                  alt="Don's Plumbing team"
                  className="rounded-2xl shadow-2xl overflow-hidden"
                  aspectRatio="video"
                />
              </div>
            </AnimatedSection>
            
            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="heading-2 text-gray-900 mt-2 mb-6">
                  Your Trusted Partner for All Plumbing Needs
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  At Don's Plumbing, we've built our reputation on honest work, fair prices, 
                  and exceptional customer service. When you call us, you're not just getting 
                  a plumber — you're getting a trusted partner.
                </p>
              </AnimatedSection>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {trustFactors.map((factor, index) => (
                  <AnimatedSection key={factor.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                        <factor.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{factor.title}</h3>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Emergency Callout Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Available 24 Hours a Day, 7 Days a Week
            </div>
            
            <h2 className="heading-2 text-white mb-6">
              Plumbing Emergency?{' '}
              <span className="block">We're Here When You Need Us.</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Burst pipes, overflowing toilets, or no hot water? Don't panic. 
              Our emergency team is ready to respond quickly and get your plumbing 
              back to normal.
            </p>
            
            <a 
              href="tel:4059968259"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-red-600 bg-white rounded-xl shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 mr-3" />
              (405) 996-8259
            </a>
            
            <p className="text-white/70 mt-4 text-sm">
              No answering machines — speak directly with a real person
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Local Service Area Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Service Area</span>
              <h2 className="heading-2 text-gray-900 mt-2 mb-6">
                Proudly Serving Oklahoma City & Surrounding Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                As a locally owned and operated business, we're proud to serve our 
                neighbors throughout the Oklahoma City metropolitan area. No matter 
                where you're located, we'll be there when you need us.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <AnimatedSection key={area} delay={index * 0.05}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              
              <a 
                href="tel:4059968259"
                className="btn-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Service
              </a>
            </AnimatedSection>
            
            {/* Image */}
            <AnimatedSection direction="left">
              <PlaceholderImage 
                src="/assets/images/services/dons-commercial.jpg"
                alt="Oklahoma City service area"
                className="rounded-2xl shadow-xl overflow-hidden"
                aspectRatio="video"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection 
        title="Ready to Solve Your Plumbing Problems?"
        subtitle="Contact Don's Plumbing today for fast, reliable service you can trust."
      />
    </>
  )
}
