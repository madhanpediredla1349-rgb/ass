// Wait for the DOM to completely load
document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const dynamicMessage = document.getElementById('dynamicMessage');

    // Event Listener for Interactivity
    welcomeBtn.addEventListener('click', () => {
        // Change the content dynamically
        dynamicMessage.textContent = "🚀 Thanks for exploring! Let's build something awesome together.";
        
        // Toggle visibility by removing the hidden class
        dynamicMessage.classList.remove('hidden');
        
        // Quick visual pop effect
        welcomeBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
            welcomeBtn.style.transform = "scale(1)";
        }, 100);
    });
});