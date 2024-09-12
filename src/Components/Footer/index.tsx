import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
	background-color: black;
	color: white;
	text-align: left;
	padding: 2rem 1rem;
	border-top: 1px solid white;
	p {
		text-align: center;
	}
`;

const FooterContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: 0 auto;
`;

const FooterColumn = styled.div`
	flex: 1;
	min-width: 200px;
	margin: 1rem;
`;

const FooterLink = styled(Link)`
	color: white;
	text-decoration: none;
	display: block;
	margin-bottom: 0.5rem;
	transition: color 0.3s;

	&:hover {
		color: #f5a623; /* Uber's accent color */
	}
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterColumn>
					<h4>Company</h4>
					<FooterLink to="/about">About Us</FooterLink>
					<FooterLink to="/careers">Careers</FooterLink>
					<FooterLink to="/press">Press</FooterLink>
					<FooterLink to="/blog">Blog</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<h4>Support</h4>
					<FooterLink to="/help">Help Center</FooterLink>
					<FooterLink to="/contact">Contact</FooterLink>
					<FooterLink to="/terms">Terms of Service</FooterLink>
					<FooterLink to="/privacy">Privacy Policy</FooterLink>
				</FooterColumn>
			</FooterContent>
			<p>&copy; 2024 Easy Ride. All rights reserved.</p>
		</FooterContainer>
	);
};

export default Footer;
