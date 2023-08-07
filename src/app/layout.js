import "./globals.scss";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav/Nav";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Jon Doe Construction",
	description: "Full-stack project showcasing a construction company's website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
