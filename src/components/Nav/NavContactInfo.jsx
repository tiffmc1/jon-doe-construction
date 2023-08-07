import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

export default function NavContactInfo({ handleInfoClick }) {
	return (
		<div className="contact-info">
			<div onClick={handleInfoClick} className="close-contact-info">
				<CloseIcon />
			</div>

			<div className="info">
				<PhoneIcon />
				<h3>phone number</h3>
				<p>+555-555-5555</p>
			</div>

			<div className="info">
				<EmailIcon />
				<h3>email address</h3>
				<p>contact@jondoe.com</p>
			</div>

			<div className="info">
				<LocationOnIcon />
				<h3>location</h3>
				<p>Houston, TX, United States, 77001</p>
			</div>

			<div className="info">
				<WatchLaterIcon />
				<h3>hours</h3>
				<p>M-F</p>
				<p>9:00 am - 5:00 pm</p>
			</div>

			<div className="share">
				<Link href="https://www.facebook.com/" target="_blank">
					<FacebookIcon />
				</Link>
				<Link
					href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
					target="_blank"
				>
					<TwitterIcon />
				</Link>
				<Link href="https://www.instagram.com/" target="_blank">
					<InstagramIcon />
				</Link>
				<Link href="https://www.linkedin.com/" target="_blank">
					<LinkedInIcon />
				</Link>
			</div>
		</div>
	);
}
