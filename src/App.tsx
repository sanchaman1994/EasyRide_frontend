import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Components/Nav";
import Footer from "./Components/Footer";
import AppContainer from "./Components/AppContainer";
import LoginPresenter from "./Routes/Login";
import RidePresenter from "./Routes/Ride";
import { HelmetProvider } from "react-helmet-async";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./thems";

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Content = styled.div`
	width: 90%;
	margin: 0 auto;
`;

const App: React.FC = () => {
	const isLoggedIn = false; // Replace with actual login logic

	return (
		<>
			<HelmetProvider>
				<ThemeProvider theme={theme}>
					<Router>
						<Navigation isLoggedIn={isLoggedIn} />
						<Container>
							<Content>
								<Routes>
									<Route path="/" element={<AppContainer />} />
									<Route path="/login" element={<LoginPresenter />} />
									<Route path="/ride" element={<RidePresenter />} />
									{isLoggedIn ? (
										<>
											<Route
												path="/find-address"
												element={<div>Find Address</div>}
											/>
											<Route
												path="/edit-account"
												element={<div>Edit Account</div>}
											/>
											<Route path="/add-place" element={<div>Add Place</div>} />
											<Route path="/places" element={<div>Places</div>} />
										</>
									) : (
										<Route path="*" element={<Navigate to="/login" />} />
									)}
								</Routes>
								<Footer />
							</Content>
						</Container>
					</Router>
				</ThemeProvider>
			</HelmetProvider>

			<ToastContainer draggable={true} position="bottom-center" />
		</>
	);
};

export default App;
