import { UserRole } from "../lib/auth-utils";
export interface IUser {
  id?: string;
  name: string;
  role?: UserRole;
  interests: UserInterests;
  profilePhoto?: string;
  email: string;
  bio: string;
  location: ILocation;
  status: string;
  userProfile?: IUserProfile;
  host?: IHost;
  isDeleted: boolean;
}

export interface ILocation {
  city: string;
  area: string;
  country: string;
}

export enum UserInterests {
  Sports = "Sports",
  Gaming = "Gaming",
  Art = "Art",
  Travel = "Travel",
  Fitness = "Fitness",
}
export interface IUserProfile {
  id: string;
  name: string;
  interests: UserInterests;
  email: string;
  bio: string;
  location: ILocation;
}
export interface IHost {
  id?: string;
  name: string;
  profilePhoto?: string;
  averageRating?: number;
  interests: UserInterests;
  email: string;
  phoneNumber: string;
  address: string;
  bio: string;
  status: string;
}
