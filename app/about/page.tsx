import Link from 'next/link'
import { Phone, Calendar, Award, Users, Clock, Shield, Heart, Wrench, CheckCircle, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | Don's Plumbing - Oklahoma City",
  description: "Learn about Don's Plumbing - Oklahoma City's trusted plumber for 13+ years. Family owned & operated, committed to quality service.",
}

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We treat every customer like family, with honest recommendations and transparent pricing.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'We take pride in doing the job right the first time, using quality materials and proven techniques.',
  },
  {
    icon: Clock,
    title: 'Reliable & Punctual',
    description: 'We respect your time. When we say we\'ll be there, we\'ll be there — ready to work.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection and peace of mind.',
  },
]

const milestones = [
  { year: '2013', event: 'Don\'s Plumbing founded in Oklahoma City' },
  { year: '2015', event: 'Expanded team to serve more customers' },
  { year: '2018', event: 'Added 24/7 emergency service' },
  { year: '2020', event: 'Invested in advanced video inspection technology' },
  { year: '2023', event: 'Celebrated 10+ years serving OKC' },
  { year: 'Today', event: 'Continuing to grow and serve our community' },
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
  'Bethany',
  'The Village',
  'Nichols Hills',
  'Warr Acres',
]

export default function AboutPage() {
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
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="heading-1 text-white mt-2 mb-6">
              Your Trusted Plumbing Partner for Over 13 Years
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Family owned and operated, Don's Plumbing has been providing reliable, 
              honest plumbing services to Oklahoma City and surrounding areas since 2013.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="right">
              <PlaceholderImage 
                src="/assets/images/about/Dons-blurry-background.jpg"
                alt="Don's Plumbing founder"
                className="rounded-2xl shadow-2xl overflow-hidden"
                aspectRatio="video"
                priority
              />
            </AnimatedSection>
            
            <AnimatedSection>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="heading-2 text-gray-900 mt-2 mb-6">
                Built on Hard Work, Trust, and Family Values
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Don's Plumbing started with a simple belief: every customer deserves 
                honest, quality plumbing service at a fair price. What began as a 
                one-man operation has grown into a trusted team serving thousands of 
                homes and businesses across Oklahoma City.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a family-owned business, we understand the importance of protecting 
                your home and providing peace of mind. That's why we treat every job 
                — big or small — with the same level of care and attention to detail.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Over 13 years later, our commitment to excellence remains unchanged. 
                We've invested in the latest equipment and training to serve you 
                better, but our core values stay the same: honesty, quality, and 
                putting the customer first.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary-600 mb-1">13+</div>
                  <div className="text-gray-600 text-sm">Years in Business</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Emergency Service</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="heading-2 text-gray-900 mt-2 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              Our values guide everything we do, from how we treat customers to the 
              quality of work we deliver.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="heading-2 text-gray-900 mt-2 mb-6">
                Experienced Professionals You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team of licensed plumbers brings decades of combined experience 
                to every job. Each technician is background-checked, drug-tested, 
                and committed to delivering the best possible service.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Licensed and certified plumbers',
                  'Background-checked and drug-tested',
                  'Ongoing training on latest techniques',
                  'Uniformed and professional appearance',
                  'Respectful of your home and property',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="tel:4059968259"
                className="btn-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Our Team
              </a>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
              <PlaceholderImage 
                src="/assets/images/services/dons-new-construction.jpg"
                alt="Don's Plumbing team at work"
                className="rounded-2xl shadow-2xl overflow-hidden"
                aspectRatio="video"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="heading-2 text-gray-900 mt-2 mb-4">
              Milestones Along the Way
            </h2>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-bold text-primary-600">{milestone.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full" />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary-200" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Service Area</span>
              <h2 className="heading-2 text-gray-900 mt-2 mb-6">
                Proudly Serving Oklahoma City & Surrounding Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're proud to call Oklahoma City home. As a local business, we're 
                committed to serving our neighbors throughout the OKC metro area.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600">
                Don't see your area? Give us a call — we may still be able to help!
              </p>
            </AnimatedSection>
            
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

      {/* CTA Section */}
      <CTASection 
        title="Ready to Experience the Difference?"
        subtitle="Contact Don's Plumbing today and see why we're Oklahoma City's trusted plumber."
      />
    </>
  )
}
