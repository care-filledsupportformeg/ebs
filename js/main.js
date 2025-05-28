// Main JavaScript for Regional History Summaries website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('open');
        });
    }
    
    // Video tab filtering
    const tabButtons = document.querySelectorAll('.tab-button');
    const videoCards = document.querySelectorAll('.video-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter videos
            videoCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                }
            }
        });
    });
    
    // Add animation classes when elements come into view
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in viewport
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animate-fade-in');
            }
        });
    }
    
    // Run on load
    checkIfInView();
    
    // Run on scroll
    window.addEventListener('scroll', checkIfInView);
});
