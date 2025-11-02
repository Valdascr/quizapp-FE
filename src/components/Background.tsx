import React from 'react';

type BackgroundProps = {
  image?: string;
  color?: string;
  gradient?: boolean;
  children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({
  image,
  color,
  children,
  gradient = true,
}) => {
  const backgroundStyle: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: color || (gradient ? undefined : '#f0f0f0'),
    backgroundImage: image
      ? `url(${image})`
      : gradient
      ? 'linear-gradient(to right, #f0f9ff, #e0f2fe, #f5f3ff)'
      : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;