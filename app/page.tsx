'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import ApproachSection from '@/components/ApproachSection'
import IndustriesSection from '@/components/IndustriesSection'
import PartnersSection from '@/components/PartnersSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ApproachSection />
      <IndustriesSection />
      <PartnersSection />
      <NewsSection />
      <Footer />
    </main>
  )
}