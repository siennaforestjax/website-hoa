import React, { useState } from 'react';
import LoadingSvg from '../LoadingSvg/LoadingSvg';
import classes from './ImageWithLoadingFallback.module.css';

type ImageWithLoadingFallbackProps = {
  source: string;
  altText: string;
  loadingScale?: number;
};

function ImageWithLoadingFallback({
  source,
  altText,
  loadingScale = 1,
  ...props
}: ImageWithLoadingFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function onLoadHandler() {
    setIsLoading(false);
  }

  function onErrorHandler() {
    setIsLoading(false);
    setIsError(true);
  }

  return (
    <div className={classes.imageWrapper}>
      <img
        style={{ display: isLoading || isError ? 'none' : 'block' }}
        className={classes.mainImage}
        src={source}
        alt={altText}
        onLoad={onLoadHandler}
        onError={onErrorHandler}
        {...props}
      />
      {isLoading ? (
        <LoadingSvg scale={loadingScale} />
      ) : isError ? (
        <p className={classes.errorMessage}>Image Failed To Load</p>
      ) : (
        ''
      )}
    </div>
  );
}

export default ImageWithLoadingFallback;
