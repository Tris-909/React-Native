import {useEffect, useState} from 'react';
import yelp from '../API/Yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const onSubmitSearch = (term) => {
        yelp.get(`/search`, {
            params: {
                term,
                limit: 10,
                location: 'sydney'
            }
        }).then((result) => {
            setResult(result.data.businesses);
        }).catch((error) => {
            setError('Something went wrong');
        });
    }

    useEffect(() => {
        onSubmitSearch('seafood');
    }, []);

    return [onSubmitSearch, result, error];
};