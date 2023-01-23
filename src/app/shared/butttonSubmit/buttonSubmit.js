import React from 'react'

export default function ButtonSubmit({functButton, textButton}) {
  return (
    <button className='buttonDos14Orange rounded-4 p-2' onClick={functButton}>{textButton}</button>
  )
}
