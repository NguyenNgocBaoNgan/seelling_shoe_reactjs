import React from 'react';
import './tin tuc.css';

function News() {
    const newsData = [
        {
            title: 'Mẫu giày mới từ thương hiệu Nike',
            image: '../img/Nike.jpg',
            content: 'Nike vừa ra mắt mẫu giày mới với thiết kế đẳng cấp và chất lượng tuyệt hảo. Hãy khám phá ngay!',
        },
        {
            title: 'Bộ sưu tập giày cao cổ thời trang',
            image: '../img/Boots/martin.png',
            content: 'Giày cao cổ đang trở thành xu hướng mới trong thế giới giày dép. Cùng xem những mẫu giày đẹp nhất!',
        },
        {
            title: 'Giày đi biển thoải mái',
            image: '../img/SandalNu/s11.png',
            content: 'Cùng tận hưởng mùa hè với những đôi giày đi biển thoải mái và thời trang. Hãy chọn cho mình một đôi ngay!',
        },
    ];

    return (
        <div className="news-container">
            <h3 className="news-titles"> TIN TỨC MỚI NHẤT !!!</h3>
            {newsData.map((item, index) => (
                <div className="news-item" key={index}>
                    <div className="news-item-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="news-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default News;
