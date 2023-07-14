import "./globals.css";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Conference",
    description: "This is a demo site for conference listing",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <ApolloWrapper>{children}</ApolloWrapper>
            </body>
        </html>
    );
}
