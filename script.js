document.addEventListener('DOMContentLoaded', () => {
    // Portfolio filtering functionality
    const filterBtns = document.querySelectorAll('.portfolio-filters button');
    const gridItems = document.querySelectorAll('.grid-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.textContent.toLowerCase();

            gridItems.forEach(item => {
                // If filter is 'all works', show all
                if (filterValue === 'all works') {
                    item.style.display = 'block';
                } else {
                    // Check if item has the class matching the filter
                    if (item.classList.contains(filterValue.slice(0, -1)) || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.classList.remove('active');
            });
            
            // Add active class to parent li
            this.parentElement.classList.add('active');

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
