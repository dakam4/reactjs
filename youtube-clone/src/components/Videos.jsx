import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from '/';

const Videos = ({ videos, direction }) => {


    return (
         <Stack
             direction={ direction || 'row'}
             flexWrap='wrap'
             justifyContent='Start'
             gap={2}    
         >
             {videos.map((item, index) => (
                  <Box key = {index}>
                      {item.video && <VideoCard video={item.video} />}
                      {item.channel && <ChannelCard channelDetail={item.channel} />} 
                  </Box>
             ))}
         </Stack>
  )
};

export default Videos;