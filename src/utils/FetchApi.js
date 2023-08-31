import axios from 'axios'

const propertyForRent = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
        locationExternalIDs: '5002',
        purpose: 'for-rent',
        hitsPerPage: '6',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
    },
    headers: {
        'X-RapidAPI-Key': '72ef64e9d7mshb5e07488790fd7fp1564a7jsn5d1bf4dbff28',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};

const propertyForSale = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
        locationExternalIDs: '5002',
        purpose: 'for-sale',
        hitsPerPage: '6',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
    },
    headers: {
        'X-RapidAPI-Key': '72ef64e9d7mshb5e07488790fd7fp1564a7jsn5d1bf4dbff28',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};

    export const forRent = async () =>{
        try {
            const rentRes = await axios.request(propertyForRent);
            const trimmedRes = rentRes.data.hits
            return trimmedRes
        } catch (error) {
            console.error(error);
        }
    }

    export const forSale = async () => {
        try{
            const saleRes = await axios.request(propertyForSale);
            const trimmedSaleRes = saleRes.data.hits
            return trimmedSaleRes
        } catch (error) {
            console.error(error);
        }
    }
