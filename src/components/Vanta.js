import React, { useEffect } from 'react';


const VantaComponent = () => {
    useEffect(() => {
        const initializeVanta = () => {
            if (window.VANTA) {
                const element = document.getElementById("vantanet"); // Correct the query selector
                if (element) {
                    window.VANTA.NET({
                        el: "#vantanet",
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x3feaff
                    });
                } else {
                    console.error("Cannot find element with ID 'vantanet'");
                }
            }
        };

        initializeVanta(); // Initial setup

        const beforeNewOneFadeInHandler = () => {
            if (window.edit_page && window.edit_page.Event) {
                initializeVanta();
            }
        };

        // Subscribe to the event when a new page fades in if edit_page and edit_page.Event are available
        if (window.edit_page && window.edit_page.Event) {
            window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", beforeNewOneFadeInHandler);
        }

        // Cleanup function to remove event subscription
        return () => {
            if (window.edit_page && window.edit_page.Event) {
                window.edit_page.Event.unsubscribe("Page.beforeNewOneFadeIn", beforeNewOneFadeInHandler);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return <div id="vantanet" className="s-page-1 s-section-1 s-section" style={{ width: '100vw', height: '100vh' }} />;
};

export default VantaComponent;
