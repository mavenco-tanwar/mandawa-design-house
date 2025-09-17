import "@/styles/globals.css";
import RouteLoader from "@/components/RouteLoader";
import { Belleza, Poppins } from "next/font/google";

const belleza = Belleza({
  variable: "--font-belleza",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={`${belleza.variable} ${poppins.variable}`}>
      {/* Global Route Loader */}
      <RouteLoader />

      {/* Render page with layout */}
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
