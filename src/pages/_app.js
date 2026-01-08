import "@/styles/globals.css";
import RouteLoader from "@/components/RouteLoader";
// import { Belleza, Poppins } from "next/font/google";
import { Fjalla_One } from "next/font/google";
<link rel="icon" href="/images/global/image-VM.png" />

// const belleza = Belleza({
//   variable: "--font-belleza",
//   weight: ["400"],
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    // <main className={`${belleza.variable} ${poppins.variable}`}>
    <main className={`${fjallaOne.variable}`}>
      {/* Global Route Loader */}
      <RouteLoader />

      {/* Render page with layout */}
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
