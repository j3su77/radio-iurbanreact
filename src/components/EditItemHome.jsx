import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";
// import { Link } from "react-router-dom";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import "../assets/css/edititemhome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal";


const EditItemHome = () => {
  const { apiURL, apiUrlImg } = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemHome = async () => {
      const res = await axios.get(apiURL + "/createitemhome");
      setItems(res.data);

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

  function handleDelete(item)  {
    setModal1(!modal1);
     setIdDelete(item);
  };

  const itemDelete = async () => {
    try {
      await axios.delete(apiURL + "/createitemhome/" + idDelete._id, {
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
      <h2 className="section__title">Elementos del carrusel</h2>

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

            <div className="edititemhome__item-data">
              <h3 className="edititemhome__item-title">{item.title}</h3>
              <span className="edititemhome__item-description">
                {item.description}
              </span>
            </div>

            <button
              onClick={() => handleDelete(item)}
              className="edititemhome__item-btnDel"
            >
              <FaTrashAlt className="edititemhome__delete-icon" />
            </button>

            <button className="edititemhome__item-btnEdit">
              <FaPen className="edititemhome__edit-icon" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* -----------Modal Delete Item Home---------- */}
      <Modal
       title="Eliminar item" 
       state={modal1}
        changeState={setModal1}>
        
        <div className="modal__body-delete">
          <div className="modal__body-title">
            <h3>
              ¿Estás seguro que deseas eliminar el siguiente item?
            </h3>
          </div>
        <div className="modal__body-info">
        <img className="modal__body-info-img shadow"
         src={apiUrlImg + "home/" + idDelete.photo}
         alt=""  
         style={{width: "100px"}}
         />
        <div>
        <p className="modal__body-info-title">{idDelete.title}</p>
        </div>
       <div>
        <p className="modal__body-info-description">{idDelete.description}</p>
       </div>
        </div>
        <div className="modal__content-btns-acceptdeny">
        <button
          className="modal__btn-accept "
          onClick={() => question(true)}
        >
          Eliminar
        </button>
        <button 
        className="modal__btn-cancel "
         onClick={() => question(false)}
         >
          Cancelar
          </button>
        </div>
        </div>
        
      </Modal>
    </div>
  );
};

export default EditItemHome;
