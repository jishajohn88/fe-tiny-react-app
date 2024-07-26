import { useState } from "react"
import WordDefinition from "./WordDefinition"
import dictionary from '../../dictionary.json'

function WordInput(props){

    const [wordInput,setWordInput] = useState("")
    const {setWord , setRecentWords , setValidWord} = props


    function handleChange(event) {
        const rejects = /[a-zA-Z]/g
        if (event.target.value.match(rejects)) {
            setWordInput(event.target.value)   
        }
    }
    function handleClick(event){
        event.preventDefault()
        setWord(wordInput)
        setWordInput("")
        setRecentWords(recentWords => {
            const recentWordsCopy = [...recentWords]
            if (dictionary[wordInput.toUpperCase()]) {
                recentWords.push(wordInput)
                setValidWord(true)
            } else {
                setValidWord(false)
            }
            console.log(recentWords)
            return recentWords
        })
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