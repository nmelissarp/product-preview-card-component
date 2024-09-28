import { Montserrat, Fraunces } from 'next/font/google';
import 'app/sass/globals.sass'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-montserrat',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-fraunces',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
