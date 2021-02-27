import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Review = () => {
  const [index, setIndex] = useState(0);


  const { name, job, image, text } = people[index];
  
  const checkNumber = number => number > people.length - 1 ? 0 : number < 0 ? people.length - 1 : number;
  
  const nextPerson = () => setIndex(prev => checkNumber(prev + 1))
  
  const prevPerson = () => setIndex(prev => checkNumber(prev - 1))
  
  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    setIndex(() => newIndex <= people.length - 1 ? newIndex : 0);
    return newIndex;
  }

  return (
    <h2>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{ name }</h4>
        <p className="job">{ job }</p>
        <p className="info">{ text }</p>
        <div className="button-container">
          <button className="prev-btn" onClick={ () => prevPerson() }><FaChevronLeft /></button>
          <button className="next-btn" onClick={ () => nextPerson() }><FaChevronRight /></button>
        </div>
        <button className="random-btn" onClick={ () => randomPerson() }>suprise me</button>
      </article>
    </h2>
  )
};

export default Review;
