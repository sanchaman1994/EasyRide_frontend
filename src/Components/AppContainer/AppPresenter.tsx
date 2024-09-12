import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import heroImage from "../../images/hero_image.jpg";
import { toast } from "react-toastify";
import { PHONE_SIGN_IN } from "../../Routes/PhoneLogin/phoneQuires.Query";

const Container = styled.div`
	display: flex;
	height: 100vh;
	background-color: #f7f7f7;
	margin-top: -50px;
`;

const LeftColumn = styled.div`
	background-color: black;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	padding: 2rem;
`;

const RightColumn = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: black;
`;

const Image = styled.img`
	max-width: 100%;
	height: 100&;
	border-radius: 10px;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 1rem;
	color: white;
`;

const Tagline = styled.p`
	font-size: 1.25rem;
	margin-bottom: 2rem;
	color: white;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: left;
`;

const Input = styled.input`
	padding: 0.75rem;
	font-size: 1rem;
	margin-bottom: 1rem;
	border: 1px solid black;
	border-radius: 4px;
	width: 100%;
	max-width: 300px;
`;
const Select = styled.select`
	padding: 0.75rem;
	font-size: 1rem;
	margin-bottom: 1rem;
	/* border: 1px solid black; */
	border-radius: 4px;
	width: 100%;
	max-width: 80px;
`;

const LoginButton = styled.button`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: black;
	background-color: white;
	border: none;
	cursor: pointer;
	border-radius: 2px;
	width: 100px;

	&:hover {
		background-color: #333;
		color: white;
	}
`;
const countryCodes = [
	{ name: "Ind", code: "+91" },
	{ name: "Nep", code: "+97" },
	{ name: "Bhu", code: "+99" },
	{ name: "Sri", code: "+89" },
];

const FormRow = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;
export default function AppPresenter() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("+91");
	const [phoneSignIN] = useMutation(PHONE_SIGN_IN);

	interface Iprop{
		name:String;
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login with phone
		const phone = `${selectedCountry}${phoneNumber}`;
		const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(phone);
		if (isValid) {
			const { data } = await phoneSignIN({ variables: { phone } });
			console.log(data, "data frm server phoone");
		} else {
			toast.error("Pleae add valid Phone Number");
		}
	};
	const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// console.log("Country:", e.target.value);
		setSelectedCountry(e.target.value);
	};

	return (
		<Container>
			<LeftColumn>
				<Title>Easy Ride</Title>
				<Tagline>Get there. Your day belongs to you.</Tagline>
				<Form onSubmit={handleSubmit}>
					{/* input option of country  */}
					<FormRow>
						<Select
							name="country"
							id="country"
							value={selectedCountry}
							onChange={handleCountryChange}
						>
							{countryCodes.map((country) => (
								<option key={country.code} value={country.code}>
									{country.name}
								</option>
							))}
						</Select>
						<Input
							type="text"
							required
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							style={{ marginLeft: "1rem" }} // Add some space between the select and input
						/>
					</FormRow>
					<LoginButton type="submit">Verify</LoginButton>
				</Form>
			</LeftColumn>
			<RightColumn>
				<Image src={heroImage} alt="lady in the car using mobile phone" />
			</RightColumn>
		</Container>
	);
}
