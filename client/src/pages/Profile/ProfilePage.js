import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import NavbarComponent from "../../components/NavbarComponent";

const ProfilePage = () => {
    const user = useSelector((state) => state.user.value);
    const params = useParams();
    const ownerId = params.profileId;
    const isOwner = user.googleId === ownerId;

    return (<>
        <NavbarComponent />
    </>);
}

export default ProfilePage;