import Image from "next/image"
import BlurFade from "./ui/blur-fade"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import avatar from "/public/avatar1.png"

const Testimonials = () => {
  return (
    <div className="py-16">
      <div className="space-y-16">
        <div className="text-center space-y-6">
          <BlurFade inView delay={0.1}>
            <h2 className="gradient">What out clients say</h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <sub className="text-muted-foreground">
              Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt{" "}
              <br className="hidden lg:block" /> facilisis. Pulvinar lacus ultricies turpis urna sapien.
            </sub>
          </BlurFade>
        </div>

        <Carousel
          opts={{
            align: "start"
          }}
          className="w-full"
        >
          <CarouselContent className="ml-2 md:ml-4 overflow-visible h-max pb-10 pt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 overflow-visible" key={index}>
                <BlurFade inView delay={0.1 * index}>
                  <div className="bg-[#0E1330] space-y-6 p-6 rounded-md relative border w-10/12 border-[#282D45] overflow-visible">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image src={avatar} alt="avatar image" width={40} height={40} />

                        <div className="flex flex-col">
                          <span>Cameron Williamson</span>
                          <span className="caption text-muted-foreground">Web Designer</span>
                        </div>
                      </div>
                    </div>

                    <p>
                      Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin
                      iaculis nisl et neque sed fermentum sollicitudin lectus.
                    </p>

                    <div className="w-[110%] rounded-md h-28 absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2">
                      <div className="relative w-full h-full overflow-hidden rounded-xl border border-[#282D45]">
                        <div className="w-20 h-28 absolute inset-y-0 -z-10 left-0 bg-custom-sky blur-3xl " />
                        <div className="w-20 h-28 absolute inset-y-0 -z-10 left-1/2 -translate-x-1/2 bg-custom-sky blur-2xl " />
                        <div className="w-20 h-28 absolute inset-y-0 -z-10 right-0 bg-[#C6FFE0] blur-3xl " />
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mx-auto w-max flex items-center gap-4 mt-14">
            <div>
              <CarouselPrevious />
            </div>
            <div>
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
