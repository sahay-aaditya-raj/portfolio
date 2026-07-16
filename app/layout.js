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
  description: "Aaditya Raj — Software Engineer | Software Engineering, IoT, ML & Cybersecurity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* Early theme script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const s = localStorage.getItem('theme'); const t = (s==='light'||s==='dark') ? s : 'dark'; const c = document.documentElement.classList; t==='dark' ? (c.add('dark'), c.remove('light')) : (c.add('light'), c.remove('dark')); } catch {} })();`,
          }}
        />
        <div className="relative min-h-dvh">
          {/* Minimal background: just a subtle grid pattern */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}