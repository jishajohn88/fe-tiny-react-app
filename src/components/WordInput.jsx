import { useState } from "react"
import WordDefinition from "./WordDefinition"

function WordInput(props){

    const [wordInput,setWordInput] = useState("")
    const {setWord} = props


    function handleChange(event) {
        setWordInput(event.target.value)
    }
    function handleClick(event){
        event.preventDefault()
        setWord(wordInput)
        setWordInput("")
    }
    return(
        <>
        <form>
            <label htmlFor="word-input">Input Word</label>
            <input type="text" id="word-input" onChange={handleChange} value={wordInput}/>
            <button onClick={handleClick}>Search</button>
        </form>
        </>
    )
}
export default WordInput