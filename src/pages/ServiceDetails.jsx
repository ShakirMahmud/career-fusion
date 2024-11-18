import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { serviceName } = useParams();
    console.log(data);
    console.log(serviceName)

    const [selectedService, setSelectedService] = useState([]);
    useEffect(() => {
        const matchedService = data.find(service => service.serviceName === serviceName);
        setSelectedService(matchedService);
    }, [data, serviceName])

    return (
        <div>
            <NavBar></NavBar>
            {selectedService.serviceName}
            <Footer/>
        </div>
    );
};

export default ServiceDetails;