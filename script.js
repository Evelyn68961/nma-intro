
// Store loaded content to avoid re-fetching
const contentCache = {};

async function loadContent(fileName) {
    if (contentCache[fileName]) {
        return contentCache[fileName];
    }

    const response = await fetch(fileName);  
    const text = await response.text();
    const formattedContent = text.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
    contentCache[fileName] = formattedContent;
    return formattedContent;
}

async function toggleContent(contentId, filename) {
    const content = document.getElementById(contentId);
    const subtitle = content.previousElementSibling;
    const arrow = subtitle.querySelector('.arrow');
    
    if (!content.classList.contains('open')) {
        // Show content
        content.classList.add('open');
        arrow.classList.add('rotated');
        arrow.textContent = '▲';
        
        // Load content if it's the first time or if it shows loading
        if (content.innerHTML.includes('Loading') || content.innerHTML.includes('loading')) {
            try {
                const text = await loadContent(filename);
                // Add a small delay to show the loading animation
                setTimeout(() => {
                    content.innerHTML = text;
                }, 300);
            } catch (error) {
                content.innerHTML = '<p style="color: #e74c3c;">Error loading content.</p>';
            }
        }
    } else {
        // Hide content
        content.classList.remove('open');
        arrow.classList.remove('rotated');
        arrow.textContent = '▼';
    }
}

// Add smooth scrolling when content opens
document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const element = mutation.target;
                if (element.classList.contains('open') && element.classList.contains('collapsible-content')) {
                    // Smooth scroll to the opened content after animation
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 400);
                }
            }
        });
    });

    // Observe all collapsible content elements
    document.querySelectorAll('.collapsible-content').forEach(el => {
        observer.observe(el, { attributes: true });
    });
});