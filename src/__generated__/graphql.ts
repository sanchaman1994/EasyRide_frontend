/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddPlaceResponse = {
  __typename?: 'AddPlaceResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String']['output'];
  driver: User;
  driverId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  messages?: Maybe<Array<Maybe<Message>>>;
  passenger: User;
  passengerId: Scalars['Int']['output'];
  ride: Ride;
  rideId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CompleteEmailVerificationResponse = {
  __typename?: 'CompleteEmailVerificationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CompletePhoneVerificationResponse = {
  __typename?: 'CompletePhoneVerificationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type DeletePlaceResponse = {
  __typename?: 'DeletePlaceResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPlaceResponse = {
  __typename?: 'EditPlaceResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EmailSignInResponse = {
  __typename?: 'EmailSignInResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type EmailSignUpResponse = {
  __typename?: 'EmailSignUpResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type FacebookConnectResponse = {
  __typename?: 'FacebookConnectResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type GetChatResponse = {
  __typename?: 'GetChatResponse';
  chat?: Maybe<Chat>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetMyPlacesResponse = {
  __typename?: 'GetMyPlacesResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  places?: Maybe<Array<Maybe<Place>>>;
};

export type GetMyProfileResponse = {
  __typename?: 'GetMyProfileResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type GetNearbyDriversResponse = {
  __typename?: 'GetNearbyDriversResponse';
  drivers?: Maybe<Array<Maybe<User>>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetNearbyRideResponse = {
  __typename?: 'GetNearbyRideResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  ride?: Maybe<Ride>;
};

export type GetRideResponse = {
  __typename?: 'GetRideResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  ride?: Maybe<Ride>;
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddPlace: AddPlaceResponse;
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  DeletePlace: DeletePlaceResponse;
  EditPlace: EditPlaceResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  ReportMovement: ReportMovementResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  RequestRide: RequestRideResponse;
  SendChatMessage: SendChatMessageResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
  ToggleDrivingMode: ToggleDrivingModeResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
  UpdateRideStatus: UpdateRideStatusResponse;
};


export type MutationAddPlaceArgs = {
  address: Scalars['String']['input'];
  isFav: Scalars['Boolean']['input'];
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationCompleteEmailVerificationArgs = {
  key: Scalars['String']['input'];
};


export type MutationCompletePhoneVerificationArgs = {
  key: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationDeletePlaceArgs = {
  placeId: Scalars['Int']['input'];
};


export type MutationEditPlaceArgs = {
  isFav?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  placeId: Scalars['Int']['input'];
};


export type MutationEmailSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationEmailSignUpArgs = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  profilePhoto: Scalars['String']['input'];
};


export type MutationFacebookConnectArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fbId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationReportMovementArgs = {
  lastLat?: InputMaybe<Scalars['Float']['input']>;
  lastLng?: InputMaybe<Scalars['Float']['input']>;
  lastOrientation?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationRequestRideArgs = {
  distance: Scalars['String']['input'];
  dropOffAddress: Scalars['String']['input'];
  dropOffLat: Scalars['Float']['input'];
  dropOffLng: Scalars['Float']['input'];
  duration: Scalars['String']['input'];
  pickUpAddress: Scalars['String']['input'];
  pickUpLat: Scalars['Float']['input'];
  pickUpLng: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
};


export type MutationSendChatMessageArgs = {
  chatId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationStartPhoneVerificationArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationUpdateMyProfileArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateRideStatusArgs = {
  rideId: Scalars['Int']['input'];
  status: StatusOptions;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFav: Scalars['Boolean']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type Query = {
  __typename?: 'Query';
  GetChat: GetChatResponse;
  GetMyPlaces: GetMyPlacesResponse;
  GetMyProfile: GetMyProfileResponse;
  GetNearbyDrivers: GetNearbyDriversResponse;
  GetNearbyRide: GetNearbyRideResponse;
  GetRide: GetRideResponse;
  places?: Maybe<Array<Maybe<Place>>>;
  user?: Maybe<User>;
};


export type QueryGetChatArgs = {
  chatId: Scalars['Int']['input'];
};


export type QueryGetRideArgs = {
  rideId: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type ReportMovementResponse = {
  __typename?: 'ReportMovementResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type RequestEmailVerificationResponse = {
  __typename?: 'RequestEmailVerificationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type RequestRideResponse = {
  __typename?: 'RequestRideResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  ride?: Maybe<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  distance: Scalars['String']['output'];
  driver: User;
  driverId?: Maybe<Scalars['Int']['output']>;
  dropOffAddress: Scalars['String']['output'];
  dropOffLat: Scalars['Float']['output'];
  dropOffLng: Scalars['Float']['output'];
  duration: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  passenger: User;
  passengerId: Scalars['Int']['output'];
  pickUpAddress: Scalars['String']['output'];
  pickUpLat: Scalars['Float']['output'];
  pickUpLng: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SendChatMessageResponse = {
  __typename?: 'SendChatMessageResponse';
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Message>;
  ok: Scalars['Boolean']['output'];
};

export type StartPhoneVerificationResponse = {
  __typename?: 'StartPhoneVerificationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export enum StatusOptions {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  Onroute = 'ONROUTE',
  Requesting = 'REQUESTING'
}

export type Subscription = {
  __typename?: 'Subscription';
  DriversSubscription?: Maybe<User>;
  MessageSubscription?: Maybe<Message>;
  NearbyRideSubscription?: Maybe<Ride>;
  RideStatusSubscription?: Maybe<Ride>;
};

export type ToggleDrivingModeResponse = {
  __typename?: 'ToggleDrivingModeResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateMyProfileResponse = {
  __typename?: 'UpdateMyProfileResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateRideStatusResponse = {
  __typename?: 'UpdateRideStatusResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  chat?: Maybe<Chat>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fbId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDriving: Scalars['Boolean']['output'];
  isRiding: Scalars['Boolean']['output'];
  isTaken: Scalars['Boolean']['output'];
  lastLat?: Maybe<Scalars['Float']['output']>;
  lastLng?: Maybe<Scalars['Float']['output']>;
  lastName: Scalars['String']['output'];
  lastOrientation?: Maybe<Scalars['Float']['output']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  places?: Maybe<Array<Maybe<Place>>>;
  profilePhoto?: Maybe<Scalars['String']['output']>;
  rideAsDriver?: Maybe<Array<Maybe<Ride>>>;
  rideAsPassenger?: Maybe<Array<Maybe<Ride>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  verifiedEmail: Scalars['Boolean']['output'];
  verifiedPhoneNumber: Scalars['Boolean']['output'];
};

export type Verification = {
  __typename?: 'Verification';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  payload: Scalars['String']['output'];
  target: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};
