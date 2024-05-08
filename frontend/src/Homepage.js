import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getProducts } from './contexts_store/reducer/products';
import { useFetchProducts } from './hooks/useFetchProducts';
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './components/productCard';

const Homepage = () => {
    const products = useSelector(getProducts);
    const { fetchProducts } = useFetchProducts();

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            <SimpleGrid spacing="40px" templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </SimpleGrid>
        </div>
    )
}

export default Homepage