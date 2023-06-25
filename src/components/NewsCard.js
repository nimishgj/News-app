import React from 'react'
import "../style/newscard.css"

export default function NewsCard(props) {
  return (
    <div className='box'>
      <img className="imgg" src={props.imageurl} alt="News Image" />

      <div className='title'>{props.title}</div>
      <div className='body'>{props.body}</div>
        <div className="link" onClick={()=> window.open(props.link,'_blank')}>Click for more details</div>
    </div>
  )
}
