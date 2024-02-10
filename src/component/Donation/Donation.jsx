import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationMoney } from "../../utilities/utilities";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donation = () => {
    const { donations } = useLoaderData();
    const [donationData, setDonationData] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const savedDonation = getDonationMoney();
        if (donations) {
            const donation = donations.filter(donation => savedDonation.includes(donation.id));
            setDonationData(donation);
        }

    }, [donations]);
    return (
        <div className="mb-20">
            <div className="pt-14 md:pt-20 lg:pt-32 mt-10 p-5 grid md:grid-cols-2 gap-20 md:p-14 lg:p-24">
                {
                    donationData.slice(0, dataLength).map(data => <DonationDetails key={data.id} donation={data}></DonationDetails>)
                }
            </div>
            <div className={dataLength >= donationData.length ? 'hidden' : 'flex justify-center'}>
                <button onClick={() => setDataLength(donationData.length)} className="btn btn-error text-white">Show More</button>
            </div>
        </div>
    );
};

export default Donation;