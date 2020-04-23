import React, { useEffect } from "react";
import WriteComment from "./write-comment";
import ShowOtherComment from "./show-orther-comment";
import { useState } from "react";
import callApi from "../callAPI";
import { v4 as uuidv4 } from "uuid";
import Waiting from "../waiting";
import { withRouter } from "react-router-dom";
import "./comment.css";
import ChartRating from "./Chart-rating";

const BgComment = (props) => {
  const [currentPoni, setCurrentPoni] = useState(0);
  const [statusSendComment, setStatusSendComment] = useState("nomal");

  const [isShowComment, setIsShowComment] = useState(true);

  console.log("currentPoni :", currentPoni);

  const [dataComment, setDataComent] = useState("begin");

  useEffect(() => {
    let isUnmounting = false;
    callApi(`Comments/?idTour=${props.match.params.id}&_sort=time&_order=desc`, "Get").then((res) => {
      setStatusSendComment("nomal");
      if (res && res.status === 200 && res.data.length > 0 && !isUnmounting) {
        setDataComent(res.data);
      }
    });
    return () => (isUnmounting = true);
  }, [props.match.params.id]);

  const getDataForChar = () => {
    console.log(":run  getDataForChar");
    if (dataComment === "begin" || dataComment.length <= 0)
      return {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        sumComment: 0,
        mediumOfStar: 0,
      };

    let array = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dataComment.length; i++) {
      array[dataComment[i].starPoin]++;
    }

    let arrayMap = array.map((e, i) => e * i);
    let sumOfStar = arrayMap.reduce((a, c) => {
      return a + c;
    }, 0);

    let mediumOfStar = sumOfStar / dataComment.length;

    return {
      a: (array[1] / dataComment.length) * 100,
      b: (array[2] / dataComment.length) * 100,
      c: (array[3] / dataComment.length) * 100,
      d: (array[4] / dataComment.length) * 100,
      e: (array[5] / dataComment.length) * 100,
      sumComment: dataComment.length,
      mediumOfStar: mediumOfStar,
    };
  };

  const submitComment = (context) => {
    if (
      context.contexTitle.trim() === "" ||
      context.context.trim() === "" ||
      currentPoni === 0
    )
      return;
    setStatusSendComment("pending");
    const currentUser = JSON.parse(localStorage.getItem("Token"));
    if (!currentUser) {
      props.history.push("/login");
      return;
    }
    const comment = {
      id: uuidv4(),
      idUser: currentUser.id,
      userPost: `${currentUser.firtName} ${currentUser.lastName}`,
      starPoin: Number(currentPoni),
      ...context,
      idTour: props.match.params.id,
      time: Date.now(),
    };
    callApi(`Comments`, "Post", comment).then((res) => {
      setStatusSendComment("nomal");
      if (res && res.status === 201) {
        alert("Comment Thành Công ");
        let newDataComentt = [{ ...res.data }, ...dataComment];
        setDataComent("begin");
        setDataComent(newDataComentt);
        setIsShowComment(false);
      } else alert("Comment Thất Bại");
    });
  };

  const getStartPoin = (poin) => {
    if (currentPoni !== poin) setCurrentPoni(poin);
  };

  const toggerWriteAndRedComment = () => {
    return setIsShowComment(!isShowComment);
  };

  return (
    <div>
      {<ChartRating data={getDataForChar()} />}
      {dataComment !== "begin" ? (
        <>
          <div className="border-top w-50 mx-auto"></div>
          <h5 className="mx-2 my-3">KHÁCH HÀNG NHẬN XÉT</h5>
        </>
      ) : (
        ""
      )}
      {/* toggerWriteAndRedComment */}
      <button
        onClick={toggerWriteAndRedComment}
        className={`mx-2 btn ${
          isShowComment ? "btn-primary" : "btn-outline-primary"
        }`}
      >
        Viết Comment
      </button>
      <button
        onClick={toggerWriteAndRedComment}
        className={`mx-2 btn  ${
          !isShowComment ? "btn-primary" : "btn-outline-primary"
        }`}
      >
        Đọc Comment
      </button>

      {statusSendComment !== "pending" ? (
        isShowComment ? (
          <WriteComment
            submitComment={submitComment}
            getStartPoin={getStartPoin}
          />
        ) : (
          ""
        )
      ) : (
        <Waiting custome={{ minHeight: "299px" }} />
      )}
      {!isShowComment && dataComment !== "begin"
        ? dataComment.map((e, i) => {
            return <ShowOtherComment key={"dataComment" + i} dataComment={e} />;
          })
        : ""}
    </div>
  );
};

export default withRouter(BgComment);
