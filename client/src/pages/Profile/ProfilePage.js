import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import { Container, Image, Tabs, Tab, FormControl, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import Remarks from "./Remarks/Remarks";

const ProfilePage = () => {
    const [owner, setOwner] = useState({});
    const [remark, setRemark] = useState('');

    const user = useSelector((state) => state.user.value);
    const params = useParams();

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "user/getUser", {
            googleId: params.ownerId,
        }).then((user) => {
            setOwner(user.data.user);
        }).catch((err) => {
            console.log(err);
        });
    }, [params.ownerId]);

    const handleOnChange = (event) => {
        const value = event.target.value;
        setRemark(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post(process.env.REACT_APP_API_URL + "remarks/postRemark", {
            userId: user.googleId,
            ownerId: owner.googleId,
            content: remark,
        }).then(() => {
            setRemark('');
        }).catch((err) => {
            console.log(err);
        })
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
                    <Remarks user={user} owner={owner} />
                </Tab>
                <Tab eventKey="second" title="Memories">
                    Hii, I am 2nd tab content
                </Tab>
            </Tabs>

            {
                (user.googleId !== owner.googleId) ?
                    <Form onSubmit={onSubmit}>
                        <Container fluid className="d-flex">
                            <FormControl value={remark} onChange={handleOnChange} required />
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