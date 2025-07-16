import { useState, useEffect } from "react";

const getProgressScroll = () => {
    return (Math.floor(document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    ) * 100) + "%";
}

export const useProgressBar = () => {
    const [progress, setProgress] = useState("0%");

    useEffect(() => {
        const handleScroll = () => {
            setProgress(getProgressScroll())
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return progress;
};