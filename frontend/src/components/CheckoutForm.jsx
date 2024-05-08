// CheckoutForm.js
import React, { useState } from 'react';
import { Box, VStack, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { getCart } from '../contexts_store/reducer/cart';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address, setAddress] = useState('');
    const products = useSelector(getCart);

    const handleSubmit = async()=>{
        console.log({
            order: products,
            user: {
                first_name: firstName,
                last_name: lastName,
                address
            }
        });
    }

  return (
    <Box mt="8">
      <Heading as="h2" size="md" mb="4">
        Checkout
      </Heading>
      <VStack spacing="4">
        <FormControl>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input id="firstName" placeholder="Enter your first name"
          value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input id="lastName" placeholder="Enter your last name"
          value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input id="address" placeholder="Enter your address"
          value={address} onChange={(e)=>setAddress(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>Place Order</Button>
      </VStack>
    </Box>
  );
};

export default CheckoutForm;
