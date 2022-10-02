import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material'

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
     fetchFromAPI(`channel/details/?id=${id}`)
       .then((data) => setChannelDetail(data));

    fetchFromAPI(`channel/videos/?id=${id}`)
      .then((data) => setVideos(data?.contents));
  }, [id]);

  if((channelDetail === null)) {
    return <CircularProgress />;  //To be redesigned later
  }

  return (
    <Box minHeight= '95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,62,121,0.875) 27%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
          }}>
        </div>

        <ChannelCard
          channelDetail = {channelDetail}
          marginTop = '-110px'
        />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' }}} />
        <Videos 
          videos={videos}
        />
      </Box>
    </Box>
  )
}

export default ChannelDetail