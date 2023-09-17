import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import Navber from "@/components/shared/Navber/Navber";
import MainNavber from "@/components/shared/Navber/MainNavber";
import TextScrolling from "@/components/shared/InfiniteScrolling/TextScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
        <TextScrolling />
        <MainNavber />
        {children}
      </body>
    </html>
    // </Provider>
  );
}
