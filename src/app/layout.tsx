import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import GradualBlur from "@/components/GradualBlur"

const hkGrotesk = Hanken_Grotesk({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-hk-grotesk',
  display: 'swap',
})


const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pranitpatil.tech'),
  title: {
    default: 'Pranit Patil - Software Engineer',
    template: '%s | Pranit Patil'
  },
  description: 'I build products that solve real problems. Available for new opportunities.',
  keywords: ['Pranit Patil', 'Software Engineer', 'Full Stack Developer', 'Portfolio', 'Web Development'],
  openGraph: {
    url: 'https://pranitpatil.tech',
    siteName: 'Pranit Patil Portfolio',
    title: 'Pranit Patil - Software Engineer',
    description: 'I build products that solve real problems. Available for new opportunities.',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Pranit Patil - Portfolio Open Graph Image'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranit Patil - Software Engineer',
    description: 'I build products that solve real problems. Available for new opportunities.',
    images: ['/open-graph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ" />
      </head>
      <body className={`${hkGrotesk.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
          <GradualBlur
            position="bottom"
            height="3rem"
            target="page"
            zIndex={1}
            strength={1}
            divCount={3}
          />
          <ScrollToTop />
        </ThemeProvider>
        <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id="2cYj0B5Uv0T4q70DhnoAc"
          data-enable-batching="true"
          async
        ></script>
      </body>
    </html>
  );
}
