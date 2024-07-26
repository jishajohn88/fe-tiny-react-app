import dictionary from '../../dictionary.json'

function WordDefinition(props){
    const {word} = props
    
    return(
        <h1>{word}  {dictionary[word.toUpperCase()]}</h1>
    )

}
export default WordDefinition