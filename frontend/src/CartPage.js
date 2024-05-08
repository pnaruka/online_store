// CartPage.js
import React, { useState } from 'react';
import { Box, VStack, Heading, Button, SimpleGrid } from '@chakra-ui/react';
import CheckoutForm from './components/CheckoutForm';
import Product from './components/cartProduct';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from './contexts_store/reducer/cart';

const CartPage = () => {
    const products = useSelector(getCart);
    const total = useSelector(getCartTotal);

    return (
        <Box p="4">
            <Heading as="h2" size="lg" mb="4">
                Your Cart
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="40px">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </SimpleGrid>
            
            <Heading as="h3" size="lg" mb="4">
                Total: ${total}
            </Heading>
            <CheckoutForm />
        </Box>
    );
};

export default CartPage;