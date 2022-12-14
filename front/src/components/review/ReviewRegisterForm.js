import React, { useState, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Api from "../../api";
import { UserStateContext } from "../../App";
import Information from "../../json/newBikeDatas.json";
import Select from "react-select";
import GlobalStyle from "../GlobalStyle";

function ReviewRegisterForm({ setReviews, handleClose }) {
  const userState = useContext(UserStateContext);

  const options = Information.map((data) => ({
    value: data.address1,
    label: data.address2,
  }));

  const [locationName, setLocationName] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [reviewForm, setReviewForm] = useState({
    email: userState.user.email,
    title: "",
    contents: "",
  });
  const [reviewImage, setReviewImage] = useState("");
  function handleImgChange(e) {
    setReviewImage(e.target.files[0]);
  }
  function handleOnchange(e) {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log("Image", reviewImage);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = userState.user.userId;
    const reviewFile = new FormData();
    reviewFile.append("reviewFile", reviewImage);
    reviewFile.append("userId", userId);
    reviewFile.append("email", reviewForm.email);
    reviewFile.append("title", reviewForm.title);
    reviewFile.append("contents", reviewForm.contents);
    reviewFile.append("locationName", locationName);
    reviewFile.append("roadAddress", roadAddress);

    try {
      const res = await Api.post("reviews", reviewFile);
      setReviews((prev) => [...prev, res.data]);
    } catch (err) {
      console.log("review 등록에 실패하였습니다.", err);
    }
  };
  const isSelectLocationName = locationName.length > 0;
  const isWriteTitle = reviewForm.title.length > 0;
  const isWriteCotent = reviewForm.contents.length > 0;
  const isFormValid = isSelectLocationName && isWriteTitle && isWriteCotent;
  return (
    <>
      <GlobalStyle />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userEditProfileImage" className="mb-3">
          <Form.Control
            type="file"
            name="reviewFile"
            onChange={handleImgChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            name="title"
            value={reviewForm.title}
            onChange={handleOnchange}
          />
          {!isWriteTitle && <p class="inputWarning">제목을 작성해 주세요.</p>}
        </Form.Group>
        <Row className="mb-3">
          <fieldset disabled>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                value={reviewForm.email}
                onChange={handleOnchange}
              />
            </Form.Group>
          </fieldset>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>장소</Form.Label>
            <Select
              name="locationName"
              placeholder="장소"
              options={options}
              onChange={(data) => {
                setLocationName(data.label);
                setRoadAddress(data.value);
              }}
            />
            {!isSelectLocationName && (
              <p class="inputWarning">장소를 선택해주세요</p>
            )}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>본문</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="contents"
            type="contents"
            placeholder="contents"
            value={reviewForm.contents}
            onChange={handleOnchange}
          />
          {!isWriteCotent && <p class="inputWarning">본문을 작성해 주세요.</p>}
        </Form.Group>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClose}
            disabled={!isFormValid}
          >
            Save
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default ReviewRegisterForm;
