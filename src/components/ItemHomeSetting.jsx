import { useState,  useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { FaUpload } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import FormInput from "../components/FormInput";


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

    const newItemHome = {
      creator: user.username,
      title,
      description: desc,
      linkbtn: link,
      button: checkedLink,
      reverse: checkedReverse,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;

      data.append("name", filename);
      data.append("file", file);

      newItemHome.photo = filename;

      try {
        await axios.post(apiURL + "/uploadhome", data);
      } catch (error) {}
      try {
        const res = await axios.post(apiURL + "/createitemhome", newItemHome);
        window.location.replace("/");
      } catch (error) {}
    }
  };

  return (
    <div className="itemhomesetting__container container grid">
      <form  className="itemhomesetting__form" onSubmit={handleSubmit}>
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

              <label className="itemhomesetting__content-bnt-file"  >

   
        {/*----------- file -------------*/}

                <FormInput
                 id="src-file1"
                 required={true}
                 errorMessage=
                 "Por favor, selecciona una imagen" 
                  type="file"
                  className="file-select"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </>
          ) : (
            <label className="button">
              <FaUpload className="itemhomesetting__icon" />
              cambiar una imagen
              <FormInput
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          )}
        </div>

        {/*----------- title -------------*/}
        <div>
          <div className="form__group field itemhomesetting__content-title">
            <FormInput
             required={true}
             name="title"
              type="text"
              className="form__field itemhomesetting__title"
              errorMessage=
                "El titulo deberia tener al menos 5 caracteres"
             
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="name" className="form__label">
              titulo
            </label>
          </div>

          <div className="form__group field itemhomesetting__content-description">
        {/*----------- description -------------*/}

            <FormInput
             required={true}
              className=" form__field itemhomesetting__description"
              placeholder="ingresa la informacion"
              errorMessage=
              "La descripción deberia tener al menos 5 caracteres"
              type="text"
            
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor="name" className="form__label">
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

            <label htmlFor="switchw">Toggle</label>
            <span className="span-text">invertir orden</span>
          </div>

          <div className="itemhomesetting__checkbox-link">
            <input
              type="checkbox"
              id="switch"
              onChange={() => setCheckedLink(!checkedLink)}
            />
            <label htmlFor="switch">Toggle</label>
            <span className="span-text">ingresar link</span>
          </div>
        </div>

        <div className="form__group field itemhomesetting__content-link">
          {
            checkedLink && (
              <>
        {/*----------- link -------------*/}

              <FormInput
              type="text"
              placeholder=""
              errorMessage=
              "El link deberia tener al menos 5 caracteres."
              className="form__field itemhomesetting__title"
              onChange={(e) => setLink(e.target.value)}
              required={true}
           
            />
            <label htmlFor="name" className="form__label">
              link
            </label>
            </>
            )
          }
         
        </div>

        <div className="itemhomesetting__content-btn-submit">
          <button type="submit" className="button itemhomesetting__btn-submit">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemHomeSetting;
