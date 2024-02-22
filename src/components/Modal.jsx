import React, { useEffect } from 'react'

export const Modal = (props) => {
    const { name, creatorName, rates, views, desc, reff } = props 
    
  return (
    <div className='modal' ref={reff}>
        <span contentEditable>Название проекта: {name} </span>
        <span contentEditable>Имя пользователя: {creatorName} </span>
        <span contentEditable>Оценки: {rates} </span>
        <span contentEditable>Просмотры: {views} </span>
        <span contentEditable>Описание: {desc} </span>
    </div>
  )
}
