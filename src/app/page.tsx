import Apps from "@/components/apps"
import Features from "@/components/features"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import MoreFeatures from "@/components/more-features"
import Testimonials from "@/components/testimonials"
import Community from "@/components/community"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

const Page = () => {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <Features />
      <Apps />
      <MoreFeatures />
      <Testimonials />
      <Community />
      <Blog />
      <Footer />
    </div>
  )
}

export default Page
