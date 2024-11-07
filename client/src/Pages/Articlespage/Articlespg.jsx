import React from 'react'
import './articlespg.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Articlescards from '../../Components/Bloglisting/Articles/Articlescards'
function Articlespg() {
  return (
    <div className='overall-articles-page'>
        <Articlescards linkType = "otherArticles" reqApi = "http://localhost:4000/articles"/>
        </div>
  )
}

export default Articlespg