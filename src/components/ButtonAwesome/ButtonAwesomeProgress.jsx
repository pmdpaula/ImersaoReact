import React from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';
import './ButtonAwesome.css'
import { Link } from 'react-router-dom';


export default (props) => {
  const {
    type,
    size,
    href,
    link,
    submit,
    text,
    loadingLabel,
    resultLabel
  } = props

  const Button = () => {
    if ( link ) {
      return (
        <AwesomeButtonProgress type={type} loadingLabel={loadingLabel} resultLabel={resultLabel} /* size={size} */ element={Link} to={link} >{text}</AwesomeButtonProgress>
      )
    }
    else if ( href ) {
      return (
        <AwesomeButtonProgress type={type} loadingLabel={loadingLabel} resultLabel={resultLabel} size={size} href={href} >{text}</AwesomeButtonProgress>
      )
    }
    else if ( submit ) {
      return (
        <AwesomeButtonProgress type={type} loadingLabel={loadingLabel} resultLabel={resultLabel} size={size} element="button" >{text}</AwesomeButtonProgress>
      )
    }
    else {
      return <AwesomeButtonProgress type={type} loadingLabel={loadingLabel} resultLabel={resultLabel} size={size} >{text}</AwesomeButtonProgress>
    }
  }

  return <Button />
}
