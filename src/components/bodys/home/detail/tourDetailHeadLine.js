import React, {Component} from 'react';

class TourDetailHeadLine extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="T">
          <h3 className="text-primary mt-4">
            Du lịch Ninh Bình - cảnh vật hữu tình xứng danh tiên cảnh
          </h3>
          <div className="tourSchedule">
            <p>
              Ninh Bình với nhiều danh thắng đẹp cả về cảnh quan và ý nghĩa lịch
              sử, đã trở thành điểm đến được nhiều du khách lựa chọn. Nói nơi
              đây là 1 Việt Nam thu nhỏ quả không sai bởi nó hòa quyện toàn bộ
              đặc trưng văn hóa, thiên nhiên và lịch sử. Cùng iVIVU khám phá
              điểm đặc trưng này, tại sao không?
            </p>
          </div>
        </div>

        <div className="tourDetailheadLine">
          <h3 className="text-primary mt-4">
            Những trải nghiệm thú vị trong chương trình
          </h3>
          <div className="tourSchedule">
            <p>Đến vùng đất Cố đô đừng bỏ lỡ...</p>
            <p>
              - <strong> Chùa Bái Đính:</strong>
              Ngôi chùa lớn nhất và nắm giữ nhiều kỷ lục nhất Việt Nam.
            </p>
            <p>
              - <strong> Du Lịch Sinh Thái Tràng An:</strong>
              Phong cảnh thiên nhiên hoang sơ, tuyệt đẹp của Tràng An đã được
              UNESCO công nhận là di sản thiên nhiên và di sản văn hóa thế giới.
              Khung cảnh nơi đây được tạo nên từ dòng sông chạy uốn lượn qua các
              dãy núi đá vôi, tạo thành vô vàn những hang động tự nhiên huyền
              ảo, kỳ bí.
            </p>
            <p>
              - <strong> Hang Múa:</strong>
              từ trên đỉnh núi Múa có thể ngắm toàn cảnh khu vực Tam Cốc với vẻ
              đẹp được khách Tây ca ngợi đẹp không kém những điểm ngắm từ trên
              cao khác tại Việt Nam như là đèo Mã Pí Lèng (Hà Giang), Lìm Mông
              (Yên Bái) hay Mai Châu (Hoà Bình).
            </p>
          </div>
        </div>

        <div className="tourDetailheadLine">
          <h3 className="text-primary mt-4">Chính sách phụ thu</h3>
          <div className="tourSchedule">
            <p>
              - Trẻ em dưới 4 tuổi miễn phí 100%, ngồi chung ghế với bố mẹ, chi
              phí phát sinh tại điểm du lịch- bố mẹ tự chi trả ( 2 người lớn chỉ
              được kèm 1 trẻ em dưới 4 tuổi).
            </p>
            <p>- Trẻ em từ 4 tuổi đến 7 tuổi tính 75% giá tour người lớn</p>
            <p>- Trẻ em từ 8 tuổi trở lên tính bằng người lớn.</p>
            <p>
              Hai người lớn được kèm 1 trẻ em, trẻ em thứ 2 tính giá người lớn.
            </p>
          </div>
        </div>

        <div className="tourDetailheadLine">
          <h3 className="text-primary mt-4">Tư vấn ngay</h3>
          <div className="tourSchedule">
            <p>
              Để được tư vấn kỹ hơn, Quý Khách vui lòng để lại thông tin liên
              lạc.
            </p>
            <div className="row">
              <div className="col-6 form-advisory">
                <div className="form-group">
                  <label htmlFor="name">Họ Tên</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone-number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Nội dung tư vấn</label>
                  <textarea type="text" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Yêu cầu tư vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourDetailHeadLine;
