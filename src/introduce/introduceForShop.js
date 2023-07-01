import React, { useEffect } from 'react';
import './introduce.css';

function IntroduceForShop() {
    useEffect(() => {
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        if (carouselItems.length > 0) {
            const intervalId = setInterval(() => {
                carouselItems[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % carouselItems.length;
                carouselItems[currentIndex].classList.add('active');
            }, 5000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, []);

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-inner11">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="imgIntroduce" src="../img/gucci.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img className="imgIntroduce" src="../img/gucci.jpg" alt="" />

                </div>
                <div className="carousel-item">
                    <img className="imgIntroduce" src="../img/RunningShoes/adidas1.png" alt="" />
                </div>
            </div>
                <div className="text-introduce">
                    <ul>
                        <li>
                            <h3>Chào mừng đến với cửa hàng bán giày! </h3>
                            <p>Chúng tôi tự hào giới thiệu đến bạn một cửa hàng đầy đủ các mẫu giày phong cách và đa dạng. Với đội ngũ nhân viên tận tâm và niềm đam mê với giày dép, chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm tuyệt vời và thỏa mãn đam mê của bạn với thế giới giày dép.</p>
                        </li>
                        <li>
                            <h3>Đa dạng và phong cách</h3>
                            <p>Tại cửa hàng của chúng tôi, bạn sẽ tìm thấy một bộ sưu tập đa dạng với hàng ngàn mẫu giày từ các thương hiệu nổi tiếng và chất lượng. Chúng tôi cung cấp từ những đôi giày thể thao, giày chạy bộ đến những đôi giày công sở thanh lịch, hay những đôi giày đi biển thoải mái và nhiều hơn nữa. Bạn sẽ không khám phá được sự đa dạng và phong cách tại cửa hàng của chúng tôi.</p>
                        </li>
                        <li>
                            <h3>Chất lượng hàng đầu</h3>
                            <p>Chúng tôi luôn đặt chất lượng lên hàng đầu, đảm bảo rằng mỗi đôi giày mà bạn chọn đều là sản phẩm chất lượng cao, thoải mái và bền bỉ. Chúng tôi không chỉ quan tâm đến ngoại hình mà còn tập trung vào sự thoải mái và hỗ trợ cho bàn chân của bạn. Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn để bạn có thể chọn được đôi giày hoàn hảo cho nhu cầu và phong cách của riêng mình.</p>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
    );
}

export default IntroduceForShop;
