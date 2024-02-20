import "./globals.css";


export const metadata = {
  title: "TTT English Mission - Experts in Translation, Transcription, and Subtitling",
  description: "Discover top-notch translation, transcription, and subtitling services tailored to your needs at TTT English Mission. Trust our expert team to deliver accurate and reliable results every time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="custom-font">{children}</body>
    </html>
  );
}
