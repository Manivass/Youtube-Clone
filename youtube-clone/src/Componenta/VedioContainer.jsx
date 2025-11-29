import React from 'react'
import ButtonList from './ButtonList';

import VediosCards from './VediosCards';

function VideoContainer() {
  
  
  return (
    <div className="col-span-11   p-2 ">
      <ButtonList />
      <VediosCards/>
    </div>
  )
}

export default VideoContainer ;