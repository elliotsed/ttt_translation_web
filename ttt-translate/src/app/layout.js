import 'bootstrap/dist/css/bootstrap.min.css';
import "./[locale]/globals.css";
import BootstrapClient from './[locale]/components/BootstrapClient';

export const metadata = {
    title: "TTT English Mission - Experts in Translation, Transcription, and Subtitling",
    description: "Discover top-notch translation, transcription, and subtitling services tailored to your needs at TTT English Mission. Trust our expert team to deliver accurate and reliable results every time.",
};

export default function LocaleLayout({
    children
}) {
    return (
        <html lang="en">
            <body className='custom-front'>
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}

