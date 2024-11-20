import { CornerUpLeft, CornerUpRight, MoveDown, MoveUp, X } from "lucide-react"
import Image from "next/image"
import BlurFade from "./ui/blur-fade"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import avatar1 from "/public/avatar1.png"
import avatar2 from "/public/avatar2.png"
import image from "/public/image.png"
import image1 from "/public/image1.png"

const Apps = () => {
  return (
    <div className="py-16">
      <div className="space-y-16">
        <div className="w-full lg:w-max mx-auto">
          <BlurFade inView>
            <h2 className="gradient text-center">Essential app that protect your</h2>
          </BlurFade>
          <div className="flex items-center gap-4 lg:gap-8 flex-wrap">
            <BlurFade inView delay={0.1}>
              <span className="flex items-center gap-3">
                <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_222_8)">
                    <path
                      d="M2.2926 0.358316C2.82594 0.133316 3.3926 -0.00835088 3.9676 -1.75464e-05C15.6343 -1.75464e-05 27.3009 -1.75464e-05 38.9676 -1.75464e-05C39.5426 -0.00835088 40.1176 0.133316 40.6426 0.366649C37.8009 3.23332 34.9176 6.06665 32.0593 8.92498C29.6343 11.3333 27.2093 13.75 24.7926 16.1583C24.4926 16.4416 24.2176 16.7583 23.8926 17.0166C22.9343 17.8666 21.5176 18.1416 20.3009 17.7333C19.6926 17.55 19.1676 17.175 18.7176 16.7416C13.3593 11.4083 8.00094 6.07498 2.63427 0.741649C2.5176 0.616649 2.3926 0.499982 2.2926 0.358316Z"
                      fill="#B756FE"
                    />
                    <path
                      d="M0.500944 2.14996C4.82594 6.42496 9.13428 10.7166 13.4509 15C9.13428 19.2833 4.82594 23.575 0.500944 27.85C0.300944 27.3916 0.167611 26.9 0.134277 26.3916V3.6083C0.167611 3.09996 0.300944 2.6083 0.500944 2.14996Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M29.4843 15C33.8009 10.7166 38.1009 6.41663 42.4343 2.14996C42.6343 2.6083 42.7759 3.09996 42.8009 3.6083V26.4C42.7676 26.9 42.6343 27.4 42.4343 27.8583C38.1093 23.575 33.8009 19.2833 29.4843 15Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M5.27594 26.6417C8.5926 23.35 11.9009 20.0583 15.2176 16.7667C15.8593 17.4 16.4843 18.0417 17.1259 18.6667C18.0593 19.575 19.2843 20.175 20.5676 20.3583C22.3926 20.6333 24.3259 20.05 25.6759 18.7917C26.3759 18.1333 27.0343 17.4417 27.7176 16.7667C30.3759 19.4083 33.0343 22.05 35.6926 24.6917C37.3426 26.3417 39.0176 27.9667 40.6509 29.6333C40.1259 29.8667 39.5509 30.0083 38.9759 30C27.3093 30 15.6426 30 3.97594 30C3.3926 30.0083 2.82594 29.8667 2.2926 29.6333C3.25927 28.6167 4.28427 27.6417 5.27594 26.6417Z"
                      fill="#F6F6F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_8">
                      <rect width="42.6667" height="30" fill="white" transform="translate(0.134277)" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="gradient">Email,</h3>
              </span>
            </BlurFade>
            <BlurFade inView delay={0.15}>
              <span className="flex items-center gap-3">
                <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_222_37)">
                    <path
                      d="M10.4301 5.41219C11.069 5.42722 11.6478 4.85594 11.6328 4.217C11.6328 3.18718 11.6403 2.14985 11.6328 1.12003C11.6027 0.435993 10.9036 -0.120259 10.2271 0.0150455C9.67087 0.0977316 9.21986 0.623915 9.23489 1.1952C9.23489 2.20247 9.23489 3.20973 9.23489 4.20948C9.21234 4.85594 9.79114 5.42722 10.4301 5.41219Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M22.4572 5.41219C23.0961 5.42722 23.6674 4.85594 23.6599 4.217C23.6599 3.18718 23.6674 2.14985 23.6599 1.12003C23.6373 0.435993 22.9307 -0.120259 22.2542 0.0150455C21.698 0.105248 21.247 0.631432 21.262 1.1952C21.262 2.20247 21.262 3.20973 21.262 4.20948C21.2394 4.85594 21.8182 5.42722 22.4572 5.41219Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M32.0788 10.8243H0.808472C0.808472 14.7858 0.808472 19.0178 0.808472 23.0093V26.5873C0.808472 28.4665 2.33441 29.9925 4.21363 29.9925H7.61879C13.9405 29.9925 20.2698 29.9925 26.5915 29.9925C26.6516 29.9925 26.7118 29.9925 26.7794 29.9925H28.6812C30.5604 29.9925 32.0863 28.4665 32.0863 26.5873V23.0093H32.0788C32.0788 19.0178 32.0788 14.7933 32.0788 10.8243ZM22.0212 19.0178C21.9686 19.4462 21.6454 19.7619 21.2996 19.9799L19.5331 21.2503C19.7736 21.9945 20.0142 22.7311 20.2547 23.4753C20.4051 23.8662 20.3975 24.3322 20.142 24.678C19.7962 25.2042 19.0144 25.3545 18.5033 25.0012C17.8117 24.5126 17.1352 24.009 16.4437 23.5129C15.8122 23.9714 15.1883 24.4224 14.5569 24.881C14.3389 25.0463 14.0909 25.1816 13.8127 25.1967C13.3542 25.2343 12.8957 24.9862 12.6702 24.5878C12.4973 24.2871 12.4747 23.9188 12.5875 23.5956C12.8355 22.8213 13.0911 22.0471 13.3392 21.2728C12.6702 20.7767 11.9936 20.2956 11.3171 19.7995C10.8887 19.4913 10.7158 18.8825 10.9187 18.4014C11.0841 17.9579 11.5351 17.6497 12.0087 17.6422C12.8431 17.6347 13.6849 17.6422 14.5268 17.6422C14.7899 16.8454 15.038 16.0486 15.3011 15.2593C15.4665 14.7632 15.9926 14.4174 16.5113 14.4625C16.9774 14.4851 17.4133 14.8158 17.5637 15.2593C17.8268 16.0486 18.0823 16.8454 18.3379 17.6347C18.3379 17.6422 18.3454 17.6422 18.3454 17.6422C19.1948 17.6497 20.0518 17.6347 20.9012 17.6497C21.6003 17.6572 22.149 18.3488 22.0212 19.0178Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M26.7418 2.41291C26.1179 2.39036 25.4864 2.42795 24.8625 2.41291C24.855 3.10447 24.8851 3.80354 24.8475 4.4951C24.7348 5.67525 23.6448 6.64493 22.4646 6.62238C21.2845 6.65245 20.187 5.67525 20.0743 4.50261C20.0367 3.81106 20.0668 3.11199 20.0592 2.42043H12.843C12.8355 3.11199 12.8655 3.81106 12.828 4.50261C12.7152 5.68277 11.6253 6.65245 10.4451 6.6299C9.26495 6.65997 8.16748 5.69029 8.05472 4.51013C8.01714 3.81858 8.04721 3.1195 8.03969 2.42043C7.41579 2.42043 6.78437 2.42043 6.16046 2.42043H4.28123C2.34939 2.41291 0.800903 3.9614 0.800903 5.87069V8.1859C0.800903 8.66698 0.823454 9.14807 0.80842 9.62163H32.0788C32.0637 9.14807 32.0863 8.66698 32.0863 8.1859V5.87069C32.0863 3.9614 30.5378 2.4054 28.621 2.4054H26.7418V2.41291Z"
                      fill="#32CAFD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_37">
                      <rect width="31.2779" height="30" fill="white" transform="translate(0.800903)" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="gradient">Events,</h3>
              </span>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <span className="flex items-center gap-3">
                <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_222_25)">
                    <path
                      d="M5.83585 0.303783C6.36931 0.0444596 6.97687 -0.00740501 7.5622 4.22692e-06C11.0668 4.22692e-06 14.5788 4.22692e-06 18.0833 4.22692e-06C18.2908 -0.0148142 18.4908 0.0666874 18.6168 0.2371C19.5059 1.28921 20.3876 2.34873 21.2767 3.40084C25.5963 3.40084 29.9085 3.40084 34.2281 3.40084C34.6726 3.40084 35.1172 3.38603 35.5543 3.46753C36.1989 3.60089 36.7916 3.94172 37.2288 4.43814C37.7252 4.97901 37.9771 5.70512 38.0068 6.43863V23.065C37.9697 23.6429 37.7993 24.2134 37.4659 24.6876C36.9843 25.4137 36.1767 25.8879 35.3246 26.0064C35.3246 20.983 35.3246 15.9521 35.3246 10.9286C35.332 10.3285 35.3172 9.72092 35.1246 9.15041C34.6948 7.70561 33.4649 6.54236 32.0053 6.18672C31.3755 6.0163 30.7235 6.05335 30.0789 6.05335C26.0112 6.05335 21.9361 6.05335 17.8685 6.05335C17.209 5.26797 16.5496 4.49 15.8976 3.70462C15.6531 3.40825 15.4086 3.08966 15.0678 2.89702C14.7492 2.70438 14.3713 2.65251 14.0008 2.65251C10.7037 2.65251 7.40661 2.65251 4.1095 2.65251C4.25768 1.65226 4.90969 0.733519 5.83585 0.303783Z"
                      fill="#DF2DB1"
                    />
                    <path
                      d="M1.81262 4.28254C2.28681 4.04544 2.82028 3.96394 3.34633 3.96394C6.92499 3.96394 10.5111 3.96394 14.0897 3.96394C14.2824 3.94912 14.475 4.03804 14.5936 4.19363C15.4901 5.25315 16.3718 6.31267 17.2683 7.36478C21.8176 7.36478 26.3594 7.35737 30.9087 7.37219C32.0719 7.35737 33.2056 8.04643 33.702 9.09854C33.9983 9.68387 34.0354 10.3507 34.0206 10.9953C34.0206 16.2336 34.0206 21.4646 34.0206 26.7029C34.0132 27.1326 33.9761 27.5772 33.8205 27.9847C33.5167 28.8368 32.8055 29.5406 31.9386 29.8296C31.3903 30.0222 30.805 30.0074 30.2345 30.0074C21.4175 30.0074 12.6005 30.0074 3.78348 30.0074C3.17592 30.0148 2.54613 30.0148 1.97562 29.7703C0.871646 29.3332 0.115904 28.207 0.0788574 27.0289V6.98691C0.108494 5.8533 0.782735 4.76414 1.81262 4.28254Z"
                      fill="#F6F6F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_25">
                      <rect width="37.9353" height="30" fill="white" transform="translate(0.0788574)" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="gradient">Files,</h3>
              </span>
            </BlurFade>
            <BlurFade inView delay={0.25}>
              <span className="flex items-center gap-3">
                <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_222_31)">
                    <path
                      d="M2.55133 0H14.0767C14.0767 2.05078 14.0767 4.10742 14.0767 6.1582C14.0709 6.93164 14.4341 7.69336 15.0377 8.18555C15.5181 8.58984 16.1451 8.80078 16.772 8.79492C18.8052 8.79492 20.8326 8.79492 22.8658 8.79492C22.8658 14.9883 22.8658 21.1816 22.8658 27.3691C22.8716 28.2715 22.3736 29.1562 21.6002 29.6191C21.2486 29.8418 20.8443 29.9531 20.4341 30.0059H2.42242C1.96539 29.9355 1.51422 29.8008 1.13922 29.5254C0.441953 29.0391 0.00835943 28.207 0.0142188 27.3633C0.0142188 19.1602 0.0142188 10.957 0.0142188 2.75391C0.0142188 2.4375 0.0435157 2.12109 0.143125 1.82227C0.465391 0.791016 1.4732 0.0351562 2.55133 0ZM6.0025 12.3809C5.55719 12.457 5.2232 12.9199 5.29937 13.3652C5.35211 13.7871 5.74469 14.127 6.17242 14.1211C9.66461 14.1211 13.1627 14.1211 16.6607 14.1211C16.9361 14.1328 17.2173 14.0215 17.3931 13.8047C17.6041 13.5586 17.6627 13.1953 17.5279 12.9023C17.399 12.5859 17.065 12.3633 16.7252 12.3633C13.3091 12.3633 9.88727 12.3633 6.47125 12.3633C6.30719 12.3633 6.15484 12.3516 6.0025 12.3809ZM6.0025 15.8965C5.45758 15.9844 5.11773 16.6406 5.37555 17.1328C5.52203 17.4551 5.87359 17.6543 6.22516 17.6367C9.7232 17.6367 13.2154 17.6367 16.7134 17.6367C17.0767 17.6367 17.4283 17.3965 17.5396 17.0508C17.6978 16.6465 17.4869 16.1426 17.0884 15.9668C16.8658 15.8496 16.608 15.8848 16.3677 15.8789C13.0865 15.8789 9.80523 15.8789 6.52398 15.8789C6.3482 15.8789 6.17242 15.8672 6.0025 15.8965ZM6.0025 19.4121C5.55719 19.4883 5.2232 19.9512 5.29937 20.3965C5.35211 20.8184 5.74469 21.1582 6.17242 21.1523C9.57086 21.1523 12.9693 21.1523 16.3677 21.1523C16.6373 21.1523 16.9361 21.1816 17.1705 21.0234C17.5923 20.7832 17.7271 20.1738 17.44 19.7812C17.2701 19.5234 16.9595 19.3828 16.6548 19.3945C13.274 19.3945 9.89898 19.3945 6.51813 19.3945C6.3482 19.3945 6.17242 19.3828 6.0025 19.4121ZM6.0025 22.9277C5.55719 23.0039 5.2232 23.4668 5.29937 23.918C5.35211 24.3398 5.74469 24.6797 6.16656 24.6738C8.49273 24.6738 10.813 24.6738 13.1392 24.6738C13.4263 24.6855 13.7252 24.5566 13.8951 24.3223C14.1002 24.0586 14.1295 23.6719 13.9713 23.3789C13.8248 23.0977 13.5142 22.9102 13.1978 22.916C10.9537 22.916 8.70367 22.916 6.45953 22.916C6.30719 22.9102 6.15484 22.9043 6.0025 22.9277Z"
                      fill="#F6F6F7"
                    />
                    <path
                      d="M15.8346 0.521484C18.0084 2.68945 20.1764 4.86328 22.3502 7.03125C20.4693 7.03125 18.5943 7.03125 16.7135 7.03125C16.3502 7.03125 16.0045 6.79102 15.8873 6.44531C15.8229 6.27539 15.8346 6.09375 15.8346 5.91797C15.8346 4.11914 15.8346 2.32031 15.8346 0.521484Z"
                      fill="#41E88D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_31">
                      <rect width="22.8516" height="30" fill="white" transform="translate(0.0141602)" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="gradient">Documents</h3>
              </span>
            </BlurFade>
          </div>
        </div>

        <div className="space-y-10">
          <div className="border border-[#282D45] lg:p-16 p-4 gap-4 rounded-lg lg:gap-24 bg-[#0E1330] relative overflow-hidden flex items-center flex-col lg:flex-row">
            <div className="space-y-8">
              <div className="space-y-4">
                <BlurFade inView delay={0.1}>
                  <h5>End-to-end encrypted inbox and messages</h5>
                </BlurFade>
                <BlurFade inView delay={0.1}>
                  <p className="text-muted-foreground">
                    Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies
                    convallis.
                  </p>
                </BlurFade>
              </div>
              <BlurFade inView delay={0.1}>
                <Button className="" variant={"outline"}>
                  Learn more
                </Button>
              </BlurFade>
            </div>

            <BlurFade inView>
              <div className="border border-[#282D45] p-4 lg:p-11 rounded-md space-y-4">
                <BlurFade inView>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="text-[#8F9BB7] border border-[#282D45] rounded-md p-1 bg-[#151934]">
                        <X />
                      </div>

                      <Separator orientation="vertical" className="h-6 mx-3 bg-[#060B27]" />

                      <div className="text-[#8F9BB7] border border-[#282D45] rounded-md p-1 bg-[#151934]">
                        <MoveDown />
                      </div>
                      <div className="text-muted-foreground border border-[#282D45] rounded-md p-1 bg-[#151934]">
                        <MoveUp />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-[#8F9BB7] border border-[#282D45] rounded-md p-1 text-[#151934]">
                        <CornerUpLeft />
                      </div>
                      <div className="text-[#8F9BB7] border border-[#282D45] rounded-md p-1 bg-[#151934]">
                        <CornerUpLeft />
                      </div>
                      <div className="text-[#8F9BB7] border border-[#282D45] rounded-md p-1 bg-[#151934]">
                        <CornerUpRight />
                      </div>
                    </div>
                  </div>
                </BlurFade>
                <BlurFade inView delay={0.1}>
                  <h6>Invitation to present at Bsides</h6>
                </BlurFade>

                <BlurFade inView delay={0.1}>
                  <div className="p-4 space-y-3 border border-[#282D45] bg-[#151934] rounded-md">
                    <div className="flex justify-between">
                      <div className="flex items-stretch gap-2">
                        <Image className="lg:w-11 lg:h-11 w-8 h-8" src={avatar1} alt="avatar" />
                        <div className="flex justify-between flex-col ">
                          <div className="text-xs md:text-sm">R.Brynham</div>
                          <div className="text-xs text-muted-foreground">akinladeirede@gmail.com</div>
                        </div>
                      </div>

                      <span className="text-xs lg:text-sm text-muted-foreground">Feb 8, 24</span>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus.
                    </p>
                  </div>
                </BlurFade>
                <BlurFade inView>
                  <div className="p-4 space-y-3 border border-[#282D45] bg-[#151934] rounded-md">
                    <div className="flex justify-between">
                      <div className="flex items-stretch gap-2">
                        <Image src={avatar2} alt="avatar" className="lg:w-11 lg:h-11 w-8 h-8" />
                        <div className="flex justify-between flex-col ">
                          <div className="text-xs md:text-sm">Cooper Kristin</div>
                          <div className="text-xs text-muted-foreground">akinladeirede@gmail.com</div>
                        </div>
                      </div>

                      <span className="text-xs lg:text-sm text-muted-foreground">Feb 8, 24</span>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus.
                    </p>
                  </div>
                </BlurFade>
              </div>
            </BlurFade>

            <div className="absolute bg-[#7214FF]/60 w-64 h-56 top-44 left-0  blur-[200px]" />
            <div className="absolute bg-custom-sky/60 w-64 h-56 bottom-44 right-0 blur-[200px]" />
          </div>

          <div className="flex gap-9 flex-col lg:flex-row">
            <div className="lg:py-12 p-8 lg:px-14 space-y-9 bg-[#0E1330] rounded-md border border-[#282D45]">
              <div className="flex justify-center">
                <BlurFade inView>
                  <Image src={image} alt="Upload" className="w-9/12 lg:w-80" />
                </BlurFade>
              </div>
              <div className="space-y-4">
                <BlurFade inView>
                  <h5>Mobile applications</h5>
                </BlurFade>
                <BlurFade inView>
                  <p className="text-muted-foreground">
                    Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate
                    varius feugiat egestas congue
                  </p>
                </BlurFade>
              </div>
            </div>

            <div className="lg:px-14 p-8 pt-4 lg:pt-12 pb-0 space-y-8 bg-[#0E1330] border border-[#282D45] w-full rounded-md">
              <div className="space-y-4">
                <BlurFade inView>
                  <h5>Upload, share, and preview any file</h5>
                </BlurFade>
                <BlurFade inView>
                  <p className="text-muted-foreground">
                    Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus <br /> nulla ultricies
                    purus.
                  </p>
                </BlurFade>
              </div>

              <div className="w-max mx-auto">
                <BlurFade inView>
                  <Image src={image1} alt="Upload" className="w-[16rem] lg:w-[40rem]" />
                </BlurFade>
              </div>
            </div>
          </div>
        </div>

        <BlurFade inView>
          <div className="flex items-center gap-4 w-max mx-auto">
            <Button>Get Started</Button>
            <Button variant={"outline"}>Browse all feature</Button>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

export default Apps
