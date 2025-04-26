import {useEffect, useRef, useState} from "react";
import './styles/style.css';
import {ISmoothyProps} from "./smoothy-types";
import React from "react";


function Smoothy({options, children}: ISmoothyProps) {

    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [containerHeight, setContainerHeight] = useState(3000);

    const videoSrc = options.videoSrc;
    const pixelPerSeconds = options.pixelPerSeconds || 500;

    useEffect(() => {
        videoRef.current?.pause();
        videoRef.current?.addEventListener("loadedmetadata", () => {
            if (videoRef?.current?.duration != null) {
                setContainerHeight(Math.round(videoRef?.current?.duration) * pixelPerSeconds);
            }
        });
        scroll();
        window.addEventListener('scroll', scroll);
    }, []);

    const scroll = () => {
        if (!sectionRef.current || !videoRef.current) return;

        const duration = videoRef.current.duration;
        if (!isFinite(duration) || duration === 0) return;

        const distance = window.scrollY - sectionRef.current.offsetTop;
        const total = sectionRef.current.clientHeight - window.innerHeight;

        let percent = distance / total;
        percent = Math.max(0, Math.min(1, percent));
        videoRef.current.currentTime = duration * percent;
    };

    return (
        <>
            <div className="smoothy-video-container" ref={sectionRef} style={{height: containerHeight}}>

                <div className={'holder'}>
                    <video
                        autoPlay
                        muted
                        controls={false}
                        src={videoSrc}
                        playsInline
                        ref={videoRef}></video>
                    {
                        children && <div className={'content'}>
                            {children}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Smoothy;
