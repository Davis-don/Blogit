import React from 'react'
import './writepage.css'
import Header from '../../Components/Bloglisting/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactQuill from 'react-quill';
import useUserStore from '../../Store/Userstore'
import { Editor } from 'primereact/editor';

function Writepg() {
    const user = useUserStore((state) => state.user);
  return (

    <>    
     <Header firstName={user[0].first_Name} lastName={user[0].last_Name}/>
    <div className='overall-writting-page'>
        
        <div className="ovearall-form-container card">
            <h1 className='write-heading'>Publish post</h1>
            <form className="blog-form">
            <div className='field-div'>
                <label>Featured Image (required)</label>
                <input className='form-control' type="file" accept="image/*"  required />
            </div>
            <div className='field-div'>
                <label>Title (required)</label>
                <input
                    type="text"
                    placeholder="Enter your title here"
                    required
                    className='form-control'
                />
            </div>
            <div className='field-div'>
                <label>Excerpt (required)</label>
                <textarea className='form-control'
                    placeholder="Enter excerpt here..."
                    required
                />
            </div>
            
            <div className='field-div'>
            <label>Body (required)</label>
            <Editor className='container-fluid body-editor' />
            </div>

            <div className="write-submit-button ">
            <button className='btn btn-lg' type="submit">Submit</button>
            </div>
            
        </form>
        </div>
        </div>
        </>

  )
}

export default Writepg