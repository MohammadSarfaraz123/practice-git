import React from 'react'
import "./Resturant.css"

const Resturant = () => {
  return (
    <>
      <div className="card-container">
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className='card-title'> Maggi </h2>
                <span className='card-description subtle'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos ut dicta, magnam quidem nesciunt nulla perferendis quos esse quas nam veniam facere similique, soluta architecto! Aut laboriosam illo a.    
                </span>
                <div className='card-read'>Read</div>
                <div>
                   <img src="" alt="" /> 
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default      Resturant
