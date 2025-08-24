document.addEventListener('DOMContentLoaded', () => {
    // Language switching functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsWithLang = document.querySelectorAll('[data-fr][data-en][data-ar]');
    let currentLang = 'fr'; // Default language

    // Function to switch language
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update text content
        elementsWithLang.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update document language
        document.documentElement.lang = lang;
        
        // Update page title and meta description
        if (lang === 'fr') {
            document.title = 'Jad Vision - Opticien à Agadir | Lunettes, Lentilles & Examens de Vue';
            document.querySelector('meta[name="description"]').setAttribute('content', 'Jad Vision, votre opticien de confiance à Agadir. Découvrez notre large sélection de lunettes, lentilles de contact et bénéficiez d\'examens de vue professionnels.');
        } else if (lang === 'en') {
            document.title = 'Jad Vision - Optician in Agadir | Glasses, Contacts & Eye Exams';
            document.querySelector('meta[name="description"]').setAttribute('content', 'Jad Vision, your trusted optician in Agadir. Discover our wide selection of glasses, contact lenses and benefit from professional eye exams.');
        } else if (lang === 'ar') {
            document.title = 'جاد فيجن - أخصائي البصريات في أكادير | نظارات، عدسات وفحوصات العين';
            document.querySelector('meta[name="description"]').setAttribute('content', 'جاد فيجن، أخصائي البصريات الموثوق به في أكادير. اكتشف مجموعتنا الواسعة من النظارات والعدسات اللاصقة واستفد من فحوصات العين المهنية.');
        }
        
        // Update document direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
    }

    // Add event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Initialize with default language (French)
    switchLanguage('fr');

    // Wi-Fi password copy functionality with enhanced UX
    const copyButton = document.getElementById('copy-btn');
    const wifiCode = document.getElementById('wifi-code');
    const wifiSection = document.querySelector('.wifi-section');

    if (copyButton && wifiCode) {
        // Add click animation to wifi code
        wifiCode.addEventListener('click', () => {
            wifiCode.style.transform = 'scale(1.05)';
            wifiCode.style.transition = 'transform 0.2s ease';
            setTimeout(() => {
                wifiCode.style.transform = 'scale(1)';
            }, 200);
        });

        copyButton.addEventListener('click', async () => {
            // Get the text to copy
            const codeToCopy = wifiCode.innerText;
            
            // Add button press animation
            copyButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                copyButton.style.transform = '';
            }, 150);

            try {
                // Use the modern Navigator Clipboard API
                await navigator.clipboard.writeText(codeToCopy);
                
                // --- Enhanced success feedback ---
                const originalContent = copyButton.innerHTML;
                const originalBackground = copyButton.style.background;
                const successText = currentLang === 'fr' ? 'Copié!' : currentLang === 'en' ? 'Copied!' : 'تم النسخ!';
                
                // Update button appearance
                copyButton.innerHTML = `<i class="fa-solid fa-check"></i> ${successText}`;
                copyButton.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
                copyButton.style.boxShadow = '0 8px 25px rgba(46, 125, 50, 0.4)';
                
                // Add success animation to wifi section
                wifiSection.style.borderColor = '#4CAF50';
                wifiSection.style.boxShadow = '0 12px 40px rgba(76, 175, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                
                // Create floating success indicator
                const successIndicator = document.createElement('div');
                successIndicator.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
                successIndicator.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    color: #4CAF50;
                    font-size: 2rem;
                    pointer-events: none;
                    z-index: 1000;
                    animation: successPop 0.6s ease-out forwards;
                `;
                
                // Add keyframe animation for success indicator
                if (!document.querySelector('#success-animation-style')) {
                    const style = document.createElement('style');
                    style.id = 'success-animation-style';
                    style.textContent = `
                        @keyframes successPop {
                            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                wifiSection.style.position = 'relative';
                wifiSection.appendChild(successIndicator);
                
                // Remove success indicator after animation
                setTimeout(() => {
                    if (successIndicator.parentNode) {
                        successIndicator.parentNode.removeChild(successIndicator);
                    }
                }, 600);

                // Revert back to original state after 2.5 seconds
                setTimeout(() => {
                    copyButton.innerHTML = originalContent;
                    copyButton.style.background = originalBackground;
                    copyButton.style.boxShadow = '';
                    wifiSection.style.borderColor = '';
                    wifiSection.style.boxShadow = '';
                }, 2500);

            } catch (err) {
                console.error('Failed to copy text: ', err);
                
                // --- Enhanced error feedback ---
                const originalContent = copyButton.innerHTML;
                const errorText = currentLang === 'fr' ? 'Erreur!' : currentLang === 'en' ? 'Error!' : 'خطأ!';
                
                copyButton.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> ${errorText}`;
                copyButton.style.background = 'linear-gradient(135deg, #d32f2f, #f44336)';
                copyButton.style.boxShadow = '0 8px 25px rgba(211, 47, 47, 0.4)';
                
                // Add error animation to wifi section
                wifiSection.style.borderColor = '#f44336';
                wifiSection.style.animation = 'shake 0.5s ease-in-out';
                
                // Add shake animation if not exists
                if (!document.querySelector('#error-animation-style')) {
                    const style = document.createElement('style');
                    style.id = 'error-animation-style';
                    style.textContent = `
                        @keyframes shake {
                            0%, 100% { transform: translateX(0); }
                            25% { transform: translateX(-5px); }
                            75% { transform: translateX(5px); }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                setTimeout(() => {
                    const copyText = currentLang === 'fr' ? 'Copier' : currentLang === 'en' ? 'Copy' : 'نسخ';
                    copyButton.innerHTML = originalContent;
                    copyButton.style.background = '';
                    copyButton.style.boxShadow = '';
                    wifiSection.style.borderColor = '';
                    wifiSection.style.animation = '';
                }, 2500);
            }
        });
        
        // Add hover effect to wifi code for better UX
        wifiCode.addEventListener('mouseenter', () => {
            wifiCode.style.transform = 'scale(1.02)';
            wifiCode.style.transition = 'transform 0.3s ease';
        });
        
        wifiCode.addEventListener('mouseleave', () => {
            wifiCode.style.transform = 'scale(1)';
        });
    }

    // Review Popup Functionality
    console.log('Starting review popup initialization...');
    const reviewPopup = document.getElementById('reviewPopup');
    const closeReviewPopup = document.getElementById('closeReviewPopup');
    const laterBtn = document.getElementById('laterBtn');
    const reviewBtn = document.getElementById('reviewBtn');

    console.log('Review popup element found:', !!reviewPopup);
    console.log('Review popup element:', reviewPopup);
    
    // Test if we can access the popup element
    if (reviewPopup) {
        console.log('Popup classes:', reviewPopup.className);
        console.log('Popup style display:', reviewPopup.style.display);
        console.log('Popup computed style:', window.getComputedStyle(reviewPopup).display);
    }

    // Show popup after 10 seconds on every page load
    if (reviewPopup) {
        console.log('Setting timeout for popup to show in 10 seconds...');
        setTimeout(() => {
            console.log('8 seconds passed, showing popup...');
            showReviewPopup();
        }, 8000);
    }

    function showReviewPopup() {
        console.log('showReviewPopup called, reviewPopup exists:', !!reviewPopup);
        if (reviewPopup) {
            console.log('Adding show class to popup');
            reviewPopup.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Update language content for popup elements
            const popupElements = reviewPopup.querySelectorAll('[data-fr][data-en]');
            console.log('Found popup elements for translation:', popupElements.length);
            popupElements.forEach(element => {
                const text = element.getAttribute(`data-${currentLang}`);
                if (text) {
                    element.textContent = text;
                }
            });
            
            console.log('Popup should now be visible');
        } else {
            console.error('reviewPopup element not found when trying to show');
        }
    }

    function hideReviewPopup() {
        if (reviewPopup) {
            reviewPopup.classList.remove('show');
            reviewPopup.classList.add('hide');
            document.body.style.overflow = ''; // Restore scrolling
            
            // Remove the popup from DOM after animation
            setTimeout(() => {
                reviewPopup.classList.remove('hide');
            }, 300);
        }
    }

    // Close popup when clicking close button
    if (closeReviewPopup) {
        closeReviewPopup.addEventListener('click', (e) => {
            e.preventDefault();
            hideReviewPopup();
        });
    }

    // Close popup when clicking "Later" button
    if (laterBtn) {
        laterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideReviewPopup();
        });
    }

    // Close popup when clicking outside the popup content
    if (reviewPopup) {
        reviewPopup.addEventListener('click', (e) => {
            if (e.target === reviewPopup) {
                hideReviewPopup();
            }
        });
    }

    // Handle review button click (track analytics if needed)
    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            // Optional: Add analytics tracking here
            console.log('User clicked review button');
            hideReviewPopup();
            // The link will naturally navigate to Google Reviews
        });
    }

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && reviewPopup && reviewPopup.classList.contains('show')) {
            hideReviewPopup();
        }
    });

    // Update popup language when language is switched
    const originalSwitchLanguage = switchLanguage;
    switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        
        // Update popup content if it's visible
        if (reviewPopup && reviewPopup.classList.contains('show')) {
            const popupElements = reviewPopup.querySelectorAll('[data-fr][data-en]');
            popupElements.forEach(element => {
                const text = element.getAttribute(`data-${lang}`);
                if (text) {
                    element.textContent = text;
                }
            });
        }
    };

    // Go to Top Button Functionality
    const goToTopBtn = document.getElementById('go-to-top');
    
    if (goToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                goToTopBtn.classList.add('visible');
            } else {
                goToTopBtn.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top when button is clicked
        goToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});