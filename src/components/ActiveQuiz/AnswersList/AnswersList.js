
import AnswerItem from './AnswerItem/AnswerItem'

import './AnswersList.css'

const AnswersList = props => {
    return (
        <ul className='AnswersList'>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem key={index} 
                                answer={answer}
                                onAnswer={props.onAnswer}
                                state={props.state ? props.state[answer.id] : null}/>
                )
            }) }
        </ul>
    )
}

export default AnswersList