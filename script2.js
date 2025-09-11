const contentCache = {};

async function loadContent(fileName) {
    if (contentCache[fileName]){
        return contentCache[fileName];
    }

    try{
        const response = await fetch(fileName);
        const text = await response.text();
        const formattedContent = text.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
        contentCache[fileName] = formattedContent;
        return formattedContent;
    } catch (error) {
        return `<p style="color: #e74c3c;">Error loading content.</p>`
    }
}


function showTab(tabName){
    // hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // remove active class from all tabs and reset arrows
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        // reset all arrows to default state
        const arrow = tab.querySelector('.arrow');
        if (arrow) {
            arrow.classList.remove('rotated');
        }
    })

    // show selected content
    const targetContent = document.getElementById(tabName + 'Content');
    targetContent.classList.add('active');

    // add active class to selective tab
    const selectedTab = document.getElementById('tab-' + tabName);
    selectedTab.classList.add('active');

    // rotate the arrow of the active tab
    const selectedArrow = selectedTab.querySelector('.arrow');
    if (selectedArrow) {
        selectedArrow.classList.add('rotated');
    }

    // load content from txt files
    loadTabContent(tabName, targetContent);
}

async function loadTabContent(tabName, contentElement){
    // map file names to tab names
    const fileMap = {
        'nma': 'nma.txt',
        'tnbc': 'tnbc.txt',
        'aim':'aim.txt'
    };

    // only load if content shows "Loading"
    if (contentElement.innerHTML.includes('Loading')){
        const fileName = fileMap[tabName];
        if(fileName){
            const content = await loadContent(fileName);
            // add delay to show loading animation
            setTimeout(() => {
                contentElement.innerHTML = content;
            }, 300);
        }
    }
}

// initiate the first tab on page load
document.addEventListener('DOMContentLoaded', function(){
    showTab('nma');
});

