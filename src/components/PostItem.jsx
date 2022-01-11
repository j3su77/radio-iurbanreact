import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const PostItem = ({ post }) => {
    const { apiUrlImg } = useContext(Context)

  return (
    <Link to={`/post/${post._id}`}  className="post__content" key={post._id}>
      <img src={apiUrlImg + post.photo} alt="" className="post__img" />
      <div className="description__post">
        <h3 className="post__title">
        {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default PostItem;
