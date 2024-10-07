import React from 'react'
import PropTypes from 'prop-types'
// const newMessage = {
//     message:'Hola',
//     title:'Nicol Tapasco'
// }


export const FirstApp = ({title, subTitle, name}) => {
  return (
  <>
  <h3>{title}</h3>
      {/* <h3>{JSON.stringify(newMessage)}</h3> */}
      <p>{subTitle}</p>
      <h4>{name}</h4>
  </>
  )
}
FirstApp.prototype = {
title: PropTypes.string.isRequired,
subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Nicol Tapasco',
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
}