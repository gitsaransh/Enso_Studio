/**
 * ENSO Studio - Main JavaScript
 * Interactive functionality for portfolio website
 */

(function () {
    'use strict';

    // ============================================
    // Theme Switcher
    // ============================================
    function initThemeSwitcher() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme preference or default to dark
        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            body.classList.add('light-theme');
        }

        themeToggle.addEventListener('click', function () {
            body.classList.toggle('light-theme');

            // Save preference
            const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);

            // Add a subtle animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // ============================================
    // Project Case Study Data
    // ============================================
    const caseStudies = {
        'mindspark': {
            title: 'MindSpark',
            subtitle: 'Daily Brain Training Through Lateral Thinking Puzzles',
            tags: ['Game', 'PWA', 'JavaScript', 'Gamification'],
            sections: [
                {
                    title: 'Overview',
                    content: `MindSpark is a daily puzzle game designed to challenge users with lateral thinking puzzles. 
                    The app combines engaging gameplay with a streak-based reward system to encourage daily practice 
                    and cognitive development.`
                },
                {
                    title: 'Key Features',
                    list: [
                        'Daily puzzle challenges with varying difficulty levels',
                        'Streak tracking and freeze protection system',
                        'Hint system powered by streak points',
                        'Progressive Web App (PWA) for offline access',
                        'Ad-based monetization with reward mechanics',
                        'Milestone rewards and achievement system'
                    ]
                },
                {
                    title: 'Technical Implementation',
                    content: `Built as a Progressive Web App using vanilla JavaScript for maximum performance. 
                    Features include local storage for offline functionality, service worker caching, and a 
                    sophisticated state management system for tracking user progress.`
                },
                {
                    title: 'Results',
                    content: `Successfully launched with positive user engagement. The streak system has proven 
                    effective in driving daily active users, with an average retention rate exceeding industry 
                    standards for casual puzzle games.`
                }
            ]
        },
        'daily-aesthetic': {
            title: 'Daily Aesthetic',
            subtitle: 'Curated Daily Aesthetic Inspiration and Mood Boards',
            tags: ['App', 'Design', 'Curation', 'Mobile'],
            sections: [
                {
                    title: 'Overview',
                    content: `Daily Aesthetic delivers carefully curated visual inspiration to users every day. 
                    The app focuses on minimalist design and high-quality imagery to provide a calm, focused 
                    experience for creative professionals and enthusiasts.`
                },
                {
                    title: 'Key Features',
                    list: [
                        'Daily curated aesthetic collections',
                        'Mood board creation and organization',
                        'Minimalist, distraction-free interface',
                        'Save and categorize favorite aesthetics',
                        'Color palette extraction from images',
                        'Offline access to saved collections'
                    ]
                },
                {
                    title: 'Design Philosophy',
                    content: `The app embodies the principle of "less is more." Every element is intentional, 
                    creating a serene digital space that enhances rather than distracts from the visual content.`
                },
                {
                    title: 'Impact',
                    content: `Daily Aesthetic has built a dedicated community of designers, artists, and creative 
                    professionals who use it as their daily source of inspiration. The app maintains a 4.7+ rating 
                    across app stores.`
                }
            ]
        },
        'reelsreward': {
            title: 'ReelsReward',
            subtitle: 'Gamified Content Consumption with Reward Mechanics',
            tags: ['App', 'In Progress', 'Gamification', 'Social'],
            sections: [
                {
                    title: 'Overview',
                    content: `ReelsReward transforms passive content consumption into an engaging, rewarding experience. 
                    Users earn points and rewards while watching short-form video content, creating a win-win ecosystem 
                    for both viewers and content creators.`
                },
                {
                    title: 'Planned Features',
                    list: [
                        'Point-based reward system for engagement',
                        'Redeemable rewards and gift cards',
                        'Personalized content recommendations',
                        'Creator partnership program',
                        'Social sharing and challenges',
                        'Daily bonus and streak mechanics'
                    ]
                },
                {
                    title: 'Current Status',
                    content: `Currently in active development. Core mechanics and UI are complete, with focus now 
                    on content partnerships and reward fulfillment infrastructure.`
                },
                {
                    title: 'Vision',
                    content: `To create a sustainable model where users are compensated for their attention and 
                    engagement, while providing creators with a motivated, engaged audience.`
                }
            ]
        },
        'viraaj-editor': {
            title: 'Viraaj Editor',
            subtitle: 'Privacy-First Encrypted Text Editor with Cloud Sync',
            tags: ['Tool', 'In Progress', 'Security', 'Cloud'],
            sections: [
                {
                    title: 'Overview',
                    content: `Viraaj Editor is a secure, encrypted text editor designed for privacy-conscious users. 
                    All content is encrypted client-side before syncing to the cloud, ensuring complete data privacy.`
                },
                {
                    title: 'Key Features',
                    list: [
                        'End-to-end encryption for all documents',
                        'Real-time cloud synchronization',
                        'Markdown support with live preview',
                        'Offline-first architecture',
                        'Zero-knowledge encryption model',
                        'Cross-platform compatibility'
                    ]
                },
                {
                    title: 'Security Architecture',
                    content: `Built on a zero-knowledge encryption model where all encryption/decryption happens 
                    client-side. The server never has access to unencrypted content or encryption keys, ensuring 
                    complete user privacy.`
                },
                {
                    title: 'Development Status',
                    content: `Core encryption and sync functionality complete. Currently implementing advanced 
                    features like collaborative editing and version history while maintaining security standards.`
                }
            ]
        },
        'flow-automation': {
            title: 'Flow Automation',
            subtitle: 'Intelligent Workflow Automation for Repetitive Tasks',
            tags: ['Automation', 'Experiment', 'AI', 'Productivity'],
            sections: [
                {
                    title: 'Overview',
                    content: `Flow Automation is an experimental project exploring intelligent automation of 
                    repetitive digital workflows. The system learns from user behavior to suggest and automate 
                    common task sequences.`
                },
                {
                    title: 'Experimental Features',
                    list: [
                        'Pattern recognition for repetitive tasks',
                        'AI-powered workflow suggestions',
                        'Cross-application automation',
                        'Natural language task definition',
                        'Smart scheduling and triggers',
                        'Integration with popular productivity tools'
                    ]
                },
                {
                    title: 'Technical Approach',
                    content: `Leverages machine learning to identify patterns in user workflows. Uses a 
                    combination of rule-based automation and AI-driven suggestions to create a hybrid system 
                    that balances reliability with intelligence.`
                },
                {
                    title: 'Experiment Goals',
                    content: `To validate whether AI-assisted workflow automation can meaningfully reduce time 
                    spent on repetitive tasks while maintaining user control and transparency.`
                }
            ]
        },
        'insight-ai': {
            title: 'Insight AI',
            subtitle: 'AI-Powered Analytics and Insight Generation Tool',
            tags: ['AI Tool', 'Experiment', 'Analytics', 'Data'],
            sections: [
                {
                    title: 'Overview',
                    content: `Insight AI is an experimental tool that uses artificial intelligence to analyze 
                    data and generate actionable insights. Designed for small teams and solo entrepreneurs who 
                    need data-driven decision making without dedicated analytics resources.`
                },
                {
                    title: 'Core Capabilities',
                    list: [
                        'Automated data pattern recognition',
                        'Natural language insight generation',
                        'Trend prediction and forecasting',
                        'Anomaly detection and alerts',
                        'Custom report generation',
                        'Integration with common data sources'
                    ]
                },
                {
                    title: 'AI Architecture',
                    content: `Combines multiple AI models for different analytical tasks. Uses natural language 
                    processing to generate human-readable insights and machine learning for pattern recognition 
                    and prediction.`
                },
                {
                    title: 'Validation Phase',
                    content: `Currently testing with select users to validate the accuracy and usefulness of 
                    AI-generated insights. Focusing on refining the balance between automation and user control.`
                }
            ]
        }
    };

    // ============================================
    // Modal Functionality
    // ============================================
    function initModal() {
        const modal = document.getElementById('case-study-modal');
        const modalBody = document.getElementById('modal-body');
        const modalClose = modal.querySelector('.modal-close');
        const modalOverlay = modal.querySelector('.modal-overlay');
        const workCards = document.querySelectorAll('.work-card[data-project]');

        // Open modal
        function openModal(projectId) {
            const caseStudy = caseStudies[projectId];
            if (!caseStudy) return;

            // Generate modal content
            let content = `
                <div class="case-study-header">
                    <h2 class="case-study-title">${caseStudy.title}</h2>
                    <p class="case-study-subtitle">${caseStudy.subtitle}</p>
                    <div class="case-study-tags">
                        ${caseStudy.tags.map(tag => `<span class="case-study-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;

            caseStudy.sections.forEach(section => {
                content += `
                    <div class="case-study-section">
                        <h3>${section.title}</h3>
                        ${section.content ? `<p>${section.content}</p>` : ''}
                        ${section.list ? `
                            <ul>
                                ${section.list.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `;
            });

            modalBody.innerHTML = content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Event listeners
        workCards.forEach(card => {
            card.addEventListener('click', function () {
                const projectId = this.getAttribute('data-project');
                openModal(projectId);
            });

            // Keyboard accessibility
            card.addEventListener('keypress', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const projectId = this.getAttribute('data-project');
                    openModal(projectId);
                }
            });
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const offsetTop = target.offsetTop;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // Intersection Observer for Fade-in Animations
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));
    }

    // ============================================
    // ENSO Symbol Animation Enhancement
    // ============================================
    function initEnsoAnimation() {
        const ensoSymbol = document.querySelector('.enso-symbol');

        if (ensoSymbol) {
            // Add subtle pulse effect on hover
            ensoSymbol.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });

            ensoSymbol.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        }
    }

    // ============================================
    // Active Section Highlighting
    // ============================================
    function initActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.footer-link');

        function highlightActiveSection() {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.style.color = '';
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.color = 'var(--color-accent)';
                        }
                    });
                }
            });
        }

        // Throttle scroll event for performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    highlightActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ============================================
    // Card Hover Effects Enhancement
    // ============================================
    function initCardEffects() {
        const cards = document.querySelectorAll('.service-card, .testimonial-card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function (e) {
                // Add subtle glow effect
                this.style.boxShadow = '0 10px 40px rgba(90, 159, 184, 0.15)';
            });

            card.addEventListener('mouseleave', function () {
                this.style.boxShadow = '';
            });

            // 3D tilt effect on mouse move
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    function initParallax() {
        const hero = document.querySelector('.hero');

        if (hero) {
            let ticking = false;

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.pageYOffset;
                        const parallaxSpeed = 0.5;

                        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                        hero.style.opacity = 1 - (scrolled / 800);

                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    }

    // ============================================
    // Email Link Analytics (Optional)
    // ============================================
    function initEmailTracking() {
        const emailLink = document.getElementById('contact-email');

        if (emailLink) {
            emailLink.addEventListener('click', function () {
                // You can add analytics tracking here
                console.log('Contact email clicked');
            });
        }
    }

    // ============================================
    // CTA Button Analytics (Optional)
    // ============================================
    function initCTATracking() {
        const ctaButton = document.getElementById('view-work-cta');

        if (ctaButton) {
            ctaButton.addEventListener('click', function () {
                // You can add analytics tracking here
                console.log('View Work CTA clicked');
            });
        }
    }

    // ============================================
    // Loading Animation
    // ============================================
    function initLoadingAnimation() {
        // Add visible class to hero immediately
        const hero = document.querySelector('.hero');
        if (hero) {
            setTimeout(() => {
                hero.classList.add('visible');
            }, 100);
        }
    }

    // ============================================
    // Initialize All Functions
    // ============================================
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
    }

    function initializeApp() {
        console.log('ENSO Studio - Initializing...');

        initThemeSwitcher();
        initModal();
        initSmoothScroll();
        initScrollAnimations();
        initEnsoAnimation();
        initActiveSection();
        initCardEffects();
        initParallax();
        initEmailTracking();
        initCTATracking();
        initLoadingAnimation();

        console.log('ENSO Studio - Ready');
    }

    // Start the application
    init();

})();
