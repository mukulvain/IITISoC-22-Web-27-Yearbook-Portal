import { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const Remarks = ({ owner, user }) => {

    const [remarksList, setRemarksList] = useState([]);

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "remarks/getRemarks", {
            ownerId: owner.googleId,
            userId: user.googleId,
        }).then((data) => {
            setRemarksList(data.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [owner.googleId, user.googleId]);

    return (
        <>
            <Container>
                {remarksList.map((element) => {
                    return <RemarkCard key={element._id} data={element} owner={owner} user={user} />
                })}
            </Container>
        </>
    );
}

const RemarkCard = ({ data, owner, user }) => {

    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + 'user/getUser', {
            googleId: data.authorId,
        }).then((data) => {
            setAuthor(data.data.user);
        }).catch((err) => {
            console.log(err);
        })
    }, [data.authorId]);

    const handleClickApprove = () => {
        axios.post(process.env.REACT_APP_API_URL + 'remarks/approveRemark', {
            id: data._id,
            userId: user.googleId,
            ownerId: owner.googleId,
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleClickDelete = () => {
        axios.post(process.env.REACT_APP_API_URL + 'remarks/deleteRemark', {
            id: data._id,
            userId: user.googleId,
            ownerId: owner.googleId,
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Card key={data.remarkId}>
            <Card.Text>{data.content}</Card.Text>
            <Card.Text>{author.name}</Card.Text>
            {(owner.googleId === user.googleId && !data.approved) ?
                <>
                    <Button onClick={handleClickApprove}>Approve</Button>
                    <Button onClick={handleClickDelete}>Delete</Button>
                </>
                :
                <></>}
        </Card>
    )
}

export default Remarks;