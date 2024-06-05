import { Inter } from "next/font/google";
import "./globals.css";
import AppContextProvider from "@/context/useContext";
import Cloud from "@/components/Cloud/Cloud";
import { Clouds } from "@/components/Clouds/Clouds";
import Image from "next/image";
import logo from "../../public/soñe-que-volaba.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SQV Quiz",
  description: "El juego de preguntas y respuestas sobre Soñé que volaba",
  visualViewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body
          className={inter.className}
          style={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#016cb2",
            padding: "1rem",
            position: "relative",
          }}
        >
          <Image src={logo} alt="Logo de Olga" style={{ zIndex: 50 }} />
          {children}
          {Clouds.map((cloud) => (
            <Cloud key={cloud.id} style={cloud.styles} />
          ))}
        </body>
      </AppContextProvider>
    </html>
  );
}
