// Menu button toggle
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

// Function to create the viewer template
function viewerTemplate(path, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${path}" alt="${alt}">
        </div>
    `;
}

// Function to handle image click and show the viewer
function viewHandler(event) {
    const clickedElement = event.target;

    // Get the original image source
    const src = clickedElement.src;

    // Extract the base file name without the size suffix
    const srcParts = src.split('/');
    const fileName = srcParts.pop(); // Get the file name (e.g., 'image-small.jpeg')
    const baseName = fileName.split('-')[0]; // Get the base name (e.g., 'image')

    // Construct the new source path
    const newSrc = `${srcParts.join('/')}/${baseName}-full.jpeg`;

    const alt = clickedElement.alt;
    const viewerHTML = viewerTemplate(newSrc, alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    // Add listener to the close button
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

// Function to close the viewer
function closeViewer() {
    document.querySelector('.viewer').remove();
}

// Add event listener to the gallery section
document.querySelector('.gallery').addEventListener('click', viewHandler);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
});
