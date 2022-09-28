import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
  const videoId = video?.videoId;

  return (
    <Card sx = {{ width: { md:  '320px', xs: '100%'},
      boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image = { video?.thumbnails[0].url } 
          alt = { video?.title }
          sx = {{ width:358, height: 180}}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant = 'subtitle1'
            fontWeight = 'bold'
            color = '#FFF'>
              {video.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link 
          to={(video?.avatar?.channelId) ? `/video/${(video?.avatar?.channelId)}` : demoChannelUrl}>
          <Typography variant = 'subtitle2'
            fontWeight = 'bold'
            color = '#gray'>
              {video?.avatar?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
              <CheckCircle sx = {{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard