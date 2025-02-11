        function switchLanguage(lang) {
            const elements = document.querySelectorAll('[data-' + lang + ']');
            
            elements.forEach(function (element) {
                const translatedText = element.getAttribute('data-' + lang);
                element.textContent = translatedText;
            });
        }
