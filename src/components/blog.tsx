import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BlurFade from "./ui/blur-fade"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import blogImage from "/public/blog-image.png"

const Blog = () => {
  return (
    <div className="pt-16 pb-36">
      <div className="space-y-16">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <BlurFade inView delay={0.1}>
            <h2 className="gradient">Product in the news</h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Button>Browse all news</Button>
          </BlurFade>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row">
          {Array.from({ length: 3 }).map((_, index) => (
            <BlurFade key={index} inView delay={0.2 * index}>
              <div className="space-y-5 p-6 bg-[#0E1330] rounded-lg">
                <div>
                  <Image src={blogImage} alt="Blog Image" />
                </div>

                <div className="space-y-4">
                  <h6>Product Mail is taking on Gmail by betting on privacy</h6>
                  <p className="text-muted-foreground">
                    Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras
                    turpis faucibus elit urna.
                  </p>
                </div>

                <Separator />

                <div className="flex justify-between item-center">
                  <p className="text-muted-foreground text-sm">February 8, 2024</p>
                  <Link href={"#"} className="py-0 flex items-center gap-2">
                    Read More <MoveRight className="p-0" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
