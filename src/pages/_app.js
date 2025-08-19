import "@/styles/globals.css";

import { Belleza, Poppins } from "next/font/google";


const belleza = Belleza({
  variable: "--font-belleza",
  weight: ['400'],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <main className={`${belleza.variable} ${poppins.variable}`}>
     {  getLayout(<Component {...pageProps} />)}
    </main>
  );
}
