import { Phone, MapPin, Clock, Mail, AlertTriangle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us | Don's Plumbing - Oklahoma City",
  description: "Contact Don's Plumbing for all your plumbing needs. 24/7 emergency service available. Call 405-996-8259 or book online.",
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(405) 996-8259',
    href: 'tel:4059968259',
    description: 'Call us anytime, 24/7',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    content: 'Oklahoma City, OK',
    href: null,
    description: 'And surrounding areas',
  },
  {
    icon: Clock,
    title: 'Availability',
    content: '24/7 Emergency Service',
    href: null,
    description: 'We\'re always here to help',
  },
]

export default function ContactPage() {
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
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="heading-1 text-white mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Have a plumbing problem? Need to schedule service? We're here to help 
              24 hours a day, 7 days a week.
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

      {/* Emergency Banner */}
      <section className="bg-red-600 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold">
              Plumbing Emergency? Don't wait — call us immediately at{' '}
              <a href="tel:4059968259" className="underline hover:text-red-100 transition-colors">
                (405) 996-8259
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <AnimatedSection>
              <h2 className="heading-3 text-gray-900 mb-2">
                Book a Service
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </AnimatedSection>
            
            {/* Contact Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="heading-3 text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Prefer to call? Reach us directly using the information below.
                </p>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-semibold">{item.content}</p>
                        )}
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-primary-50 rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Why Call Don's Plumbing?</h3>
                  <ul className="space-y-3">
                    {[
                      '13+ years of trusted service',
                      'Family owned & operated',
                      '24/7 emergency availability',
                      'Upfront, honest pricing',
                      'Licensed & insured technicians',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <PlaceholderImage 
                  src="/assets/images/services/dons-commercial2.jpg"
                  alt="Don's Plumbing service truck"
                  className="rounded-2xl shadow-lg overflow-hidden"
                  aspectRatio="video"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              We proudly provide plumbing services throughout the Oklahoma City 
              metropolitan area.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                'Oklahoma City',
                'Edmond',
                'Norman',
                'Moore',
                'Midwest City',
                'Del City',
                'Yukon',
                'Mustang',
                'Bethany',
                'The Village',
                'Nichols Hills',
                'Warr Acres',
              ].map((area) => (
                <div 
                  key={area}
                  className="bg-white rounded-lg px-4 py-3 text-center shadow-sm"
                >
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? Give us a call — we may still be able to help!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-4">
              Ready to Get Your Plumbing Fixed?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let plumbing problems disrupt your life. Contact us now for 
              fast, reliable service.
            </p>
            <a 
              href="tel:4059968259"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary-600 bg-white rounded-xl shadow-2xl hover:bg-gray-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 mr-3" />
              (405) 996-8259
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
