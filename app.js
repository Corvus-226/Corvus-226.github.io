(() => {
    const container = document.getElementById("particles-js");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!container || reduceMotion) {
        container?.remove();
        return;
    }

    if (typeof window.particlesJS !== "function") {
        document.documentElement.classList.add("particles-unavailable");
        return;
    }

    const isSmallScreen = window.matchMedia("(max-width: 720px)").matches;

    window.particlesJS("particles-js", {
        particles: {
            number: {
                value: isSmallScreen ? 34 : 72,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: "#00e5ff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.38,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.08,
                    sync: false
                }
            },
            size: {
                value: 4.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1.35,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4,
                    speed: 1
                },
                bubble: {
                    distance: 190,
                    size: 14,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                }
            }
        },
        retina_detect: true
    });
})();
