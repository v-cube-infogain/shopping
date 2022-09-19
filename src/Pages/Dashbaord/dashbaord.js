import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getAllProductsService, getProductCategoryService, getProductsByCategoryService } from '../../Services/dashboardAPI';
import Product from '../../Components/Product';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        getAllProductsService().then(res => {
            // console.log("data", res);
            setProducts(res?.data?.products);
        })
    }, []);

    useEffect(() => {
        getProductCategoryService().then(res => {
            setCategoryList(res?.data);
        });
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            getProductsByCategoryService(selectedCategory).then(res => {
                setProducts(res?.data?.products);
            });
        }
       
    }, [selectedCategory]);


    const onCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    // console.log("selected", selectedCategory)

    return (
        <div>
            <Grid container spacing={4}>
                <ul className="category-list">
                    {categoryList.map(category =>
                        <li key={category} onClick={() => onCategoryClick(category)}>{category}</li>
                    )}
                </ul>
                {products.map(item =>
                    <Grid item xs={3} key={item.title}>
                        <Product item={item} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Dashboard;