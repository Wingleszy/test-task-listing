import React, { useState } from 'react'
import searchLogo from '../images/Rectangle 17.png'

export const Header = (props) => {
    const {getRepos, setLoading, searchParams, searchQuery} = props
    const [query, setQuery] = useState(localStorage.getItem("query"))
  return (
    <header className='header'>
        <input type="text" className='header__input' placeholder='Начните вводить текст для поиска (не менее трех символов)' onBlur={() => searchParams({search: query})} onChange={(e) => {
          setQuery(e.target.value)
        }} value={query}/>
        <button className='header__search' onClick={() => {
            setLoading(false)
            getRepos(searchQuery)
            localStorage.setItem("query", query)
            }}><img src={searchLogo} alt="" className='header__search_btn'/></button>
    </header>
  )
}
