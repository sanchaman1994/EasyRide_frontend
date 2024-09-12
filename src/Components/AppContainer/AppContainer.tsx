import React from "react";
import styled from "styled-components";
import AppPresenter from "./AppPresenter";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const MainContent = styled.main`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;

const AppContainer: React.FC = () => {
	return (
		<Container>
			<Helmet>
				{" "}
				<title>Home - Easy Ride</title>
			</Helmet>
			<MainContent>
				<AppPresenter />
			</MainContent>
		</Container>
	);
};

export default AppContainer;
