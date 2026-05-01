function showTab(tabName){
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        const arrow = tab.querySelector('.arrow');
        if (arrow) arrow.classList.remove('rotated');
    });

    const targetContent = document.getElementById(tabName + 'Content');
    targetContent.classList.add('active');

    const selectedTab = document.getElementById('tab-' + tabName);
    selectedTab.classList.add('active');

    const selectedArrow = selectedTab.querySelector('.arrow');
    if (selectedArrow) selectedArrow.classList.add('rotated');
}

document.addEventListener('DOMContentLoaded', function(){
    showTab('nma');
});
