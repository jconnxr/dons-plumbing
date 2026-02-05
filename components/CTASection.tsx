'use client'

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'primary' | 'emergency'
}

export default function CTASection({ 
  title = "Ready to Get Started?",
  subtitle = "Our team is standing by to help with all your plumbing needs.",
  variant = 'primary'
}: CTASectionProps) {
  const bgClass = variant === 'emergency' 
    ? 'bg-gradient-to-br from-red-600 to-red-700' 
    : 'bg-gradient-to-br from-primary-600 to-primary-800'

  return (
    <section className={`${bgClass} section-padding relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:4059968259"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-700 bg-white rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (405) 996-8259
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Service
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
