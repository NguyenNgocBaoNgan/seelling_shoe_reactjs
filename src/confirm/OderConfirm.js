import React from 'react';
import './OrderConfirm.css'; // Import CSS file

const OrderConfirm = () => {
    return (
        <div className="order-confirm">
            <h1>XÁC NHẬN ĐƠN HÀNG</h1>
            <img src="/brand/img_1.png" alt="" className="order-confirm__image" />
            <p>Xin chào Quý khách hàng,</p>
            <p>Cảm ơn bạn đã đặt hàng tại công ty chúng tôi. Đơn hàng của bạn đã được xác nhận thành công.</p>
            <p>Chúng tôi sẽ tiến hành xử lý đơn hàng của bạn và giao hàng đến địa chỉ đã cung cấp trong thời gian sớm nhất.</p>
            <p>Xin vui lòng kiểm tra email thường xuyên để cập nhật thông tin về đơn hàng của bạn.</p>
            <p>Một lần nữa, chúng tôi xin cảm ơn sự tin tưởng và lựa chọn của bạn. Chúng tôi hy vọng bạn sẽ hài lòng với sản phẩm và dịch vụ của chúng tôi.</p>
            <p>Trân trọng,</p>
            <p>Đội ngũ công ty</p>
        </div>
    );
};

export default OrderConfirm;
