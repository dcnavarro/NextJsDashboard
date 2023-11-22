import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>
        This is Layout
        {children}
        <footer className='py-10 flex justify-center items-center'>Made with love by Vercel</footer>
    </body>
    </html>
  );
}
