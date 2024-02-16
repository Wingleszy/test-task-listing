import React, { useState } from 'react'
import searchLogo from '../images/Rectangle 8.png'
import star from '../images/Rectangle 5.svg'
import view from '../images/Rectangle 7.svg'

export const Card = (props) => {
    const {name, avatar, creatorName, rates, views, url,} = props
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState("")




  return (
    <div 
    className="card" 
    >
        <a href={url} target='_blank' className='card__name'>{name}</a>
        <div className="card__creator">
            <img src={avatar} alt="" className='creator__avatar'/>
            <h4 className='creator__name'>{creatorName}</h4>
        </div>
        <div className="card__rates">
            <img src={star} alt="" className='rates__img'/>
            <h5 className='rates__count'>{rates}</h5>
            <img src={view} alt="" className='views__img'/>
            <h5 className='views__count'>{views}</h5>
        </div>
            {comments.map(comment => {
                if(comment.comment !== "") {
                    return <div className="comment">
                        <span className='comment__text'>{comment.comment}</span>
                    </div>
                }
            })}
        <div className="card__comments">
            <input type="text" className='comments__input' placeholder='Комментарий к проекту' value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
            <button className='comments__send' onClick={() => {
                setComments(prev => [...prev, {comment: commentText}] )
                setCommentText("")
                }}><img src={searchLogo} alt="" className='comments__send_btn'/></button>
        </div>
    </div>
  )
}
