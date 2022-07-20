import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import { Container, Image, Tabs, Tab, FormControl, Button, Form } from 'react-bootstrap';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Remarks from "./Remarks/Remarks";

const ProfilePage = () => {
    const user = useSelector((state) => state.user.value);
    const params = useParams();
    const [owner, setOwner] = useState({});
    const ref = useRef();

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "user/getUser", {
            googleId: params.ownerId,
        }).then((user) => {
            setOwner(user.data.user);
        }).catch((err) => {
            console.log(err);
        });
    }, [params.ownerId]);

    const handleOnChange = () => {

    }

    return (
        <>
            <NavbarComponent />
            <Container className={"d-flex"}>
                <Image roundedCircle src={owner.imageUrl} />
                <Container className="d-flex justify-content-center">
                    <h1>{owner.name}</h1>
                </Container>
            </Container>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Remarks">
                    <Remarks userId={user.googleId} ownerId={owner.googleId} />
                </Tab>
                <Tab eventKey="second" title="Memories">
                    Hii, I am 2nd tab content
                </Tab>
            </Tabs>

            {
                user.googleId !== owner.googleId ?
                    <Form>
                        <Container fluid className="d-flex">
                            <FormControl ref={ref} onChange={handleOnChange} required />
                            <Button type="submit">
                                Post
                            </Button>
                        </Container>
                    </Form>
                    :
                    <></>
            }
        </>
    );
}

export default ProfilePage;