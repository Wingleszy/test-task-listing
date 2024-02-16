import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const CardList = (props) => {
    const { repos, countPages, currentPage} = props
    
    return (
        <div className="card-list">
            {repos.map(((project, index) => {
                if (index < countPages * currentPage - 1 && index > countPages * currentPage - 1 - countPages - 1) {
                    return <Card
                        id={project.id}
                        order={index}
                        name={project.name}
                        url={project.html_url}
                        avatar={project.owner.avatar_url} 
                        creatorName={project.owner.login} 
                        rates={project.stargazers_count} 
                        views={project.watchers_count} 
                        />
                } else {
                    return null
                }
            }))}
        </div>

    )
}
