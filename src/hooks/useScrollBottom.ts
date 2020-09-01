import { useState, useEffect } from "react";

export default function usePageBottom() {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setBottom(window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 250);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return bottom;
}
