//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

// Add a click event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove the 'active' class from the currently active panel
        removeClass();
        
        // Add the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// A helper function to remove the 'active' class from all panels
function removeClass() {
   panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log('Clicked Panel:', panel.id); // Check which panel is clicked
        removeClass();
        panel.classList.add('active');
    });
});
}