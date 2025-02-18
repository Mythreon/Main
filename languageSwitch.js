        function switchLanguage(lang) {
            const elements = document.querySelectorAll('[data-' + lang + ']');
            
            elements.forEach(function (element) {
                const translatedText = element.getAttribute('data-' + lang);
                element.textContent = translatedText;
            });
        }

// Important note! This will take a few weeks to implement on itself fully due to everything that I need to learn.