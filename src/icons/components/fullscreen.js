import React from 'react';
import Icon from './icon'

function FullScreen(props) {
  return (
    //spread operation: Se manda todo un grupo de propiedades, pero, para que haya coincidencia, se deben usar igual los keys.
    <Icon {...props}>
      <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
      <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
      <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
      <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
    </Icon>
  )
}

export default FullScreen;