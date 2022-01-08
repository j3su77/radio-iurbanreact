import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import dateformat from "dateformat";
import { FaPen, FaTrashAlt, FaLink } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import Category from "./Category";

import "../assets/css/singlepost.css"
import Spinner from "./Spinner";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user, apiUrlImg, apiURL } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [cats, setCats] = useState([]);
 


  const fecha = new Date(post.createdAt).toDateString();
  let isEdit  = post.createdAt === post.updatedAt;
  const temp = [];

  

  useEffect(() => {
   
    
    const getPost = async () => {
      try {
      
        const res = await axios.get(`${apiURL}/posts/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
       
        temp(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);



  var catTrue = [];




  useEffect(() => {

   
    const fetchCats = async () => {
      try {
        const res = await axios.get(apiURL + "/categories");
        setCats(res.data);
      
        console.log(res);
      } catch (error) {
        console.log(error);
      
      }
    };
    fetchCats();

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckboxChange = (id, checked) => {
    if (checked) {
      catTrue.push(id);
    }

    if (!checked) catTrue = catTrue.filter((word) => word !== id);
  };


  const handleDelete = async () => {
    try {
      await axios.delete(apiURL + "/posts/" + path, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    const catsSelect = [];

    for (let ca of catTrue) {
      catsSelect.push({ name: ca });
    }

    const conjunto = new Set(catsSelect);
    const unicos = [...conjunto];

    console.log(unicos);

    try {
      await axios.put(apiURL + "/posts/" + path, {
        username: user.username,
        categories: unicos,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    post.username ? (
      <>
        <div
          className={`grid`}
        >
          <div
            className="singlepost__content-img"
            
          >
            {post && post.photo && (
              <img
                className="singlepost__img"
                src={
                  post.photo.includes("http")
                    ? post.photo
                    : apiUrlImg + post.photo
                }
                alt=""
                style={{ height: "270px" }}
              />
            )}
          </div>

          {user && post && post.username === user.username && (
            <div className="edit__postsingle grid">
            
                {!updateMode && (
                  <div className="postsingle__content-edit">
                    <FaPen
                    className="postsingle__edit-icon"
                    onClick={() => setUpdateMode(true)}
                  />
                  </div>
                  
                )}
                {updateMode && (
                  <div className="postsingle__content-cancel">

                    <MdCancel
                      className="postsingle__cancel-icon" 
                      onClick={() => setUpdateMode(false)}
                    />
                  </div>
                )}
              

              <div className="postsingle__content-delete">
                <FaTrashAlt
                  className="postsingle__delete-icon "
                  onClick={handleDelete}
                />
              </div>
            </div>
          )}
           {
            !isEdit && (

          <div className="postsingle__content-isedit">
            Editado
          </div>
            )
          }
          <div className="info__postsingle grid">
          <div className="postsingle__content-user">
            by:
            <Link to={`/?user=${post.username}`} >
              <span className="postsingle__user">
                {`  ${post.username}`}
                <FaLink className="postsingle__user-icon" />
              </span>
            </Link>
          </div>
          
         

          <div className="postsingle__content-createddate">
            Creado:
          <span className="postsingle__createddate">
                {`  ${dateformat(fecha, "dd/ mm / yyyy")}`}{"   "}
                
              </span>
            
          </div>
          </div>


          <div className="singlepost__title">
            {updateMode ? (
              <input
                type="text"
                value={title}
                className=" mt-12"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1 className="">
                {title}
              </h1>
            )}
          </div>

          {updateMode ? (
            <textarea
              className="col-start-1 col-end-7 mt-20 bg-black border-none focus:outline-none"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="10"
            ></textarea>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: desc }}
              className="singlepost__description"
            ></div>
          )}

          {updateMode && (
              <div class="col-start-2 col-end-8 grid grid-cols-2 gap-2 justify-center items-center">
              <h1 class="text-white my-10 col-span-full text-center">Categorias</h1>
    
              {cats.map((cat, index) => (
                <Category
                  key={index}
                  cat={cat}
                  id={cat.name}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          )}

          {updateMode && (
            <button
              className="col-start-3 col-end-5 bg-indigo-600 mt-20 mb-14 p-3"
              onClick={handleUpdate}
              type="submit"
            >
              update
            </button>
          )}
        </div>
      </>
    ) :  <div className="content__spinner"><Spinner /> </div>
  );
};

export default SinglePost;

