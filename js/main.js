document.addEventListener('DOMContentLoaded', () => {
    const glow = document.getElementById('glow');

    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            glow.style.opacity = '0.4';
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
            glow.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)';
            glow.style.transform = 'translate(-50%, -50%)';
        });

        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    }
});