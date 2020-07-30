import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './ButtonAwesome.css'
import { Link } from 'react-router-dom';


export default (props) => {
  const {
    type,
    size,
    href,
    link,
    submit,
    text
  } = props

  const Button = () => {
    if ( link ) {
      return (
        <AwesomeButton type={type} /* size={size} */ element={Link} to={link} >{text}</AwesomeButton>
      )
    }
    else if ( href ) {
      return (
        <AwesomeButton type={type} size={size} href={href} >{text}</AwesomeButton>
      )
    }
    else if ( submit ) {
      return (
        <AwesomeButton type={type} size={size} /* element="button" */ >{text}</AwesomeButton>
      )
    }
    else {
      return <AwesomeButton type={type} size={size} >{text}</AwesomeButton>
    }
  }

  return <Button />
}
