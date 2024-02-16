import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import arrow from './images/Rectangle 11.png'

function App() {

  const [repos, setRepos] = useState(() => {
    if (localStorage.getItem("repos")) {
      return JSON.parse(localStorage.getItem("repos"))
    } else {
      return []
    }
  })
  const [isLoading, setLoading] = useState([false])
  const [countPages, setCountPages] = useState(10)
  const [currentPage, setCurrentPage] = useState(() => {
    if (+localStorage.getItem("currentPage")) {
      return +localStorage.getItem("currentPage")
    } else {
      console.log(localStorage.getItem("currentPage"));
      return 1
    }
  })

  const pagesCount = Math.ceil(repos.length /countPages)
  const arr = []

  for(let i = 0; i < pagesCount; i++) {
    arr.push(i + 1)
  }

  const getRepos = (query) => {
    if(query.length >= 3) {
      fetch(`https://api.github.com/search/repositories?q=${query}`).then(data => data.json()).then(res => {
        setRepos(res.items)
        setLoading(true)
      })
    }
  }

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repos))
    localStorage.setItem("currentPage", currentPage)
  })

  return (
    <div className="App">
      <Header getRepos={getRepos} setLoading={setLoading} />
      {
        isLoading ? <>
        <CardList repos={repos} countPages={countPages} currentPage={currentPage} setRepos={setRepos} /> 
        <div className="pages">
          <select className="select" onChange={(e) => {setCountPages(e.target.value)}}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <div className="select__page">
            <img src={arrow} alt="" onClick={() => setCurrentPage(prev => {
              if(prev > 1) {
                return prev - 1
              } else {
                return prev
              }
              })}/>
            {arr.map((page, index) => {
              if(index + 1 === currentPage) {
                return <button className="page__num" id="active" value={page} onClick={(e) => {setCurrentPage(+e.target.value)}}>
                  {page}
                </button>
              } else {
                return <button className="page__num" value={page} onClick={(e) => {setCurrentPage(+e.target.value)}}>
                  {page}
                </button>
              }
            })}
            <img src={arrow} alt="" className="reversed" onClick={() => setCurrentPage(prev => {
              if(prev < pagesCount) {
                return prev + 1
              } else {
                return prev
              }
              })}/>
          </div>
        </div>

        </>
     : <div className="loader">Поиск проектов...</div>
      }
    </div>
  );
}

export default App;
