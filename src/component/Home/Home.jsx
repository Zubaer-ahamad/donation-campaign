import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <DonationCard></DonationCard>
        </div>
    );
};

export default Home;