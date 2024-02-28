import React, { useEffect } from 'react'

export const Modal = (props) => {
    const { name, creatorName, rates, views, desc, reff, setCreatorName, setName, setDesc } = props 
    
  return (
    <div className='modal' ref={reff}>
      <div className="row">

        <span>Название проекта: </span>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
      </div>
      <div className="row">

        <span>Имя пользователя: </span>
        <input type="text" value={creatorName} onChange={(e) => {setCreatorName(e.target.value)}} />
      </div>
        <span>Оценки: {rates} </span>
        <span>Просмотры: {views} </span>
      <div className="row">

        <span>Описание: </span>
        <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} />
      </div>
    </div>
  )
}
