// Navbar.js
import React from 'react';
import { Badge, Flex, Heading, IconButton } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getCartCount } from '../contexts_store/reducer/cart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartCount = useSelector(getCartCount);

  return (
    <Flex
      align="center"
      justify="space-between"
      py="4"
      px="6"
      borderBottom="1px"
      borderColor='gray.700'
    >
      <Heading as="h1" size="md">
        Store
      </Heading>
      <Flex align="center">
      <Link to="/cart">
        <IconButton
          aria-label="Cart"
          icon={<FiShoppingCart />}
          variant="ghost"
          size="md"
          colorScheme="teal"
        />
        </Link>
        
        {cartCount > 0 && (
          <Badge ml="1" colorScheme="red">
            {cartCount}
          </Badge>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;