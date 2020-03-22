import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopoverPage from "./Popover";
import Description from "./Description";
import '../App.css';

function Main() {
    const [data, setData] = useState({});
    useEffect(() => {
        function fetchData() {
            axios('https://api.aerisapi.com/observations/seattle,wa?client_id=HIyat66xz5Uue87sjXrNN&client_secret=7XWB2MGrpconeIvx34PzubV2NkSHRHrBk7Wy4cLV')
            .then(success => {
                console.log(success.data.response);
                setData({
                weather: success.data.response.ob.weather,
                temperature: success.data.response.ob.tempF
            })})
            .catch(err => console.log(err))
        }
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <Description data={data}/>
            <PopoverPage />
        </React.Fragment>
    );
}

export default Main;
