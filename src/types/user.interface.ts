export interface IUser {
  id?: string;
  name: string;
  photo?: string;
  interests: UserInterests;
  email: string;
  bio: string;
  location: ILocation;
  status: string;
  userProfile?: IUserProfile;
  host?: IHost;
}

export interface ILocation {
  city: string;
  area: string;
  country: string;
}

export enum UserInterests {
  Sports,
  Gaming,
  Art,
  Travel,
  Fitness,
}
export interface IUserProfile {
  name: string;
  photo?: string;
  interests: UserInterests;
  email: string;
  bio: string;
  location: ILocation;
}
export interface IHost {
  id?: string;
  name: string;
  photo?: string;
  interests: UserInterests;
  email: string;
  phoneNumber: string;
  address: string;
  bio: string;
  status: string;
}
