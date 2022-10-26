import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {
  let cls = 'AnswerItem'

  if (props.state === 'success') {
    console.log('success')
    cls = 'AnswerItem success'
  } else if (props.state === 'fail') {
    console.log('fail')
    cls = 'AnswerItem fail'
  }

  return (
    <li
      className={cls}
      onClick={() => props.onAnswer(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem