import dictionary from '../../dictionary.json'

function WordDefinition(props){
    const {word , validWord} = props
    if (validWord) {
        return(
            <h2>{word} {dictionary[word.toUpperCase()]}</h2>
        )
    } else {
        return <p>No definition available</p>
    }

}
export default WordDefinition