import Image from "next/image"
import BlurFade from "./ui/blur-fade"
import { Button } from "./ui/button"
import heroImage from "/public/hero-image.png"

const Hero = () => {
  return (
    <div className="relative py-[70px]">
      <div className="absolute bg-[#7214FF]/60 w-64 h-56 top-44 left-0  blur-[200px]"></div>
      <div className="absolute bg-custom-sky/60 w-64 h-56 bottom-44 right-0 blur-[200px]"></div>

      <div className="w-full lg:w-max mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="space-y-8">
            <div className="text-center space-y-8">
              <BlurFade inView delay={0.1}>
                <h1 className="gradient">A CRM dashboard for engineering teams</h1>
              </BlurFade>

              <BlurFade inView delay={0.25}>
                <sub className="text-muted-foreground">
                  Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor{" "}
                  <br className="hidden lg:block" /> at ut cursus mi. Aliquam sed amet vitae orci ac penatibus
                  consectetur.
                </sub>
              </BlurFade>
            </div>

            <div className="flex items-center justify-center gap-4">
              <BlurFade inView delay={0.3}>
                <Button>Get a demo</Button>
              </BlurFade>
              <BlurFade inView delay={0.3}>
                <Button variant="outline">View pricing</Button>
              </BlurFade>
            </div>
          </div>

          <div>
            <div>
              <BlurFade inView delay={0.4}>
                <Image src={heroImage} alt="sample dashboard" className="w-full lg:w-[720px]" />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
