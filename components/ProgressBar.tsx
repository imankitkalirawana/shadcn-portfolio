'use client';
import NextTopLoader from 'nextjs-toploader';

const ProgressBar = () => {
  return (
    <>
      <NextTopLoader
        height={1}
        showSpinner={false}
        shadow="false"
        easing="ease"
        color="#ffffff"
      />
    </>
  );
};

export default ProgressBar;
