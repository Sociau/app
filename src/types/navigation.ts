import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    HomePage: undefined,
    LoginPage: undefined,
    FirstPage: undefined,
    AboutUsPage: undefined,
    HelpPage: undefined,
    ContactPage: undefined,
    ForgetPasswordPage: undefined,
    CreateAccountPage: undefined,
    ProfilePage: undefined;
    NewPetPage: undefined;
    PetPage: { petId: number };
    PostsPage: undefined;
    NewPostPage: undefined;
};

export type HomeNavigationProp = StackNavigationProp<RootStackParamList, "HomePage">;
export type LoginNavigationProp = StackNavigationProp<RootStackParamList, "LoginPage">;
export type FirstPageNavigationProp = StackNavigationProp<RootStackParamList, "FirstPage">;
export type AboutUsNavigationProp = StackNavigationProp<RootStackParamList, "AboutUsPage">;
export type HelpNavigationProp = StackNavigationProp<RootStackParamList, "HelpPage">;
export type ContactNavigationProp = StackNavigationProp<RootStackParamList, "ContactPage">;
export type ForgetPasswordNavigationProp = StackNavigationProp<RootStackParamList, "ForgetPasswordPage">;
export type CreateAccountNavigationProp = StackNavigationProp<RootStackParamList, "CreateAccountPage">;
export type ProfileNavigationProp = StackNavigationProp<RootStackParamList, "ProfilePage">;
export type NewPetNavigationProp = StackNavigationProp<RootStackParamList, "NewPetPage">;
export type PetNavigationProp = StackNavigationProp<RootStackParamList, "PetPage">;
export type PostsNavigationProp = StackNavigationProp<RootStackParamList, "PostsPage">;
export type NewPostNavigationProp = StackNavigationProp<RootStackParamList, "NewPostPage">;