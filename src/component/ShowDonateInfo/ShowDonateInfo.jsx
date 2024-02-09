import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationMoney } from '../../utilities/utilities';

const ShowDonateInfo = ({ donation }) => {
    const { id, picture, category, title, description, price } = donation;
    const handleSaveItem = () => {
        saveDonationMoney(id);
        toast(`You Have Successfully Save ${category} !`);
    };

    return (
        <div className='container mx-auto'>
            <div className="hero min-h-[400px]" style={{ backgroundImage: `url(${picture})` }}>
                <div className=" bg-opacity-60"></div>
            </div>
            <div>
                <button className={` btn btn-error text-white absolute top-[450px] ms-10`} onClick={handleSaveItem}>Donate<span><FaDollarSign /></span>{price}</button>
                <ToastContainer />
            </div>

            <div>
                <p className='text-xl font-semibold mt-5 mb-2'>{category}</p>
                <p className='text-lg font-medium mb-3'>{title}</p>
                <p className='text-lg font-medium mb-10'>{description}</p>
            </div>
        </div>
    );
};

ShowDonateInfo.propTypes = {
    donation: PropTypes.object
}

export default ShowDonateInfo;