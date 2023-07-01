import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import '../SearchInput/Search.css'
import ProductFilterByCategory from "../Filter/ProductFilterByCategory";

const Search = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [noResults, setNoResults] = useState(false); // Biến trạng thái để kiểm tra có kết quả tìm kiếm hay không
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
                setFilteredProducts(data); // Cập nhật filteredProducts
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
    }, [products, filteredCategory]);

    const handleCategoryChange = (newCategoryId) => {
        const category = categoryList.find((category) => category.id === newCategoryId);
        setFilteredCategory(category);
    };

    const handleSearch = () => {
        const keyword = searchTerm.toLowerCase();
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(keyword)
        );

        Promise.all(
            results.map((result) =>
                fetch(`http://localhost:3000/product/${result.id}`)
                    .then((response) => response.json())
                    .catch((error) => {
                        console.log("Failed to fetch product details", error);
                        return null;
                    })
            )
        )
            .then((productDetails) => {
                const filteredProductDetails = productDetails.filter((detail) => detail !== null);
                setFilteredProducts(filteredProductDetails);
                if (filteredProductDetails.length === 0) {
                    setNoResults(true); // Đặt biến trạng thái thành true nếu không có kết quả tìm kiếm
                } else {
                    setNoResults(false); // Đặt biến trạng thái thành false nếu có kết quả tìm kiếm
                }
            })
            .catch((error) => {
                console.log("Failed to fetch product details", error);
            });

    };

    return (
        <div>
            <Input.Search
                style={{ width: '100%' }}
                placeholder="Nhập sản phẩm cần tìm kiếm"
                enterButton
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onSearch={handleSearch}
            />
            <div className="filter-productsList">
                <ul>
                    {filteredProducts.map((product) => (
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
            {noResults && <h4>Không tìm thấy sản phẩm phù hợp.</h4>} {/* Hiển thị thông báo khi không có kết quả tìm kiếm */}
        </div>
    );
};

export default Search;