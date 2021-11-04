import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../appoinmentHeader/AppoinmentHeader';
import AvailableAppionment from '../AvailableAppionment/AvailableAppionment';

const appintment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader></AppoinmentHeader>
            <AvailableAppionment></AvailableAppionment>
        </div>
    );
};

export default appintment;