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
        <div>
          <p>Sep 26, 2021</p>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
          <p className='read-more'>Read Full Article</p>
        </div>
      </div>


      <div> 
        <img src={blog2} />
        <div>
          <p>Sep 26, 2021</p>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
          <p>Read Full Article</p>
        </div>
      </div>


      <div> 
        <img src={blog3} />
        <div>
          <p>Sep 26, 2021</p>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
          <p>Read Full Article</p>
        </div>
      </div>


      <div> 
        <img src={blog4} />
          <div>
          <p>Sep 26, 2021</p>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
          <p>Read Full Article</p>
        </div>
      </div>


      <div> 
        <img src={blog5} />
          <div>
          <p>Sep 26, 2021</p>
          <h4>GPT-3 and Open  AI is the future. Let us exlore how it is?</h4>
          <p>Read Full Article</p>
        </div>
      </div>

    </div>
  )
}

export default Blog
