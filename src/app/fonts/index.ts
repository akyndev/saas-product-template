import localFont from "next/font/local"
import {Inter} from "next/font/google"

export const satoshi = localFont({
    src: [
        {
            path: "./Satoshi-Bold.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./Satoshi-Light.woff",
            weight: "300",
            style: "normal"
        },
        {
            path: "./Satoshi-Medium.woff",
            weight: "500",
            style: "normal"
        },
        {
            path: "./Satoshi-Regular.woff",
            weight: "400",
            style: "normal"
        },
    ],
    variable: "--font-satoshi"
})

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400"]
})