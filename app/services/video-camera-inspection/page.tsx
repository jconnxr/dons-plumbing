import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight, Video } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Video Camera Inspection | Don's Plumbing - Oklahoma City",
  description: "Professional video camera pipe inspection in Oklahoma City. See inside your pipes without digging. 24/7 emergency service. Call Don's Plumbing at 405-996-8259.",
}

const benefits = [
  'See inside your pipes in real-time',
  'Accurate problem diagnosis',
  'No destructive excavation needed',
  'Locate blockages precisely',
  'Find root intrusion',
  'Pre-purchase home inspections',
  'Verify repair completion',
  'Digital recording available',
]

const useCases = [
  'Recurring drain clogs you can\'t clear',
  'Buying or selling a home',
  'Unexplained sewage odors',
  'Planning a major renovation',
  'After sewer line repair',
  'Preventive maintenance',
]

const relatedServices = [
  { name: 'Drain Cleaning', href: '/services/drain-cleaning' },
  { name: 'Sewer Line Replacement', href: '/services/sewer-line-replacement' },
  { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
]

export default function VideoCameraInspectionPage() {
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
                <Video className="w-4 h-4" />
                Professional Plumbing Service
              </div>
              <h1 className="heading-1 text-white mb-6">
                Video Camera Inspection
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                See exactly what's happening inside your pipes with our state-of-the-art 
                video camera technology. Accurate diagnosis without destructive guesswork.
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
                src="/assets/images/services/dons-new-construction.jpg"
                alt="Video camera pipe inspection"
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
                  Advanced Pipe Inspection Technology
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  When you have a plumbing problem that's difficult to diagnose, our video 
                  camera inspection service provides the answers. We insert a high-definition 
                  waterproof camera into your pipes, allowing us to see blockages, cracks, 
                  root intrusion, and other issues in real-time.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This technology eliminates guesswork and prevents unnecessary digging or 
                  repairs. By seeing exactly what's wrong and where, we can recommend the 
                  most effective and economical solution for your specific situation.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Benefits of Video Camera Inspection:
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
                  src="/assets/images/services/dons-commercial2.jpg"
                  alt="Video inspection in progress"
                  className="rounded-2xl shadow-lg overflow-hidden mb-8"
                  aspectRatio="video"
                />
              </AnimatedSection>

              {/* When to Consider */}
              <AnimatedSection>
                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      When to Consider a Video Inspection
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Video camera inspection is valuable in many situations:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-500 font-bold">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Access Point</h4>
                      <p className="text-gray-600">We locate the best access point for the camera, usually a cleanout or drain opening.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Camera Insertion</h4>
                      <p className="text-gray-600">Our flexible, waterproof camera is guided through your pipes while transmitting video.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-Time Viewing</h4>
                      <p className="text-gray-600">You can watch the inspection live as we identify any issues in your plumbing system.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Diagnosis & Recommendation</h4>
                      <p className="text-gray-600">We explain what we found and recommend the best course of action for repairs.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* CTA Card */}
                <div className="bg-primary-600 rounded-2xl p-6 text-white mb-8">
                  <h3 className="text-xl font-bold mb-4">Schedule an Inspection</h3>
                  <p className="text-primary-100 mb-6">
                    Stop guessing about your plumbing problems. Let us show you exactly 
                    what's happening in your pipes.
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
        title="Need a Pipe Inspection?"
        subtitle="Contact Don's Plumbing today for professional video camera inspection services."
      />
    </>
  )
}
