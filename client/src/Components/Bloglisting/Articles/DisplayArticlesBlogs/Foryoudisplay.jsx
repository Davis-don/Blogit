import React from 'react'
import './foryoudisplay.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import testimg from '../../../../assets/test1.jpg'

function Foryoudisplay() {
  return (
    <>

    <div className='overall-for-you-display-card'>
        <div className="for-you-all-header">
        <h1>My 7 Income Sources With One AI Tool</h1>
        <h3 className='text-secondary'>This is my story</h3>
        </div>
        <div className="user-cred-for-you-all">
            <div className="user-avatar rounded-circle">

            </div>
            <div className="user-name-cred">
                <h4>Davis Ikou</h4>
                <h5 className='text-secondary'>5th november 2024</h5>
            </div>
        </div>
        <div className="hero-for-you-all">
                <img src={testimg} alt ="post image"/>
        </div>
        <div className="content-body-section-for-you">
            <p className='body-content-for-you'>I was in tech but not a fan of AI.

Two reasons for it —

AI was taking away jobs (I am taking this from news)
I don’t have much knowledge about it
I had a colleague from my day job who happened to run a small company. That company had only one employee.
<br/>
<br/>

You guessed it right. It was only him. that’s all.
<br/>
<br/>

I never asked him how much he made but from his car and the vacations he takes every now and then, I was pretty much sure that did came from our day job. Our salary was really low.
<br/>
<br/>
I put up some courage one day to ask him how he was able to do all this.
<br/>
<br/>
He didn’t share much. But all he said was, “I use AI to run my businesses.”
<br/>
<br/>
He didn’t tell me which tool, or which field he is working in. Even I didn’t ask. I was happy to get some pointers.
<br/>
<br/>
The world is moving faster than I have imagined. I used to wait for weeks for my parents to agree to take us to watch a movie in the theatre. And now it’s just one click and all new movies can be easily browsed online.
<br/>
<br/>
I started searching for AI tools and learned some things about AI — It was incredible.</p>
        </div>
        </div>
        
        <div className="for-you-footer-section">
            <div className="user-cred-card-footer">
                <div className="user-card-footer-img rounded-circle"></div>
                <div className="bottom-text-content-footer-for-u">
                    <h2>Written by Greece Aberdeen</h2>
                    <h4 className='text-secondary'>I tried many side hustles. Many failed, some succeeded.</h4>

                    <div className="see-more-for-you-btn">
                    <button className='btn btn-outline-dark'>See all from Greece Aberdeen</button>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
  )
}

export default Foryoudisplay