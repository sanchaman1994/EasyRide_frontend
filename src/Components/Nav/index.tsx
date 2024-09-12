import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	background-color: #000; /* Dark background */
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;

	a {
		color: white; /* Ensure the link inherits the color */
		text-decoration: none;
	}
`;

const NavLinks = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	gap: 2rem;
`;

const NavLink = styled.li`
	color: #fff;
	font-size: 1rem;
	font-weight: 500;

	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.3s;

		&:hover {
			color: #f5a623; /* Uber's accent color */
		}
	}
`;

interface NavProps {
	isLoggedIn: boolean;
}

const Navigation: React.FC<NavProps> = ({ isLoggedIn }) => {
	return (
		<Nav>
			<Logo>
				<Link to="/">Easy Ride</Link>
			</Logo>
			<NavLinks>
				<NavLink>
					<Link to="/ride">Ride</Link>
				</NavLink>
				<NavLink>
					<Link to="/about">About Us</Link>
				</NavLink>
				{isLoggedIn ? (
					<>
						<NavLink>
							<Link to="/find-address">Find Address</Link>
						</NavLink>
						<NavLink>
							<Link to="/edit-account">Edit Account</Link>
						</NavLink>
						<NavLink>
							<Link to="/add-place">Add Place</Link>
						</NavLink>
						<NavLink>
							<Link to="/places">Places</Link>
						</NavLink>
					</>
				) : (
					<>
						<NavLink>
							<Link to="/login">Login</Link>
						</NavLink>
						<NavLink>
							<Link to="/signup">Sign Up</Link>
						</NavLink>
					</>
				)}
			</NavLinks>
		</Nav>
	);
};

export default Navigation;
