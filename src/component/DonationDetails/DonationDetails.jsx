import PropTypes from 'prop-types';

const DonationDetails = ({ donation }) => {
    console.log(donation);
    const { picture, category, description, price } = donation;
    return (
        <div className="flex justify-start gap-10 items-center bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={picture} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title">{category}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

DonationDetails.propTypes = {
    donation: PropTypes.object
}

export default DonationDetails;