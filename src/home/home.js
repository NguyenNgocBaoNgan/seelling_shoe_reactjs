import React, { useState, useEffect } from "react";
import '../home/home.css';
// import ProductCard from "../ProductCard/productCard";
import PropTypes from "prop-types";

import ProductFilterByCategory from "../Filter/ProductFilterByCategory";

const apiproduct = "http://localhost:3000/product";
const apiCategory = "http://localhost:3000/category";
function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filters,setFilters] =useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3000/product?_limit=30')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
    const handleFilterChange =(newFilter) =>{
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilter,
        }));
    };
    return (
        <div>

            <section className="features-area section_gap sesion_home">
                <div className="container">
                    <div className="row features-inner">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/f-icon1.png" alt="" />
                                </div>
                                <h6>Miễn phí vận chuyển</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/f-icon2.png" alt="" />
                                </div>
                                <h6>Chính sách hoàn trả</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="../img/f-icon3.png" alt="" />
                                </div>
                                <h6>Hỗ trợ 24/7</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/f-icon4.png" alt="" />
                                </div>
                                <h6>Phương thức thanh toán</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="../img/gucci.jpg" alt="" />
                                        <a href="img/category/gucci.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Gucci</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="../img/puma.jpg" alt="" />
                                        <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Puma</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="../img/Nike.jpg" alt="" />
                                        <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Nike</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/adidas.jpg" alt="" />
                                        <a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Adidas</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="single-deal">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100 last" src="img/LV-Archlight.jpg" alt="" />
                                <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                    <div className="deal-details">
                                        <h6 className="deal-title">Louis Vuitton</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="owl-carousel active-product-area section_gap">
                <div className="single-product-slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>SẢN PHẨM</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {products.length > 0 ? (
                                <ProductFilterByCategory products={products} selectedCategory={selectedCategory} />
                            ) : (
                                <div>Loading.....</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand-area section_gap">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2> Thương hiệu</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <a className="col single-img" href="src/Page#">
                            <img className="img-fluid d-block mx-auto" src="brand/puma.png" alt="" />
                        </a>
                        <a className="col single-img" href="src/Page#">
                            <img className="img-fluid d-block mx-auto" src="brand/Adidas.png" alt=""/>
                        </a>
                        <a className="col single-img" href="src/Page#">
                            <img className="img-fluid d-block mx-auto" src="brand/Gucci.png" alt=""/>
                        </a>
                        <a className="col single-img" href="src/Page#">
                            <img className="img-fluid d-block mx-auto" src="brand/Louis-Vuitton.png" alt=""/>
                        </a>
                        <a className="col single-img" href="src/Page#">
                            <img className="img-fluid d-block mx-auto" src="brand/Nike.png" alt=""/>
                        </a>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
