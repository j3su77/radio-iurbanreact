import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { FaUpload } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

import "../assets/css/itemhomesetting.css";
const ItemHomeSetting = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const { user, apiURL } = useContext(Context);
  const [checkedLink, setCheckedLink] = useState(false);
  const [checkedReverse, setCheckedReverse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;

      data.append("name", filename);
      data.append("file", file);

      newPost.photo = filename;

      try {
        await axios.post(apiURL + "/upload", data);
      } catch (error) {}
      try {
        const res = await axios.post(apiURL + "/posts", newPost);

        window.location.replace("/post/" + res.data._id);
      } catch (error) {}
    }
  };

  return (
    <div className="itemhomesetting__container container grid">
      <form className="itemhomesetting__form" onSubmit={handleSubmit}>
        <div className="itemhomesetting__content-img">
          {file && (
            <img
              className="itemhomesetting__img"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}
          {!file ? (
            <>
              <BiImageAdd className="itemhomesetting__img-icon" />

              <label class="">
                <span class="button">
                  <FaUpload className="itemhomesetting__icon" />
                  Subir imagen
                </span>
                <input
                  type="file"
                  id="fileInput"
                  class="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </>
          ) : (
            <label class="button">
              <FaUpload class="itemhomesetting__icon" />
              cambiar una imagen
              <input
                type="file"
                id="fileInput"
                class="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          )}
        </div>

        {/*----------- title -------------*/}
        <div>
          <div class="form__group field itemhomesetting__content-title">
            <input
              type="text"
              placeholder="Titulo de la publicación"
              className="form__field itemhomesetting__title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label for="name" class="form__label">
              titulo
            </label>
          </div>

          <div className="form__group field itemhomesetting__content-description">
            <textarea
              className=" form__field itemhomesetting__description"
              placeholder="ingresa la informacion"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label for="name" class="form__label">
              descripción
            </label>
          </div>
        </div>

        <div className="itemhomesetting__checkbox">
          <div className="itemhomesetting__checkbox-reverse">
            <input 
            type="checkbox"
             id="switchw" 
             onChange={() => setCheckedReverse(!checkedReverse)}
             />
            
            <label for="switchw">Toggle</label>
            <span className="span-text">invertir orden</span>
            
          </div>

          <div className="itemhomesetting__checkbox-link">
            <input
              type="checkbox"
              id="switch"
              onChange={() => setCheckedLink(!checkedLink)}
            />
            <label for="switch">Toggle</label>
            <span className="span-text">ingresar link</span>
           
          </div>
        </div>

        <div class="form__group field itemhomesetting__content-link">
          <input
            type="text"
            placeholder="Titulo de la publicación"
            className="form__field itemhomesetting__title"
            onChange={(e) => setLink(e.target.value)}
            disabled={!checkedLink}
          />
          <label for="name" class="form__label">
            link
          </label>
        </div>

        <button type="submit" className="button">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default ItemHomeSetting;
