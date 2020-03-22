import React from 'react';
export default props => {
    const {data: {temperature, weather}} = props;
    return (
        <ul>
            <p>The current weather in Seattle is {weather && weather.toLowerCase()} with a temperature of {temperature} &deg;F</p>
        </ul>
    )
}


