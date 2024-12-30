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

function clickEventreadmore() {
    const content = document.getElementById("heroUs");
    const viewMoreBtn = document.getElementById("readmore");
    const herousbag = document.getElementById("herousbag");
    if (viewMoreBtn.textContent == "read more ▼") {
        // Expand content
        content.style.height = `${content.scrollHeight+100}px`;
        content.style.overflow = "visible";
        viewMoreBtn.textContent = "View Less ▲";
        herousbag.style.bottom = "-10rem";
        viewMoreBtn.style.backgroundColor = "#B7BD10FF";
    } else {
        // Collapse content
        content.style.height = "200px";
        content.style.overflow = "hidden";
        viewMoreBtn.textContent = "read more ▼";
        viewMoreBtn.style.backgroundColor = "#009345FF";
        herousbag.style.bottom = "-5rem";
    }
  }
  
  