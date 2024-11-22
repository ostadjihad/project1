// Simple search functionality (demonstration only)
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let searchQuery = this.value.trim();
        if (searchQuery) {
            alert('Searching for: ' + searchQuery);
            // You can replace this alert with actual search functionality
        }
    }
});

// Highlight menu items on hover
let menuItems = document.querySelectorAll('header ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.textDecoration = 'underline';
    });
    item.addEventListener('mouseout', () => {
        item.style.textDecoration = 'none';
    });
});
