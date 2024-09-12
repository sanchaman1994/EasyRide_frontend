import { gql } from "@apollo/client";

export const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

export const PHONE_SIGN_IN = gql`
	mutation startPhoneVerification($phoneNumber: String!) {
		StartPhoneVerification(phoneNumber: $phoneNumber) {
			ok
			error
		}
	}
`;
