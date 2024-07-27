document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html');
    const cssCode = document.getElementById('css');
    const jsCode = document.getElementById('js');
    const output = document.getElementById('output');

    // Load content from localStorage
    const loadContent = () => {
        htmlCode.value = localStorage.getItem('html') || '';
        cssCode.value = localStorage.getItem('css') || '';
        jsCode.value = localStorage.getItem('js') || '';
        updateOutput();
    };

    // Save content to localStorage
    const saveContent = () => {
        localStorage.setItem('html', htmlCode.value);
        localStorage.setItem('css', cssCode.value);
        localStorage.setItem('js', jsCode.value);
    };

    // Update the iframe content
    const updateOutput = () => {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const js = `<script>${jsCode.value}<\/script>`;
        const result = `${html}${css}${js}`;
        const doc = output.contentDocument || output.contentWindow.document;
        doc.open();
        doc.write(result);
        doc.close();
    };

    // Add event listeners to update and save content
    htmlCode.addEventListener('input', () => {
        updateOutput();
        saveContent();
    });
    cssCode.addEventListener('input', () => {
        updateOutput();
        saveContent();
    });
    jsCode.addEventListener('input', () => {
        updateOutput();
        saveContent();
    });

    const elements = [
        { selector: '.clear.html', textarea: htmlCode },
        { selector: '.clear.css', textarea: cssCode },
        { selector: '.clear.js', textarea: jsCode },
        { selector: '.copy-html', textarea: htmlCode },
        { selector: '.copy-css', textarea: cssCode },
        { selector: '.copy-js', textarea: jsCode }
    ];

    for (let elem of elements) {
        const button = document.querySelector(elem.selector);
        if (button) { // Ensure button exists
            if (elem.selector.includes('clear')) {
                button.addEventListener('click', () => {
                    elem.textarea.value = '';
                    updateOutput();
                    saveContent(); // Save the cleared content
                });
            } else if (elem.selector.includes('copy')) {
                button.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(elem.textarea.value);
                        console.log('Copied to clipboard!');
                    } catch (err) {
                        console.error('Failed to copy: ', err);
                    }
                });
            }
        }
    }

    // Load content when the page is loaded
    loadContent();
});
