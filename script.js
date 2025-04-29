document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.querySelector('.project-container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const projects = document.querySelectorAll('.project-content');
    let currentSlide = 0;
    const totalSlides = projects.length;

    // Function to update slide visibility
    const updateSlide = () => {
        // Hide all projects
        projects.forEach(project => {
            project.classList.remove('active');
        });
        
        // Show current project
        projects[currentSlide].classList.add('active');
        
        // Hide left button on first slide
        if (currentSlide === 0) {
            leftBtn.style.display = 'none';
        } else {
            leftBtn.style.display = 'flex';
        }

        // Hide right button on last slide
        if (currentSlide === totalSlides - 1) {
            rightBtn.style.display = 'none';
        } else {
            rightBtn.style.display = 'flex';
        }
    };

    // Initialize first project and button visibility
    updateSlide();

    // Right button click handler
    rightBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    });

    // Left button click handler
    leftBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
});
