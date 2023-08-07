"use client";
import { useState } from "react";
import Image from "next/image";
// import styles from "./page.module.scss";
import Link from "next/link";
import "./globals.scss";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
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
					<Link className="a" href="/">
						home
					</Link>
					<Link className="a" href="/about">
						about
					</Link>
					<Link className="a" href="/services">
						services
					</Link>
					<Link className="a" href="/projects">
						projects
					</Link>
					<Link className="a" href="/contact">
						contact
					</Link>
				</nav>

				<div className="icons">
					<div className="menu-btn">
						<DensityMediumRoundedIcon fontSize="large" />
					</div>
					<div className="info-btn">
						<button onClick={handleInfoClick}>
							<InfoOutlinedIcon fontSize="large" />
						</button>
					</div>
				</div>
			</header>

			<div className="contact-info">
				{contactInfo ? (
					<>
						<div className="close-contact-info">
							<CloseIcon fontSize="large" />
						</div>

						<div className="info">
							<PhoneIcon fontSize="large" />
							<h3>phone number</h3>
							<p>+555-555-5555</p>
						</div>

						<div className="info">
							<EmailIcon fontSize="large" />
							<h3>email address</h3>
							<p>contact@jondoe.com</p>
						</div>

						<div className="info">
							<LocationOnIcon fontSize="large" />
							<h3>location</h3>
							<p>Houston, TX, United States, 77001</p>
						</div>

						<div className="info">
							<WatchLaterIcon fontSize="large" />
							<h3>hours</h3>
							<p>M-F</p>
							<p>9:00 am - 5:00 pm</p>
						</div>

						<div className="share">
							<Link
								className="social"
								href="https://www.facebook.com/"
								target="_blank"
							>
								<FacebookIcon fontSize="large" />
							</Link>
							<Link
								className="social"
								href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
								target="_blank"
							>
								<TwitterIcon fontSize="large" />
							</Link>
							<Link
								className="social"
								href="https://www.instagram.com/"
								target="_blank"
							>
								<InstagramIcon fontSize="large" />
							</Link>
							<Link
								className="social"
								href="https://www.linkedin.com/"
								target="_blank"
							>
								<LinkedInIcon fontSize="large" />
							</Link>
						</div>
					</>
				) : null}
			</div>
		</>
	);
}
