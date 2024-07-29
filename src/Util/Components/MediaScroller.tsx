import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

interface MediaItem {
  src: string;
  url: string;
}

interface MediaScrollerProps {
  items: MediaItem[];
  cornerRadius: number;
  height: number;
}

export const MediaScroller: React.FC<MediaScrollerProps> = ({ items, cornerRadius, height }) => {
  return (
    <ScrollContainer>
      {items.map((item, index) => (
        <MediaItem key={index}>
          {/* <a href={item.url} target="_blank" rel="noopener noreferrer"> */}
            <MediaImage src={item.src} alt={`Media item ${index + 1}`} />
          {/* </a> */}
        </MediaItem>
      ))}
    </ScrollContainer>
  );
};

const ScrollContainer = styled('div')({
  // root: {
  display: 'flex',
  overflowX: 'auto',
  // overflowY: 'hidden',
  whiteSpace: 'nowrap',
  scroll: 'smooth',
  padding: '10px 0',
  '-webkit-overflow-scrolling': 'touch',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  // scrollbarWidth: 'none',
  // },
});

const MediaItem = withStyles((theme) => ({
  root: {

    display: 'inline-block',
    marginRight: '10px',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      filter: 'brightness(0.8)',
    },
    width:150,
    height: 150,
    margin: 10,
  },
}))(Box);

const MediaImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// export default MediaScroller;

