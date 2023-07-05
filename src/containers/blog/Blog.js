import React from 'react'
import './blog.css'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'



function Blog() {
  return (
    <div className='Blog'>


      <div className='blog1'> 
        <img src={blog1} />
        <p>Sep 26, 2021</p>
        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
        <p>Read Full Article</p>
      </div>


      <div> 
        <img src={blog2} />
        <p>Sep 26, 2021</p>
        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
        <p>Read Full Article</p>
      </div>


      <div> 
        <img src={blog3} />
        <p>Sep 26, 2021</p>
        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
        <p>Read Full Article</p>
      </div>


      <div> 
        <img src={blog4} />
        <p>Sep 26, 2021</p>
        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
        <p>Read Full Article</p>
      </div>


      <div> 
        <img src={blog5} />
        <p>Sep 26, 2021</p>
        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
        <p>Read Full Article</p>
      </div>

    </div>
  )
}

export default Blog
