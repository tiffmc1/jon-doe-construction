"use client";
import { useState } from "react";
import Link from "next/link";
import "../../app/globals.scss";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import Info from "@mui/icons-material/Info";
import NavContactInfo from "./NavContactInfo";

export default function Nav() {
	const [contactInfo, setContactInfo] = useState(false);

	const handleInfoClick = () => {
		contactInfo ? setContactInfo(false) : setContactInfo(true);
	};

	return (
		<>
			<header className="header">
				<Link href="/" className="logo">
					<span>jon doe</span>
					<br />
					construction
				</Link>

				<nav className="navbar">
					<Link className="nav-link" href="/">
						Home
					</Link>
					<Link className="nav-link" href="/about">
						About
					</Link>
					<Link className="nav-link" href="/services">
						Services
					</Link>
					<Link className="nav-link" href="/projects">
						Projects
					</Link>
					<Link className="nav-link" href="/contact">
						Contact
					</Link>
				</nav>

				<div className="icons">
					<i className="menu-btn">
						<DensityMediumRoundedIcon />
					</i>
					<i className="info-btn">
						<button onClick={handleInfoClick}>
							<Info />
						</button>
					</i>
				</div>
			</header>

			<div>
				{contactInfo ? (
					<NavContactInfo handleInfoClick={handleInfoClick} />
				) : null}
			</div>
		</>
	);
}
