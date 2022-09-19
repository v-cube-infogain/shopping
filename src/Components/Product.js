import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { updateCart } from '../Redux/cartSlice';

const Product = (props) => {
    const cartData = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    console.log(cartData, "cart");
    const { item } = props;
    const { brand, title, price, thumbnail, description, rating} = item;

    const onCartClick = (product) => {
        dispatch(updateCart([...cartData, product]));
    }

    return (
        <Card>
            <Grid container>
                <Grid item xs={12}>
                    <img src={thumbnail} alt="product image" height={200} width="100%" />
                </Grid>
                <Grid item xs={12} className="brand">
                    {brand}
                </Grid>
                <Grid item xs={12} className="title">
                    {title}
                </Grid>
                {/* <Grid item xs={12}>
                    {description}
                </Grid> */}
                <Grid item xs={12} className="price">
                    RS: {price}
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Rating name="read-only" value={rating} readOnly />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button className="btn" fullWidth variant='contained' onClick={() => onCartClick(item)}>Add to Cart</Button>
                </Grid>

            </Grid>
        </Card>
    );
}

export default Product;