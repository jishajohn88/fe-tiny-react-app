import WordDefinition from "./WordDefinition";
import WordInput from "./WordInput";
import { useState } from "react";

function Words(){
        const [word,setWord] = useState("") 
    return(
        <>
        <WordInput setWord={setWord}/>
        <WordDefinition word={word}/>
        </>
    )
}

export default Words