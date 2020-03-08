import React, { Component } from "react";
import FormBoxTour from "./formBoxTour";
class BgListTour extends Component {
  render() {
    let datas = [
      {
        image:
          "https://www.vietnambooking.com/wp-content/uploads/2020/03/chuabaidinh.jpg",
        city: "Ninh Bình",
        country: "Việt Nam",
        timeJoin: "5 ngày 4 đêm",
        price: " 5.000.000 Đ",
        calendar: "Tháng 3",
        transit: ["Máy Bay", "xe Hơi"]
      },
      {
        image:
          "https://www.vietnambooking.com/wp-content/uploads/2019/11/bach-dinh.jpg",
        city: "Vũng Tàu",
        country: "Việt Nam",
        timeJoin: "3 ngày 2 đêm",
        price: " 2.000.000 Đ",
        calendar: "Tháng 4",
        transit: ["Máy Bay", "xe Hơi"]
      },
      {
        image:
          "https://dalattrongtoi.com/media/upload/images/HO%20VO%20CUC.png",
        city: "Đà Lạt",
        country: "Việt Nam",
        timeJoin: "3 ngày 2 đêm",
        price: " 6.000.000 Đ",
        calendar: "Tháng 5",
        transit: ["Máy Bay", "xe Hơi"]
      },
      {
        image:
          "https://tuanvinhtravel.com/wp-content/uploads/2019/12/hue-travel-traveltoindochina-1558085779-1400x467.png",
        city: "Huế",
        country: "Việt Nam",
        timeJoin: "3 ngày 2 đêm",
        price: " 3.000.000 Đ",
        calendar: "Tháng 8",
        transit: ["Máy Bay", "xe Hơi"]
      }
    ];
    return (
      // list tour
      <div className=" container px-0 my-5">
        <div className="d-flex  justify-content-between">
          <h5 className="bg-danger p-2 rounded text-white">{this.props.titleName}</h5>
          <a className="text-right" href="#">
            Xem Thêm ...
          </a>
        </div>
        <div className="mover-list bg-light p-3 rounded d-flex list-all-e-tour">
          {/* display  box  */}
          {datas.map((data, i) => {
            return <FormBoxTour key={"FormBoxTour" + i} data={data} />;
          })}
          {/* end display  box  */}
        </div>
      </div>
      // end list tour
    );
  }
}

export default BgListTour;
