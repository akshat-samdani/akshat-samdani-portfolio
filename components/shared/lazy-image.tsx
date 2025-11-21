import * as React from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import { Box, Image } from '@chakra-ui/react';

type LazyImageProps = {
  src: string;
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, blurHash, width, height, rounded } = props;
  const placeholder = '/assets/images/placeholder.png';
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <Box position="relative" width={width} height={height}>
      {!isLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          width={width}
          height={height}
          punch={1}
          style={{ borderRadius: rounded ? '5px' : '' }}
        />
      )}
      <Image
        src={src}
        objectFit="cover"
        alt="cover image"
        width={width}
        height={height}
        rounded={rounded}
        fallbackSrc={placeholder}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        display={isLoaded ? 'block' : 'none'}
      />
    </Box>
  );
};

export default LazyImage;