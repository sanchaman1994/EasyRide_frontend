import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import heroImage from "../../images/hero_image.jpg";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
	display: flex;
	height: 100vh;
	background-color: #f7f7f7;
`;

const LeftColumn = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;

const RightColumn = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: cyan;
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const Tagline = styled.p`
	font-size: 1.25rem;
	margin-bottom: 2rem;
	color: #555;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	padding: 0.75rem;
	font-size: 1rem;
	margin-bottom: 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
	max-width: 300px;
`;

const LoginButton = styled.button`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: #fff;
	background-color: #000;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #333;
	}
`;

export default function LoginPresenter() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.blur();
		}
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login with phone number
		console.log("Phone Number:", phoneNumber);
	};

	return (
		<Container>
			<Helmet>
				<title>Login - Easy Ride</title>
			</Helmet>
			<LeftColumn>
				<Title>Easy Ride</Title>
				<Tagline>Get there. Your day belongs to you.</Tagline>
				<Form onSubmit={handleSubmit}>
					<Input
						ref={inputRef}
						type="tel"
						placeholder="Enter your phone number"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<LoginButton type="submit">Verify</LoginButton>
				</Form>
			</LeftColumn>
			<RightColumn>
				<Image src={heroImage} alt="lady in the car using mobile phone" />
			</RightColumn>
		</Container>
	);
}
