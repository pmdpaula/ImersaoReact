import React from 'react';
import { PropTypes } from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard/VideoCard';
import Slider, { SliderItem } from './components/Slider/Slider';

const Carousel = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object.isRequired,
};

export default Carousel;
