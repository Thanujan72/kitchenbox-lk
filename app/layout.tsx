import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Box LK | Veedu Samayal - Jaffna',
  description: 'Home-cooked food for students and working professionals in Jaffna. Order via WhatsApp!',
  icons: {
    icon: '/icon.png', // This will set your official logo as the browser tab icon
  }
};

// Add React.ReactNode type for children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}