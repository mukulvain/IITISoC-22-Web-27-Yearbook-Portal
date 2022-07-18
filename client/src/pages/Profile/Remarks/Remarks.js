import { useEffect } from "react";
import axios from 'axios';

const Remarks = ({ ownerId, userId }) => {
    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "remarks/getRemarks", {
            ownerId: ownerId,
            userId: userId,
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }, [ownerId, userId]);

    return (
        <>
            
        </>
    );
}

const RemarkCard = ({ }) => {
    return (
        <>

        </>
    )
}

export default Remarks;