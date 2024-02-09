const getDonationMoney = () => {
    const saveDonationMoney = localStorage.getItem('donate-money');
    if(saveDonationMoney){
        return JSON.parse(saveDonationMoney);
    }
    return [];
}


const saveDonationMoney = id => {
    const saveDonation = getDonationMoney();
    const addedDonation = saveDonation.find(donationId => donationId === id)
    if(!addedDonation){
        saveDonation.push(id);
        localStorage.setItem('donate-money', JSON.stringify(saveDonation))
    }
}
export { getDonationMoney, saveDonationMoney }