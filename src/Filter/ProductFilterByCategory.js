// ProductCard.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [isPrevButtonPressed, setIsPrevButtonPressed] = useState(false);
    const [isNextButtonPressed, setIsNextButtonPressed] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const apiCategory = "http://localhost:3000/category";
        const apiProducts = "http://localhost:3000/product";

        fetch(apiCategory)
            .then((response) => response.json())
            .then((data) => {
                setCategoryList(data.map((x) => ({ id: x.id, name: x.name })));
            })
            .catch((error) => {
                console.log("Failed to fetch category list", error);
            });

        fetch(apiProducts)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log("Failed to fetch product list", error);
            });
    }, []);

    useEffect(() => {
        if (filteredCategory) {
            const filtered = products.filter(
                (product) => product.idCatItem === filteredCategory.id
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
        setCurrentPage(1); // Reset current page to 1 when category filter changes
    }, [products, filteredCategory]);

    useEffect(() => {
        // Fetch product details based on the provided ID
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log('Failed to fetch product details', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleCategoryChange = (newCategoryId) => {
        const category = categoryList.find((category) => category.id === newCategoryId);
        setFilteredCategory(category);
    };

    const handleCart = (product, redirect) => {
        console.log(product);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find((item) => item.id === product.id);
        if (isProductExist) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem(
                'cart',
                JSON.stringify([...cart, { ...product, quantity: 1 }])
            );
        }
        alert('Product added to cart');
        if (redirect) {
            navigate('/cart');
        }
    };
    //Hiển thị các sản phẩm hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // Các xử lý để hiển thị số trang
    const pageNumbers = [];
    for (
        let i = 1;
        i <= Math.ceil(filteredProducts.length / productsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        setClickedButton(pageNumber);
    };




    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setIsPrevButtonPressed(true);
            setIsNextButtonPressed(false);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
            setIsPrevButtonPressed(false);
            setIsNextButtonPressed(true);
        }
    };


    return (
        <div className="body-pro">
            <div className="categorylist">
                <h2>DANH MỤC</h2>
                <ul>
                    {categoryList.map((category) => (
                        <li
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter-productsList">
                <ul>
                    {currentProducts.map((product) => (
                        <li key={product.id}>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product">
                                    <img
                                        className="img-fluid list-pro-filter"
                                        src={product.img}
                                        alt=""
                                    />
                                    <div className="product-details">
                                        <h6 ><a href={`/Detail/${product.id}`}>{product.name}</a></h6>
                                        <div className="price">
                                            <h6>{product.price}đ</h6>
                                            <h6 className="l-through">210.000đ</h6>
                                        </div>
                                        <div className="prd-bottom">
                                            <button
                                                className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
                                                onClick={() => handleCart(product)}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div></div>

            <div className="pagination">
                <button
                    className={`pagination-btn ${isPrevButtonPressed ? 'disabled' : ''}`}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon="arrow-left" />
                </button>

                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        className={`pagination-btn ${clickedButton === number ? 'clicked' : ''}`}
                        onClick={() => handlePageClick(number)}
                    >
                        {number}
                    </button>
                ))}


                <button
                    className={`pagination-btn ${isNextButtonPressed ? 'disabled' : ''}`}
                    onClick={handleNextPage}
                    disabled={currentPage === pageNumbers.length}
                >
                    <FontAwesomeIcon icon="arrow-right" />
                </button>

            </div>
        </div>
    );
};

export default ProductCard;
