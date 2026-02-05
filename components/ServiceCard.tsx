'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Droplets, Flame, PipetteIcon, Video, Search } from 'lucide-react'

const iconMap = {
  Droplets,
  Flame,
  PipetteIcon,
  Video,
  Search,
}

type IconName = keyof typeof iconMap

interface ServiceCardProps {
  title: string
  description: string
  href: string
  iconName: IconName
  index?: number
}

export default function ServiceCard({ 
  title, 
  description, 
  href, 
  iconName,
  index = 0 
}: ServiceCardProps) {
  const Icon = iconMap[iconName]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-300 h-full"
        >
          <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-primary-600 font-semibold">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
