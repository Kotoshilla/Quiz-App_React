import { Link } from 'react-router-dom'

import Button from '../UI/Button/Button'

import './FinishedQuiz.css'

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, i) => {
        if (props.results[i] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className='FinishedQuiz'>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'fail' ? 'fa-times fail' : 'fa-check success',
                        'fa'[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{`${index + 1}. `}</strong>
                            {quizItem.question}
                            <i className={cls.join(' ')}></i>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onRetry={props.onRetry}>Повторить</Button>
                <Link to='/'>
                    <Button onRetry={props.onRetry} type="successBtn">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}


export default FinishedQuiz