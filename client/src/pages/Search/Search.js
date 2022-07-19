import axios from "axios";
import { useRef, useState } from "react";
import { Card, Container, FormControl, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/NavbarComponent";

const Search = () => {
    const ref = useRef();
    let delayTimer;

    const [usersList, setUsersList] = useState([]);

    const handleOnChange = () => {
        const value = ref.current.value;

        // to add delay to search.
        clearTimeout(delayTimer);
        if (value.length !== 0) {
            delayTimer = setTimeout(() => {
                axios.post(process.env.REACT_APP_API_URL + "user/findUsers", {
                    name: value,
                }).then((data) => {
                    setUsersList(data.data.data);
                    console.log(data.data.data);
                }).catch((err) => {
                    console.log(err);
                });
            }, 500);
        } else {
            setUsersList([]);
        }
    }

    return (
        <>
            <NavbarComponent />
            <Container className="mt-2">
                <FormControl ref={ref} onChange={handleOnChange} />
                {/* handle overflow here */}
                <Container>
                    {usersList.map((element) => <UserCard key={element.googleId} data={element} />)}
                </Container>
            </Container>
        </>
    );
}

const UserCard = ({ data }) => {
    const navigator = useNavigate();

    const handleOnClick = () => {
        navigator(`/profile/${data.googleId}`);
    }

    return (
        <>
            <Card className="m-2" onClick={handleOnClick}>
                <Container className={'d-flex'}>
                    <Image roundedCircle src={data.imageUrl} />
                    <span>{data.name}</span>
                </Container>
            </Card>
        </>
    );
}

export default Search;