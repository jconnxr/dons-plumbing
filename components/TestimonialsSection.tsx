'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { Star } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

// Placeholder reviews data - easy to replace with real Google reviews later
const reviews = [
  {
    id: 1,
    name: 'Michael R.',
    rating: 5,
    text: "Don's Plumbing saved us during a midnight emergency. They arrived within 30 minutes and fixed our burst pipe quickly. Couldn't be happier with the service!",
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Sarah T.',
    rating: 5,
    text: "Best plumber in OKC! They installed our new water heater and the price was very fair. The technician was professional and cleaned up after the job.",
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'James W.',
    rating: 5,
    text: "Had a stubborn drain clog that other plumbers couldn't fix. Don's team used their camera inspection and found the real problem. Fixed it same day!",
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Patricia M.',
    rating: 4,
    text: "Very responsive and professional. They diagnosed our slab leak quickly and gave us options for repair. Would definitely recommend to neighbors.",
    date: '1 month ago',
  },
  {
    id: 5,
    name: 'Robert K.',
    rating: 5,
    text: "I've used Don's Plumbing for years. They're always honest, on time, and do quality work. The whole team is friendly and trustworthy.",
    date: '2 months ago',
  },
  {
    id: 6,
    name: 'Jennifer L.',
    rating: 5,
    text: "Called at 6am with no hot water. They had someone at my house by 8am and my water heater replaced by noon. Amazing service!",
    date: '3 weeks ago',
  },
  {
    id: 7,
    name: 'David H.',
    rating: 4,
    text: "Professional service from start to finish. They explained everything clearly and didn't try to upsell unnecessary repairs. Fair pricing too.",
    date: '1 month ago',
  },
  {
    id: 8,
    name: 'Linda S.',
    rating: 5,
    text: "Don's Plumbing replaced our entire sewer line with minimal disruption to our yard. The trenchless technology they used was impressive!",
    date: '2 months ago',
  },
  {
    id: 9,
    name: 'Christopher B.',
    rating: 5,
    text: "Finally found a plumber I can trust. No hidden fees, no surprises. They do what they say and stand behind their work. Highly recommend!",
    date: '1 week ago',
  },
  {
    id: 10,
    name: 'Amanda G.',
    rating: 5,
    text: "Great family-owned business! They treated my home with respect and solved my drainage issues that had been bothering me for months.",
    date: '3 weeks ago',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-xs font-medium text-gray-600">Google</span>
        </div>
      </div>
      
      <StarRating rating={review.rating} />
      
      <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-4">
        "{review.text}"
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews]
  
  // Calculate the width of one set of reviews
  const cardWidth = 380 + 24 // card width + gap
  const totalWidth = reviews.length * cardWidth

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 60, // Slow scroll - 60 seconds for one complete cycle
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls, totalWidth])

  // Handle manual drag
  const handleDragEnd = () => {
    // Resume animation after a short delay
    setTimeout(() => {
      if (!isPaused) {
        controls.start({
          x: -totalWidth,
          transition: {
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        })
      }
    }, 100)
  }

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom mb-12">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-2 text-gray-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what Oklahoma City residents 
            are saying about Don's Plumbing.
          </p>
        </AnimatedSection>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsPaused(false), 2000)
        }}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div 
          ref={containerRef}
          className="overflow-hidden py-4"
        >
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ width: 'fit-content' }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* View More Link */}
      <AnimatedSection className="text-center mt-8">
        <a 
          href="https://www.google.com/maps/place/Don's+Plumbing/@35.4115171,-97.6409675,23327m/data=!3m1!1e3!4m12!1m2!2m1!1splumbing+service+okc!3m8!1s0x87b2164f748b269d:0x883ffcad664c14bd!8m2!3d35.4558781!4d-97.467506!9m1!1b1!15sChRwbHVtYmluZyBzZXJ2aWNlIG9rY1oWIhRwbHVtYmluZyBzZXJ2aWNlIG9rY5IBB3BsdW1iZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjFaMDExZHkxblJSQULgAQD6AQQIABBA!16s%2Fg%2F1tf9tbbz?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          View All Google Reviews
        </a>
      </AnimatedSection>
    </section>
  )
}
