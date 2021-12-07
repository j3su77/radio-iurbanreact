import React from 'react'
import SinglePost from '../../components/SinglePost'
import Footer from "../../components/Footer"
import "./postdetails.css"

const PostDetails = () => {
    return (
        <div className="postdetails__container container">
            < SinglePost />
            < Footer />
        </div>
    )
}

export default PostDetails
