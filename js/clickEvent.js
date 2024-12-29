function clickEvent() {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    const sections = [home, about, portfolio, contact];

    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Remove the 'active' class from all sections
            sections.forEach(sec => sec.classList.remove('active'));
            // Add the 'active' class to the clicked section
            section.classList.add('active');
        });
    });
}
clickEvent();

