import React, { useState } from 'react';
import './writepage.css';
import Header from '../../Components/Bloglisting/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import useUserStore from '../../Store/Userstore';
import { Editor } from 'primereact/editor';
import { useMutation } from 'react-query';

function Writepg() {
    const user = useUserStore((state) => state.user);
    const [dataSet, setnewDataSet] = useState(null);

    const [userPost, setUserPost] = useState({
        image: null,
        title: "",
        excerpt: "",
        body: ""
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUserPost({
            ...userPost,
            [name]: files ? files[0] : value  
        });
    };

    const handleEditorChange = (e) => {
        setUserPost({
            ...userPost,
            body: e.htmlValue
        });
    };

    const getClaudinaryUrl = async () => {
        const imageUrl = userPost.image;
        if (!imageUrl) return;

        const data = new FormData();
        data.append("file", imageUrl);
        data.append("upload_preset", "first_project");
        data.append("cloud_name", "dhl9zrcgp");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dhl9zrcgp/image/upload", {
                method: "POST",
                body: data
            });
            const uploadImageUrl = await response.json();
            return uploadImageUrl.url;
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: async (postData) => {
            const response = await fetch(`http://localhost:4000/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            });
            return response.json();
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Wait for the image URL to be retrieved
        const imageUrl = await getClaudinaryUrl();
        const newDataSet = {
            image: imageUrl,
            title: userPost.title,
            excerpt: userPost.excerpt,
            body: userPost.body
        };

        // Set dataSet and then run mutate only if newDataSet is valid
        setnewDataSet(newDataSet);
        
        if (newDataSet.image) {
            mutate(newDataSet);
        } else {
            console.error("Image URL is missing, post submission halted.");
        }
    };

    return (
        <>
            <Header firstName={user[0].first_Name} lastName={user[0].last_Name} />
            <div className='overall-writting-page'>
                <div className="ovearall-form-container card">
                    <h1 className='write-heading'>Publish post</h1>
                    <form className="blog-form" onSubmit={handleSubmit}>
                        <div className='field-div'>
                            <label>Featured Image (required)</label>
                            <input name='image' onChange={handleChange} className='form-control' type="file" accept="image/*" />
                        </div>
                        <div className='field-div'>
                            <label>Title (required)</label>
                            <input name='title' onChange={handleChange} type="text" placeholder="Enter your title here" className='form-control' />
                        </div>
                        <div className='field-div'>
                            <label>Excerpt (required)</label>
                            <textarea name='excerpt' className='form-control' onChange={handleChange} placeholder="Enter excerpt here..." />
                        </div>
                        <div className='field-div'>
                            <label>Body (required)</label>
                            <Editor onTextChange={handleEditorChange} className='container-fluid body-editor' />
                        </div>
                        <div className="write-submit-button">
                            <button className='btn btn-lg' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Writepg;
