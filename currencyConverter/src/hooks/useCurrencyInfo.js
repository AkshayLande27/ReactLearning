import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(res => {
                setData(res[currency]);
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
                setData({}); // Set data to empty object in case of error
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
