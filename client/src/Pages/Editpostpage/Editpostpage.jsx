import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Bloglisting/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import useUserStore from '../../Store/Userstore';
import { Editor } from 'primereact/editor';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

function Editpostpage() {
    const location = useLocation();
    const articleData = location.state;  
    const token = sessionStorage.getItem("token");  
    const redirect = useNavigate();
    const user = useUserStore((state) => state.user); 
    const [success, setSuccess] = useState(false);
    const [wait, setWait] = useState(false);

    const [userPost, setUserPost] = useState({
        image: articleData.image,  
        title: articleData.title,
        excerpt: articleData.excerpt,
        body: articleData.body,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUserPost({
            ...userPost,
            [name]: files ? files[0] : value,
        });
    };

    const handleEditorChange = (e) => {
        setUserPost({
            ...userPost,
            body: e.htmlValue,
        });
    };

    const getClaudinaryUrl = async () => {
        const imageUrl = userPost.image;
        if (!imageUrl) return null;

        const data = new FormData();
        data.append("file", imageUrl);
        data.append("upload_preset", "first_project");
        data.append("cloud_name", "dhl9zrcgp");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dhl9zrcgp/image/upload", {
                method: "POST",
                body: data,
            });
            const uploadImageUrl = await response.json();
            return uploadImageUrl.url;
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };


    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: async ({ postData, postId }) => {
            const response = await fetch(`http://localhost:4000/update-post/${postId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
                body: JSON.stringify(postData),
            });

            if (response.ok === false) {
                const error = await response.json();
                throw new Error(error.message);
            }

            return response.json();
        },
        onSuccess: () => {
            setSuccess(true);
            setWait(false);
            setTimeout(() => {
                setSuccess(false);
                redirect("/bloglisting");
            }, 3000);
        },
        onError: (error) => {
            console.error("Update failed:", error.message);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWait(true);

        let imageUrl = articleData.image;

        if (userPost.image && userPost.image instanceof File) {
            imageUrl = await getClaudinaryUrl();
        }

        const newDataSet = {
            image: imageUrl,
            title: userPost.title,
            excerpt: userPost.excerpt,
            body: userPost.body,
        };

        console.log("Submitting post data:", newDataSet);


        mutate({ postData: newDataSet, postId: articleData.id });
    };

    return (
        <>
            <Header firstName={user[0].user.firstName} lastName={user[0].user.lastName} />
            <div className="overall-writting-page">
                <div className="ovearall-form-container card">
                    {isLoading && <div className="alert alert-info">Please wait...</div>}
                    {isError && <div className="alert alert-danger">Could not update post: {error.message}</div>}
                    {success && <div className="alert alert-success">Post updated successfully</div>}
                    {wait && <div className="alert alert-warning">Please wait as we process your request...</div>}

                    <h1 className="write-heading">Edit Post</h1>
                    <form className="blog-form" onSubmit={handleSubmit}>
                        <div className="field-div">
                            <label>Featured Image (optional)</label>
                            <input 
                                name="image" 
                                onChange={handleChange} 
                                className="form-control" 
                                type="file" 
                                accept="image/*" 
                            />
                        </div>
                        <div className="field-div">
                            <label>Title (required)</label>
                            <input 
                                value={userPost.title} 
                                name="title" 
                                onChange={handleChange} 
                                type="text" 
                                placeholder="Enter your title here" 
                                className="form-control" 
                            />
                        </div>
                        <div className="field-div">
                            <label>Excerpt (required)</label>
                            <textarea 
                                value={userPost.excerpt} 
                                name="excerpt" 
                                className="form-control" 
                                onChange={handleChange} 
                                placeholder="Enter excerpt here..." 
                            />
                        </div>
                        <div className="field-div">
                            <label>Body (required)</label>
                            <Editor 
                                value={userPost.body} 
                                onTextChange={handleEditorChange} 
                                className="container-fluid body-editor" 
                            />
                        </div>
                        <div className="write-submit-button">
                            <button className="btn btn-lg" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Editpostpage;


