import { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const Remarks = ({ ownerId, userId }) => {

    const [remarksList, setRemarksList] = useState([]);

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "remarks/getRemarks", {
            ownerId: ownerId,
            userId: userId,
        }).then((data) => {
            setRemarksList(data.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [ownerId, userId]);

    return (
        <>
            <Container>
                {remarksList.map((element) => <RemarkCard key={element.remarkId} data={element} />)}
            </Container>
        </>
    );
}

const RemarkCard = ({ data }) => {
    return (
        <Card>
            <Card.Text>{data.content}</Card.Text>
        </Card>
    )
}

export default Remarks;