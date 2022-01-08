import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import { FaPen, FaTrashAlt, FaLink } from "react-icons/fa";
import "../assets/css/edititemhome.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Modal from "./Modal";
import { holdReady } from "jquery";

const EditItemHome = () => {
  const { apiURL, apiUrlImg } = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemHome = async () => {
      const res = await axios.get(apiURL + "/createitemhome");
      setItems(res.data);

      console.log({ res: res.data });
    };
    fetchItemHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [modal1, setModal1] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const [acceptDelete, setAcceptDelete] = useState(false);

  const question = (prop) => {
    prop ? setAcceptDelete(true) : setAcceptDelete(false);

    setModal1(false);
  };

  const handleDelete = (item) => {
    setModal1(!modal1);
    setIdDelete(item._id);
  };

  const itemDelete = async () => {
    try {
      await axios.delete(apiURL + "/createitemhome/" + idDelete, {
        data: {
          id: idDelete,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  useEffect(() => {
    acceptDelete && itemDelete();
  }, [acceptDelete]);

  return (
    <div className="edititemhome__container container">
      <h2 class="section__title">Elementos del carrusel</h2>

      <Swiper
        className="home__container container grid"
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={false}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={item._id}
            className={`swiper-slide edititemhome__item-content`}
          >
            <span className="edititemhome__item-number">{index + 1}</span>
            <img
              src={apiUrlImg + "home/" + item.photo}
              alt=""
              className="edititemhome__item-img"
            />

            <div class="edititemhome__item-data">
              <h3 class="edititemhome__item-title">{item.title}</h3>
              <span class="edititemhome__item-description">
                {item.description}
              </span>
            </div>

            <button
              onClick={() => handleDelete(item)}
              class="edititemhome__item-btnDel"
            >
              <FaTrashAlt className="edititemhome__delete-icon" />
            </button>

            <button class="edititemhome__item-btnEdit">
              <FaPen className="edititemhome__edit-icon" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal state={modal1} changeState={setModal1}>
        <h2>modal 1</h2>
        <p>Lorem ipsum voluptatibus repellenum voluptatum?</p>
        <p>{idDelete}</p>
        <button
          className="edititemhome__item-btn-modal"
          onClick={() => question(true)}
        >
          si
        </button>
        <button onClick={() => question(false)}>no</button>
      </Modal>
    </div>
  );
};

export default EditItemHome;
