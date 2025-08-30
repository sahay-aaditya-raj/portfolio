import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio — Aaditya Raj",
  description: "Aaditya Raj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}> 
        {/* Early script to set initial theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const s = localStorage.getItem('theme'); const t = (s==='light'||s==='dark') ? s : 'dark'; const c = document.documentElement.classList; t==='dark' ? (c.add('dark'), c.remove('light')) : (c.add('light'), c.remove('dark')); } catch {} })();`,
          }}
        />
        {/* Header is included per-page to allow anchor scrolling offset; layout wraps global bg */}
        <div className="relative min-h-dvh">
          {/* background visuals */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(40%_30%_at_80%_10%,rgba(167,139,250,0.2),transparent_60%),radial-gradient(60%_40%_at_10%_20%,rgba(34,197,94,0.15),transparent_60%)]" />
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)] animate-[shimmer_6s_linear_infinite]" />
            <div className="absolute inset-0 bg-[linear-gradient(#ffffff0f_1px,transparent_1px),linear-gradient(90deg,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
