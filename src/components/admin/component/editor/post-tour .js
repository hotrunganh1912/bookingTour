import React, { useState } from "react";
import callApi from "../../../../common/callAPI";
import { v4 as uuidv4 } from "uuid";
import { NotificationManager } from "react-notifications";
import FormTour from "./form-tour";
import EditorForm from "./editor-form";
import { convertStrToTag } from "../../../../common/funcCommon";

const PostTour = () => {
  const [content, setContent] = useState("");

  const innitTourData = {
    image: "",
    city: "",
    country: "",
    timeJoin: "",
    price: "",
    calendar: "",
    transit: [],
    timeStart: [],
  };

  const [tourData, setTourData] = useState(innitTourData);

  const [selected, setSelected] = useState([]);

  const [selectedTransit, setSelectedTransit] = useState([]);

  const getSelected = () => {
    if (selected.length <= 0) return [];
    return selected.map((e) => e.value);
  };

  const getSelectedSelectedTransit = () => {
    if (selectedTransit.length <= 0) return [];
    return selectedTransit.map((e) => e.value);
  };

  const handerOnChangeDataTour = (e) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };

  const handerUpdateNewTimeStart = (array) => {
    if (array.length <= 0) {
      setTourData({ ...tourData, timeStart: [] });
    } else {
      setTourData({ ...tourData, timeStart: [...array] });
    }
  };

  const handerPost = () => {
    const newTour = {
      id: convertStrToTag(tourData.city) + Date.now(),
      image: tourData.image,
      city: tourData.city,
      country: tourData.country,
      timeJoin: tourData.timeJoin,
      price: Number(tourData.price),
      calendar: tourData.calendar,
      transit: [...getSelectedSelectedTransit()],
      timeStart: tourData.timeStart,
      tag: [
        ...getSelected(),
        convertStrToTag(tourData.city),
        convertStrToTag(tourData.country),
      ],
    };
    callApi(`tours`, "Post", { ...newTour }).then((res) => {
      if (res.status === 201) {
        postDetail(res.data.id);
        return true;
      } else {
        NotificationManager.success("Đăng Bài Thất Bại");
        return false;
      }
    });
  };

  const deleteTour = (idTour) => {
    callApi(`tours/${idTour}`, "Delete", null).then((res) => {});
  };

  const postDetail = (idTour) => {
    let post = {
      id: uuidv4(),
      idTour: idTour,
      conten: content,
    };
    callApi("Detail", "Post", {
      ...post,
    }).then((response) => {
      if (response.status === 201) {
        NotificationManager.success("Đăng Bài Thành Công");
        setTourData(innitTourData);
        setSelected([]);
        setSelectedTransit([]);
        setContent("")
        return true;
      } else {
        deleteTour(idTour);
        NotificationManager.success("Đăng Bài Thất Bại");
        return false;
      }
    });
  };

  return (
    <div>
      <FormTour
        handerOnChangeDataTour={handerOnChangeDataTour}
        setTourData={setTourData}
        tourData={tourData}
        selected={selected}
        setSelected={setSelected}
        selectedTransit={selectedTransit}
        setSelectedTransit={setSelectedTransit}
        handerUpdateNewTimeStart={handerUpdateNewTimeStart}
      />

      <div className="form-group">
        <label htmlFor="editor">Nhập Mô Tả</label>
        <EditorForm content={content} setContent={setContent} />
      </div>
      <div className="w-100 text-right my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handerPost();
          }}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};
export default PostTour;
