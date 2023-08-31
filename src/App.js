import {Flex, Box, Text, Button} from '@chakra-ui/react'; 
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {forRent, forSale } from './utils/FetchApi'
import Property from './components/Property';


const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <img src={imageUrl} width = {500} height ={200} alt = 'banner' />
   <Box p='5'>
      <Text color={'gray.500'} fontSize = "sm" fontWeight={'medium'}>{purpose}</Text>
      <Text fontSize = "3xl" fontWeight={'bold'}>{title1}<br />{title2}</Text>
      <Text fontSize = "lg" paddingTop={'3'} paddingBottom={'3'} color='gray.700'>{desc1} <br /> {desc2}</Text>
      <Link to={linkName}>
        <Button fontSize={'xl'} bg='blue.300' color='white'>{buttonText}</Button>
      </Link>
   </Box>
  </Flex>
)



function App() {
  const [apiRentData, setApiRentData] = useState('');
  const [apiSaleData, setApiSaleData] = useState([]);

  useEffect (() => {
      const rent = forRent();
      setApiRentData(rent);

      const sale = forSale();
      setApiSaleData(sale);
  },[])


  return (
    <Box>
      <Banner 
        purpose = "Rent A Home" 
        title1= 'Rental Homes For'
        title2 = 'Everyone'
        desc1 = 'Explore Apartments, Villas, Homes'
        desc2 = 'and more'
        buttonText = 'Explore Renting'
        linkName = '/search?purpose=for-rent'
        imageUrl = 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />

        <Flex flexWrap={'wrap'}>
          {/* {apiRentData.rent.map((property) => <Property property={property} key={property.id} />)} */}

          {apiRentData.rent.map((item) => (
            <p key= {item.id}>{item.title}</p>
          ))}

        </Flex>
      <Banner 
        purpose = "Buy A Home" 
        title1= 'Find, Buy & Own Your'
        title2 = 'Home'
        desc1 = 'Explore Apartments, Villas, Homes'
        desc2 = 'and more'
        buttonText = 'Explore Buying'
        linkName = '/search?purpose=for-sale'
        imageUrl = 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlJTIwZm9yJTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />

        {/* {apiSaleData.sale.map((property) => <Property property={property} key={property.id} />)} */}

    </Box>
  );
}

export default App;
