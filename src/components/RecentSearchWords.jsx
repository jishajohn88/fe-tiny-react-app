import { useState } from "react"

function RecentSearchWords (props) {
    const {recentWords} = props
    return (
    <>
        <h2>Recent Searches</h2>
        <ul>
            {recentWords.map((word , index) => {
                return <li key={index}>{word}</li>
            })}
        </ul>
    </>)
}

export default RecentSearchWords