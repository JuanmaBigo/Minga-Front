import React from 'react'
import ThumbsUp from '../../../assets/img/ThumbsUp.png'
import ThumbsDown from '../../../assets/img/ThumbsDown.png'
import Surprised from '../../../assets/img/Surprised.png'
import InLove from '../../../assets/img/InLove.png'
import './LikeButtons.css'

export default function LikeButtons() {
  return (
    <div className='like-buttons'>
      <button><img src={ThumbsUp}></img></button>
      <button><img src={ThumbsDown}></img></button>
      <button><img src={Surprised}></img></button>
      <button><img src={InLove}></img></button>
    </div>
  )
}
