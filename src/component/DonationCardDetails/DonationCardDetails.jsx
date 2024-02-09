import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DonationCardDetails = ({ donation }) => {
    const { id, picture, category, title, category_bg_color, card_bg_color, text_button_bg_color } = donation;
    return (
        <NavLink to={`/${id}`}>
            <div className={"card card-compact shadow-xl"} style={{ background: card_bg_color }} >
                <figure><img className='w-full' src={picture} alt="" /></figure>
                <div className="card-body">
                    <div className='h-10 w-24 flex items-center justify-center rounded-lg' style={{ background: category_bg_color, color: text_button_bg_color }}>
                        <h1 className='text-base font-medium'>{category}</h1>
                    </div>
                    <p className='ps-2 text-xl font-medium'>{title}</p>
                </div>
            </div>
        </NavLink>
    );
};

DonationCardDetails.propTypes = {
    donation: PropTypes.object
}

export default DonationCardDetails;