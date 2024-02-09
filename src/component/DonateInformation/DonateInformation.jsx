import { useLoaderData, useParams } from "react-router-dom";
import ShowDonateInfo from "../ShowDonateInfo/ShowDonateInfo";


const DonateInformation = () => {

    const {donations} = useLoaderData();
    const {donationId} = useParams();
    const intId = parseInt(donationId);
    const donationItem = donations.filter(donation => donation.id === intId);
 
    return (
        <div className="pt-28 p-5">
            {
                donationItem.map(donation => <ShowDonateInfo key={donation.id} donation={donation}></ShowDonateInfo>)
            }
        </div>
    );
};

export default DonateInformation;