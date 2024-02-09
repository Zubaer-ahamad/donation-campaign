import { useEffect, useState } from "react";
import DonationCardDetails from "../DonationCardDetails/DonationCardDetails";

const DonationCard = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data.donations))
    }, [])
    return (
        <div className="mt-20 p-5 mb-20 grid lg:grid-cols-4 lg:p-0 md:p-0 md:grid-cols-2 gap-10">
            {
                donations.map(donation => <DonationCardDetails key={donation.id} donation={donation}></DonationCardDetails>)
            }
        </div>
    );
};

export default DonationCard;