import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Context } from "../../context/Context";

import PostItem from "../../components/PostItem"
import "./postsection.css"

const PostSection = () => {
    const [posts, setPosts] = useState([]);
    const { apiURL } = useContext(Context);

    useEffect(() => {
      
    
        const fetchPosts = async () => {
          const res = await axios.get(apiURL + "/posts/" );
          setPosts(res.data);
          console.log(res);
         
        };
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <section class="post__container container" id="products">
             <h2 class="post__section-title section__title">
              Publicaciones
          </h2>
           <div  class="posts__content grid">

            {posts.map(post =>(
            <PostItem key={post._id} post={post}/>
            ))}
           
           </div>
           
        </section>
    )
}

export default PostSection
