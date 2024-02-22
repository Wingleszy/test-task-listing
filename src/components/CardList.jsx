import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const CardList = (props) => {
    const { repos, countPages, currentPage, setRepos} = props
    
    const deleteHandler = (id) => {
        setRepos(prev => {
            return [
                ...prev.filter(el => el.id != id)
            ]
        })
    }

    return (
        <div className="card-list">
            {repos.map(((project, index) => {
                if (index < countPages * currentPage && index > countPages * currentPage - countPages - 1) {
                    return <Card
                        key={project.id}
                        id={project.id}
                        order={index}
                        name={project.name}
                        url={project.html_url}
                        avatar={project.owner.avatar_url} 
                        creatorName={project.owner.login} 
                        rates={project.stargazers_count} 
                        views={project.watchers_count} 
                        userUrl={project.owner.html_url}
                        desc={project.description}
                        deleteHandler={() => deleteHandler(project.id)}
                        />
                } else {
                    return null
                }
            }))}
        </div>

    )
}
