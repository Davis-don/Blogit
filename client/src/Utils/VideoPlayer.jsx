import vidvector from '../assets/vid.mp4'

import React from 'react';

const vidStyle={
  width:"100%",
  height:"100%",
  objectFit:"cover"

}

const VideoPlayer = () => {
  return (
    <video
      src={vidvector}   
      autoPlay
      loop        
      muted      
      style={vidStyle}
      
    />
  );
};

export default VideoPlayer;
