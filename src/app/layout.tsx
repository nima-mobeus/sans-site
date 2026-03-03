import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const agentName = process.env.NEXT_PUBLIC_AGENT_NAME || 'AI Assistant';
const widgetHost = process.env.NEXT_PUBLIC_WIDGET_HOST || 'https://app.mobeus.ai';
const widgetApiKey = process.env.NEXT_PUBLIC_WIDGET_API_KEY || '';
const widgetPosition = process.env.NEXT_PUBLIC_WIDGET_POSITION || 'bottom-right';

export const metadata: Metadata = {
  title: agentName,
  description: `Talk to ${agentName} - powered by Mobeus`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {widgetApiKey && (
          <Script
            src={`${widgetHost}/embed.js`}
            data-api-key={widgetApiKey}
            data-position={widgetPosition}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
