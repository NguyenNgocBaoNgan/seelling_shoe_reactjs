import React,{ useEffect, useState }from "react";
// import {Link} from "react-router-dom";
// import '../Cart/cart.css';

import '../Cart/cart.css';

import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    // sử dụng để convert string biểu diễn JSON thành JavasCript Object
    const carts = JSON.parse(localStorage.getItem('cart')) || []

    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [carts])

    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: Math.max(item.quantity - 1,0)
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    if(carts.length === 0) {
        return <div className='notification'><h3>Cart is Empty</h3></div>
    }

    return (
        <div>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Giỏ hàng</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Trang chủ<span className="lnr lnr-arrow-right"></span><i
                                    className="fa-solid fa-arrow-right"></i></a>
                                <a id="cart1" href="cart.html">Giỏ hàng</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div id="wrapper">
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng</th>
                                </tr>
                                </thead>



                                {
                                    carts?.map(cart => {
                                        return (
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={cart?.img} alt={cart?.name}/>
                                                        </div>
                                                        <div className="media-body">
                                                            <p>{cart?.name}</p>
                                                            <button type="button" class="btn btn-sm btn-danger" onClick={() => removeProduct(cart?.id)}>Remove</button>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{cart?.price}đ</h5>
                                                </td>
                                                <td>
                                                    <div className="product_count">
                                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                        </svg>

                                                        <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} />
                                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                        </svg>


                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{cart?.price * cart?.quantity}đ</h5>
                                                </td>
                                            </tr>

                                            <tr className="bottom_button">

                                            </tr>





                                            </tbody>
                                        )
                                    })
                                }
                                <tr className="total-bill">
                                    <td colSpan="4" className="total-invoice">
                                        <h5>Tổng cộng:<span className="amount">{total?.toFixed(0)}đ</span></h5>

                                    </td>

                                </tr>
                                <tr className="out_button_area">
                                    <td colSpan="2"></td>
                                    <td className="col-text-right-2" colSpan="2">
                                        <a className="primary-btn" href="/checkout">Đến trang thanh toán</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout_area section_gap">
                <div className="container">

                    {/*<div className="billing_details">*/}


                    {/*        <div className="col-lg-4">*/}
                    {/*            <div className="order_box">*/}
                    {/*                <h4>Đơn hàng của bạn</h4>*/}
                    {/*                {*/}
                    {/*                carts?.map(cart => {*/}
                    {/*                return (*/}

                    {/*                            <ul className="list">*/}
                    {/*                                <li><a href="#">Sản phẩm <span>Giá</span></a></li>*/}
                    {/*                                <li><a href="#">{cart?.name} <span*/}
                    {/*                                    className="middle">x {cart?.quantity}</span> <span className="last">{cart?.price*cart?.quantity}đ</span></a></li>*/}

                    {/*                            </ul>*/}
                    {/*                )*/}
                    {/*                })*/}
                    {/*                }*/}
                    {/*                        <ul className="list list_2">*/}

                    {/*                            <li><a href="#">Phí Ship <span>0đ</span></a></li>*/}
                    {/*                            <li><a href="#">Tổng cộng <span>{total?.toFixed(0)}đ</span></a></li>*/}
                    {/*                        </ul>*/}


                    {/*                /!*<div className="payment_item">*!/*/}
                    {/*                /!*    <div className="radion_btn">*!/*/}
                    {/*                /!*        <input type="radio" id="f-option5" name="selector"/>*!/*/}
                    {/*                /!*        <label htmlFor="f-option5">Trả tiền mặt</label>*!/*/}
                    {/*                /!*        <div className="check"></div>*!/*/}
                    {/*                /!*    </div>*!/*/}

                    {/*                /!*</div>*!/*/}
                    {/*                /!*<div className="payment_item active">*!/*/}
                    {/*                /!*    <div className="radion_btn">*!/*/}
                    {/*                /!*        <input type="radio" id="f-option6" name="selector"/>*!/*/}
                    {/*                /!*        <label htmlFor="f-option6">Trả thẻ </label>*!/*/}
                    {/*                /!*        <img src="img/product/card.jpg" alt=""/>*!/*/}
                    {/*                /!*        <div className="check"></div>*!/*/}

                    {/*                /!*    </div>*!/*/}

                    {/*                /!*</div>*!/*/}
                    {/*                /!*<div className="creat_account">*!/*/}
                    {/*                /!*    <input type="checkbox" id="f-option4" name="selector"/>*!/*/}
                    {/*                /!*    <label htmlFor="f-option4">Tôi đã đọc và chấp nhận </label>*!/*/}
                    {/*                /!*    <a href="#">mọi điều khoản*</a>*!/*/}
                    {/*                /!*</div>*!/*/}
                    {/*                <a className="primary-btn" href="#">Xác nhận</a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*</div>*/}
                </div>
            </section>
            </div>
        </div>
    )
}

export default Cart;