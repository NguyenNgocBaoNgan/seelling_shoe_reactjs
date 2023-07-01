import React, {useState} from 'react';


import {Link} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/footer";
import '../Login/login.css';

// function handleLoginClick() {
//     Login();
// }y
// lưu lại giá trị của form
const initFormValue = {
    username: "",
    password: "",
}
// kiểm tra form có trống hay không
const  isEmptyValue = (value) => {
    return !value || value.trim().length<1;
};

    function Login() {
        const [formValue, setFormValue]= useState(initFormValue);
        const [formError, setFormError ] = useState({});
        let apiUser = "http://localhost:3000/user";
        const checkVailidate= () =>{
            const error = {};
            if(isEmptyValue(formValue.username)){
                error["username"] = "Vui lòng nhập email";
            }
            if(isEmptyValue(formValue.password)){
                error["password"] = "Vui lòng nhập mật khẩu";
            }
            setFormError(error);
        return Object.keys(error).length === 0;
    }
    const handleChange =(events) => {
        const { value , name }=events.target;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }
          const handleLogin = () => {
            getUser((data) => {
                let username = formValue.username;
                let password = formValue.password;
                let isAuthenticated =false;


                if (data && Array.isArray(data)) {
                    data.forEach((item) => {
                        if (item.email === username && item.password === password) {
                            isAuthenticated =true;
                            sessionStorage.setItem('fullName',item.fullName);
                            sessionStorage.setItem('email',item.email);
                            sessionStorage.setItem('DOB',item.DOB);
                            window.location.href = "/home";
                        }
                    });
                }
                if (!isAuthenticated) {
                    const error = {
                        password: "Email hoặc mật khẩu của bạn bị sai",
                    };
                    setFormError(error);
                }
            });
        };


        const getUser = (callback) => {
            fetch(apiUser)
                .then((res) => res.json())
                .then(callback)
                .catch((error) => {
                    console.log("Lỗi khi lấy dữ liệu người dùng: ", error);
                });
        };

        const handleLoginClick = (event) => {
            event.preventDefault();
            if(checkVailidate()){
                handleLogin();
            }
        };
        return (
            <div className="App">

                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 image_shoes">
                                <div className="login_box_img">

                                    <img
                                        src="https://dqshop.vn/wp-content/uploads/2020/12/giay-nike-air-jordan-1-low-washed-denim-rep-11-dep-chat-3-768x768.jpg"
                                        alt="My Image"/>

                                    <div className="hover-login">
                                        <h3>Bạn là người mới?</h3>
                                        <p>Hãy tạo tài khoản để mua hàng ở trang web chúng tôi!</p>
                                        <a className="primary-btn btn-create-login" href="/register">Tạo tài khoản</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login_form_inner">
                                    <h3>ĐĂNG NHẬP</h3>
                                    <form className="row login_form" id="contactForm" onSubmit={handleLoginClick}>
                                        <div className="col-md-12 form-group">
                                            <input
                                                id="username"
                                                type="email"
                                                placeholder="username"
                                                name="username"
                                                value={formValue.username}
                                                onChange={handleChange}

                                            />
                                            {formError.username &&(
                                                <div className="error-register"> {formError.username} </div>
                                            )}
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="password"
                                                name="password"
                                                value={formValue.password}
                                                onChange={handleChange}

                                            />
                                            {formError.password &&(
                                                <div className="error-register"> {formError.password} </div>
                                            )}
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox" id="kk" name="selector"/>
                                                <label htmlFor="f-option2">Duy trì đăng nhập</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group login_a">
                                            <button type="submit" value="submit" className="primary-btn btn_login">Đăng nhập
                                            </button>
                                            <a>Quên mật khẩu?</a>
                                            <a href="/register">Đăng kí tài khoản</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }


export default Login;