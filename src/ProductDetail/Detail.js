import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../ProductDetail/Detail.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    


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

    useEffect(() => {
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

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product_image_area">
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-6">
                        <div className="s_Product_carousel">
                            <div className="single-prd-item">
                                <img className="img-fluid" src={product.img} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price}đ</p>
                            <ul className="list">
                                <li>
                                    <a>
                                        <span>Số lượng còn trong kho</span> : {product.quantity}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Tình trạng </span> : Còn hàng
                                    </a>
                                </li>
                            </ul>
                            <p>Mô tả: </p>
                            <a>{product.detailPro}</a>

                            <div className="noname align-items-center">
                                <div className="pb-2">
                                    <label htmlFor="size">Size:</label>
                                </div>
                                <div className="default-select pb-2" id="default-select1">
                                    <select>
                                        <option value="1">Size 36</option>
                                        <option value="2">Size 37</option>
                                        <option value="3">Size 38</option>
                                        <option value="4">Size 39</option>
                                        <option value="5">Size 40</option>
                                    </select>
                                </div>
                            </div>

                            <div className="card_area d-flex align-items-center">
                                <a className="primary-btn" onClick={() => handleCart(product)}>
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
