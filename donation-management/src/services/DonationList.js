import React, { useEffect, useState } from 'react';
import fetchDonations from '../services/DonationService';

const DonationsList = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const getDonations = async () => {
            const data = await fetchDonations();
            setDonations(data);
        };
        getDonations();
    }, []);

    return (
        <div>
            <h1>Donations</h1>
            <ul>
                {donations.map((donation) => (
                    <li key={donation.id}>{donation.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default DonationsList;