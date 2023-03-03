import React from 'react'
import './FormChapter.css'

export default function FormChapter() {
    return (
        <form className='form-chapter'>
            <h2 className='new-chapter-title'>New Chapter</h2>
            <div className='chapter-inputs'>
                <div className='input-chapter'>
                    <input type='text' id='title' name='title' placeholder='Insert title' />
                    <p className='line'></p>
                </div>
                <div className='input-chapter'>
                    <input type='text' id='order' name='title' placeholder='Insert order' />
                    <p className='line'></p>
                </div>
                <div className='input-chapter'>
                    <input type='text' id='pages' name='pages' placeholder='Insert pages' />
                    <p className='line'></p>
                </div>
            </div>
            <input type='submit' className='form-chapter-btn' value='Send'></input>
        </form>
    )
}
