import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
  const videoId = video?.videoId;
  const channelId = video?.author?.channelId;

  return (
    <Card sx = {{ width: { xs: '100%', sm: '358px', md:  '320px' },
      boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image = { video?.thumbnails[0].url } 
          alt = { video?.title }
          sx = {{ width:{
            xs: '100%', sm: '358px', md: '320px'
          }, height: 180}}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '60px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant = 'subtitle1'
            fontWeight = 'bold'
            color = '#FFF'>
              {video.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link 
          to={(channelId) ? `/channel/${(channelId)}` : '#'}>
          <Typography variant = 'subtitle2'
            fontWeight = 'bold'
            color = '#gray'>
              {video?.author?.title.slice(0, 60) || ''}
              {channelId ? <CheckCircle sx = {{ fontSize: 12, color: 'gray', ml: '5px' }} /> : ''}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard