import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileName() {
    const profile = useContext(ProfileContext);
    return <p>Name: {profile}</p>
}