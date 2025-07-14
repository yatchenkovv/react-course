import { useState, useEffect } from "react";

const getPercentScroll = () => {
    return (Math.floor(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) + "%"
}

export const useProgressBar = () => {
    const [progress, setProgress] = useState("0%");

    useEffect(() => {
        const handleScroll = () => {
            setProgress(getPercentScroll())
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return progress;
};