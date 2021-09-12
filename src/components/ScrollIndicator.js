import React, {useState, useEffect} from 'react';
import style from "./ScrollIndicator.module.css";

function ScrollIndicator() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
    
        const height = scrollHeight - clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div className={style.scrollIndicator}>
            <div className={style.progress}>
                <div className={style.progressStyle} 
                style={{height: `${scrollTop}%`}}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator
