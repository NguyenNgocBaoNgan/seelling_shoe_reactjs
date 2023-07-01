import emailjs from 'emailjs-com';

const sendMail = (fullName, email, message) => {
    const serviceId = 'service_68pnxse'; // ID của dịch vụ email trong EmailJS
    const templateId = 'template_mj3j0zj'; // ID của mẫu email trong EmailJS
    const userId = '_sur0Jo0HW17AT_X4'; // ID người dùng trong EmailJS

    // const templateParams = {
    //     from_name: sessionStorage.getItem('fullName'),
    //     from_email: sessionStorage.getItem('email'),
    //     message: message,
    // };

    emailjs.send(serviceId,templateId,{
        fullName: sessionStorage.getItem('fullName'),
        email: sessionStorage.getItem('email'),
        message: message,
    },userId);
};

export default sendMail;
