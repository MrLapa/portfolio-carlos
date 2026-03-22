import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Carlos Garcia Portfolio",
  description:
    "AI-Driven Senior Software Engineer specializing in React, Next.js, and TypeScript. Leveraging AI-assisted development and agentic workflows to build scalable web applications.",
  keywords:
    "AI-Driven Development, Agentic Workflows, React, Next.js, TypeScript, Frontend Engineering, GitHub Copilot, Software Engineer",
  authors: [{ name: "Carlos Garcia" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
