import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';

const Cart = () => {
    const cartData = useSelector(state => state.cart.products);
    let totalPrice = 0;
    cartData.forEach(item => {
        totalPrice = totalPrice + item.price
    });

    return (
        <div class="cart">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Image</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Product Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartData.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={row.thumbnail} height={50} width={50} />
                                </TableCell>
                                <TableCell align="right">{row.brand}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Total Price
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">{totalPrice}</TableCell>

                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>           
        </div>
    )
};

export default Cart;