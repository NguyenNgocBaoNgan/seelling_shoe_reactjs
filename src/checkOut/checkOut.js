import React, { useEffect, useState } from "react";
import './checkOut.css'
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js";
// import { Link, useNavigate } from 'react-router-dom'
// import Home from "../home/home";

function CheckOut(){

    const [total, setTotal] = useState(0)
    const carts = JSON.parse(localStorage.getItem('cart')) || []


    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)

        setTotal(total)
    }, [carts])
    return(

        <section className="checkout_area section_gap">
            <div className="container">

                <div className="billing_details">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>THÔNG TIN KHÁCH HÀNG</h3>
                            <form className="row contact_form" action="#" method="post" noValidate="novalidate"
                                  id="checkoutForm">
                                <div className="col-md-6 form-group p_star">
                                    <p className="form-message">Họ và Tên*</p>
                                    <input type="text" value={sessionStorage.getItem('fullName')} className="form-control name-Order" id="first" name="name" placeholder="Họ và Tên*" readonly/>

                                    <p className="form-message">Email*</p>
                                    <input type="text" value={sessionStorage.getItem('email')} className="form-control email-Order" id="last" name="name" placeholder="Tên*"/>

                                </div>
                                <div className="col-md-12 form-group">
                                    <p className="form-message">Ngày sinh*</p>
                                    <input type="text" value={sessionStorage.getItem('DOB')}  className="form-control" id="company" name="company"
                                           placeholder=""/>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="phone" name="phone"
                                           placeholder="Số điện thoại*"/>
                                    <p className="form-message"></p>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="email" name="email"
                                           placeholder="Email*"/>
                                    <p className="form-message"></p>
                                </div>

                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="address" name="address"
                                           placeholder="Địa chỉ*"/>
                                    <p className="form-message"></p>
                                </div>


                                <div className="col-md-12 form-group">
                                    <div className="creat_account note-order">
                                        <span>Ghi chú đơn hàng</span>
                                    </div>
                                    <textarea className="form-control" name="message" id="message" rows="1"
                                              placeholder="Ghi chú"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_box">
                                <h2>CHI TIẾT ĐƠN HÀNG</h2>

                                {
                                    carts?.map(cart => {
                                        return (

                                            <ul className="list">

                                                <li><span>SẢN PHẨM: {cart?.name}</span>
                                                </li>
                                                <li>
                                                    <span className="middle quatity-products">x {cart?.quantity}</span>
                                                    <span className="last">{cart?.price*cart?.quantity}đ</span>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                                <ul className="list list_2">

                                    <li><a href="#">Phí Ship <span>0đ</span></a></li>
                                    <li><a href="#">Tổng cộng <span>{total?.toFixed(0)}đ</span></a></li>
                                </ul>

                                <div className="payment_item active">
                                <PayPalScriptProvider
                                    options={{"client-id":
                                            "Ab1P8NMXvFN4H4FfD8XRLRvOQdXH3Vxy3uXqkGyxz_pbWEYsRWPt4wCaiRd8WMD9I4--UhDaFYsTzqGm"}}>
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: "4.7",
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={async (data, actions) => {
                                            const details = await actions.order.capture();
                                            const name = details.payer.name.given_name;
                                            alert("Transaction completed by " + name);
                                            window.location.href="/confirm";
                                        }}/>
                                </PayPalScriptProvider>

                                </div>

                                <a className="primary-btn" href="/confirm">Xác nhận</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default CheckOut;