"use client"
import { Audio } from 'react-loader-spinner' 

export default   function loading() {
  return (
    <>
    <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
    </>
  )
}

