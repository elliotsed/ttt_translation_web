import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import BootstrapClient from './components/BootstrapClient';

export const metadata = {
  title: "TTT English Mission - Experts in Translation, Transcription, and Subtitling",
  description: "Discover top-notch translation, transcription, and subtitling services tailored to your needs at TTT English Mission. Trust our expert team to deliver accurate and reliable results every time.",
};

export default function LocaleLayout({
  children,
  params: { locale }
}) {
  return (
    <html lang={locale}>
      <body className='custom-front'>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

