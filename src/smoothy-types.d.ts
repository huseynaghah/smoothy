import React from "react";

export interface IScrollVideo {
    videoSrc: string;
    pixelPerSeconds? : number;
}

export interface ISmoothyProps {
    options: IScrollVideo,
    children?: React.ReactNode,
}