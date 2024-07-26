import RecentSearchWords from "./RecentSearchWords";
import WordDefinition from "./WordDefinition";
import WordInput from "./WordInput";
import { useState } from "react";

function Words(){
        const [word,setWord] = useState("") 
        const [recentWords , setRecentWords] = useState([])
        const [validWord , setValidWord] = useState(true)
    return(
        <>
        <WordInput setWord={setWord} setRecentWords={setRecentWords} setValidWord={setValidWord}/>
        <WordDefinition word={word} validWord={validWord}/>
        <RecentSearchWords recentWords={recentWords}/>
        </>
    )
}

export default Words