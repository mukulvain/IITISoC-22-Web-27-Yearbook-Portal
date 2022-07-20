import axios from "axios";
import { useState } from "react";
import { Card, Container, FormControl, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/NavbarComponent";

const Search = () => {
    let delayTimer;

    const [search, setSearch] = useState('');
    const [usersList, setUsersList] = useState([]);

    const handleOnChange = (event) => {
        const value = event.target.value;
        setSearch(value);

        // to add delay to search.
        clearTimeout(delayTimer);
        if (value.length !== 0) {
            delayTimer = setTimeout(() => {
                axios.post(process.env.REACT_APP_API_URL + "user/findUsers", {
                    name: value,
                }).then((data) => {
                    setUsersList(data.data.data);
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
                <FormControl value={search} onChange={handleOnChange} />
                {/* handle overflow here */}
                <Container>
                    {usersList.map((element) => <UserCard key={element._id} data={element} />)}
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