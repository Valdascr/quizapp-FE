import React from 'react';

type BackgroundProps = {
    image?: string;
    color?: string;
    children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({image, color, children}) => {
    const backgroundStyle: React.CSSProperties = {
        width: "100vw",
        height: "100vh",
        backgroundImage: image ? 'url(${image})' : undefined,
        backgroundColor: color || "#f0f0f0",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return <div style={backgroundStyle}>{children}</div>
}

export default Background;