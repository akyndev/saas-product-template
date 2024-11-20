// "use client"
// import hljs from "highlight.js"
// import javascript from "highlight.js/lib/languages/javascript"
// import { useEffect } from "react"

import Image from "next/image"
import BlurFade from "./ui/blur-fade"
import { Button } from "./ui/button"
import productImage from "/public/product-mail.png"

// Then register the languages you need

const MoreFeatures = () => {
  // useEffect(() => {
  //     hljs.registerLanguage("javascript", javascript)
  // })

  // const highlightedCode = hljs.highlight(
  //   ` const salt = srp.generateSalt();
  //     const masterSecret = await createKeyFromSecret(password, salt);

  //     const verifierPrivateKey = await createSRPKey(password, salt);
  //     const verifier = srp.deriveVerifier(verifierPrivateKey);
  //     `,
  //   { language: "javascript" }
  // ).value

  return (
    <div className="py-16">
      <div className="lg:px-14 px-4 pt-4 lg:py-24 space-y-24 bg-[#0E1330]">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="space-y-10">
            <div>
              <BlurFade inView>
                <h3 className="gradient">
                  Transparent, audited,
                  <br className="hidden lg:block" /> & open source
                </h3>
              </BlurFade>
              <BlurFade inView>
                <sub className="text-muted-foreground">
                  Torem ipsum dolor sit amet consectetur. Nulla quisque <br className="hidden lg:block" />
                  scelerisque eget quis. Eu amet amet eu interdum.
                </sub>
              </BlurFade>
            </div>
            <BlurFade inView>
              <Button variant={"outline"}>Browse all feature</Button>
            </BlurFade>
          </div>
          <div className="border border-[#282D48] h-80 w-full lg:w-[45%] rounded-lg relative">
            <div className="border border-[#282D48] rounded-lg w-full  lg:w-10/12 p-4 lg:p-6 -top-16 -left-0 absolute backdrop-blur-3xl">
              <BlurFade inView>
                <div className="bg-[#060B27] text-xs p-4 rounded-md caption">
                  const salt = srp.generateSalt(); <br />
                  const masterSecret = await createKeyFromSecret(password, salt);
                  <br />
                  <br />
                  const verifierPrivateKey = await createSRPKey(password, salt);
                  <br />
                  const verifier = srp.deriveVerifier(verifierPrivateKey);
                </div>
              </BlurFade>
            </div>
            <div className="border border-[#282D48] rounded-lg w-full  lg:w-10/12 p-4 lg:p-6 absolute -bottom-16 right-0 backdrop-blur-3xl">
              <BlurFade inView>
                <div className="bg-[#060B27] text-xs p-4 rounded-md caption text-muted-foreground">
                  / recoverySigningPublicKey is the public key component of the keypair used <br />
                  / to sign SSS shards. Upon share re-combination, spliterati <br /> verifies attached <br /> /
                  signatures of each shard to confirm that the shard is correct.
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-6 flex-col lg:flex-row">
          <div className="bg-[#060B27] p-8 border space-y-8 pb-0 border-[#282d45] rounded-md">
            <div className="space-y-2">
              <BlurFade inView>
                <h6>Product mail</h6>
              </BlurFade>
              <BlurFade inView>
                <sub className="text-muted-foreground">
                  Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                </sub>
              </BlurFade>
            </div>
            <div>
              <BlurFade inView>
                <Image src={productImage} alt="product mail" />
              </BlurFade>
            </div>
          </div>
          <div className="bg-[#060B27] p-8 border space-y-8 pb-0 border-[#282d45] rounded-md">
            <div className="space-y-2">
              <BlurFade inView>
                <h6>Product ui</h6>
              </BlurFade>
              <BlurFade inView>
                <sub className="text-muted-foreground">
                  Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                </sub>
              </BlurFade>
            </div>
            <div>
              <BlurFade inView>
                <Image src={productImage} alt="product mail" />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreFeatures
