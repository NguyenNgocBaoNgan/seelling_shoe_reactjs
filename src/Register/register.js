import React, {useState} from "react";
import Header from "../header/Header";
// import {Link} from "react-router-dom";
import * as events from "events";
import Footer from "../footer/footer";
import '../Register/register.css'

    const initFormValue = {
        fullname : "",
        email : "" ,
        DOB : "" ,
        password : "",
        password_confirmation : "",

    };
     const  isEmptyValue = (value) => {
         return !value || value.trim().length<1;
     };
    const  isEmailValidate = (email) => {
        return /^\w+([\.-]?\w)*@\w+([\.]?\w+)*(\.\w{2,3})+$/.test(email);
    };
function createUser1(data){
    let apiUser = "http://localhost:3000/user";
    return fetch(apiUser,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(function (res){
        return res.json();
    });

}
function handleCreateForm(){
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let DOB = document.getElementById("DOB").value;
    let password = document.getElementById("password").value;
    let user = {
        fullName : fullname,
        email : email,
        DOB : DOB,
        password : password,
    };
    createUser1(user);
}
    function Register(){
        const [formValue, setFormValue]= useState(initFormValue);
        const [formError, setFormError ] = useState({});
        const checkVailidate= () =>{
            const error = {};
            if(isEmptyValue(formValue.fullname)){
                error["fullname"] = "Vui lòng nhập đầy đủ họ và tên";
            }
            if(isEmptyValue(formValue.email)){
                error["email"] = "Vui lòng nhập email";
            }else{
                if(!isEmailValidate(formValue.email)){
                    error["email"] = "Vui lòng nhập đúng email";
                }
            }
            if(isEmptyValue(formValue.DOB)){
                error["DOB"] = "Vui lòng nhập ngày sinh";
            }
            if(isEmptyValue(formValue.password)) {
                error["password"] = "Vui lòng nhập mật khẩu";
            }
            if(isEmptyValue(formValue.password_confirmation)){
                error["password_confirmation"] = "Vui lòng nhập lại mật khẩu";
            }else if(formValue.password_confirmation !== formValue.password){
                error["password_confirmation"] = "Mật khẩu nhập lại không khớp";

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

        const handleSubmit = (events) =>{
            events.preventDefault();

            if(checkVailidate()){
                console.log("form value", formValue);
                handleCreateForm();
                alert("Đăng ký thành công");
                window.location.href = "/";
            }else{
                console.log(" form invalid");
            }
            console.log("form value", formValue)
        }
        console.log(formError);

        return(
            <div>

                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Đăng kí</h1>
                                <nav className="d-flex_register align-items-center">
                                    <a href="">Trang chủ</a> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    <a className='register-a'>Đăng kí</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="login_box_area section_gap background_form">
                    <div className="container">
                        <div className="row justify-content-around ">
                            <div className="col-lg-6  ">
                                <div className="login_form_inner_register form_register">
                                    <h2>ĐĂNG KÍ</h2>
                                    <form onSubmit={handleSubmit} action="src/Page" className="row login_form pb-3 mb-5 form" id="form-1">


                                        <div className="col-md-12 form-group">
                                            <label htmlFor="fullname" className="form-label label_register">Tên đầy đủ</label>
                                            <input id="fullname" name="fullname" type="text"
                                                   placeholder="VD: Nguyễn Văn Nam" className="form-control"
                                                   value={formValue.fullname}
                                                   onChange={handleChange}
                                            />
                                            {formError.fullname &&(
                                                <div className="error-register"> {formError.fullname} </div>
                                            )}
                                                <span className="form-message"></span>
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label htmlFor="email" className="form-label label_register">Email</label>
                                            <input id="email" name="email" type="text" placeholder="VD: email@domain.com"
                                                   className="form-control"
                                                   value={formValue.email}
                                                   onChange={handleChange}

                                            />
                                            {formError.email &&(
                                                <div className="error-register"> {formError.email} </div>
                                            )}
                                                <span className="form-message"></span>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="dob" className="form-label label_register">Ngày tháng năm sinh</label>
                                            <input type="text" className="form-control" id="DOB" name="DOB"
                                                   placeholder="Ngày sinh (dd/mm/yyyy)"
                                                   value={formValue.DOB}
                                                   onChange={handleChange}

                                            />
                                            {formError.DOB &&(
                                                <div className="error-register"> {formError.DOB} </div>
                                            )}
                                                <span className="form-message"></span>
                                        </div>

                                        <div className="col-md-12 form-group pass-register">
                                            <label className="form-label label_register">Mật khẩu</label>
                                            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                                                   className="form-control"
                                                   value={formValue.password}
                                                   onChange={handleChange}

                                            />
                                            {formError.password &&(
                                                <div className="error-register"> {formError.password} </div>
                                            )}
                                                <span className="form-message"></span>
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label id="login_box_area section_gap" htmlFor="password_confirmation" className="form-label label_register">Nhập lại mật
                                                khẩu</label>
                                            <input id="password_confirmation " name="password_confirmation"
                                                   placeholder="Nhập lại mật khẩu" type="password" className="form-control password_confirmation "
                                                   value={formValue.password_confirmation}
                                                   onChange={handleChange}

                                            />
                                            {formError.password_confirmation &&(
                                                <div className="error-register"> {formError.password_confirmation} </div>
                                            )}
                                                <span className="form-message"></span>
                                        </div>

                                        <div className="col-md-12 form-group_register">
                                            <a href="/" className="hover-text">Đã có tài khoản?/Đăng nhập</a>
                                            <button className="form-submit" >Đăng ký</button>
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
export default Register;