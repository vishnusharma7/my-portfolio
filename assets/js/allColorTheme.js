

const themes = [
    {
        name: 'default',
        colors: {
            '--title-color': '#ff1e00',
            '--text-color': 'hsl(207, 4%, 100%)',
            '--body-color': 'hsl(207, 4%, 12%)',
            '--container-color': 'hsl(207, 4%, 20%)',
            '--text-color-light': 'hsl(207, 4%, 80%)',
        },
    },
    {
        name: 'orange',
        colors: {
            '--title-color': 'hsl(207, 4%, 16%)',
            '--text-color': 'hsl(207, 4%, 28%)',
            '--body-color': 'hsl(207, 4%, 99%)',
            '--container-color': 'hsl(207, 4%, 95%)',
            '--text-color-light': 'hsl(207, 4%, 5%)',
        },
    },
    {
        name: 'purple',
        colors: {
            '--title-color': '#6B4EFF',
            '--text-color': 'hsl(207, 4%, 100%)',
            '--body-color': 'hsl(207, 4%, 10%)',
            '--container-color': 'hsl(207, 4%, 20%)',
            '--text-color-light': 'hsl(207, 4%, 80%)',
        },
    },
    {
        name: 'blue',
        colors: {
            '--title-color': '#2156fa',
            '--text-color': 'hsl(207, 4%, 12%)',
            '--body-color': '#efefef',
            '--container-color': '#efefef',
            '--text-color-light': 'hsl(207, 4%, 12%)',
        },
    },
    {
        name: 'blue-dark',
        colors: {
            '--title-color': '#2156fa',
            '--text-color': 'hsl(207, 4%, 100%)',
            '--body-color': 'hsl(207, 4%, 11%)',
            '--container-color': 'hsl(207, 4%, 12%)',
            '--text-color-light': 'hsl(207, 4%, 100%)',
        },
    },
    {
        name: 'green',
        colors: {
            '--title-color': '#beef00',
            '--text-color': 'hsl(207, 4%, 100%)',
            '--body-color': 'hsl(207, 4%, 10%)',
            '--container-color': 'hsl(207, 4%, 12%)',
            '--text-color-light': 'hsl(207, 4%, 100%)',
        },
    },
    {
        name: 'teal',
        colors: {
            '--title-color': '#18da8e',
            '--text-color': '#18da8e',
            '--body-color': 'hsl(207, 4%, 3%,0.9)',
            '--container-color': 'rgb(25, 120,120,0.1)',
            '--text-color-light': 'hsl(207, 4%, 100%)',
        },
    },
    {
        name: 'dark',
        colors: {
            '--title-color': 'hsl(207, 4%, 95%)',
            '--text-color': 'hsl(207, 4%, 65%)',
            '--body-color': 'hsl(207, 4%, 10%)',
            '--container-color': 'hsl(207, 4%, 12%)',
            '--text-color-light': 'hsl(207, 4%, 90%)',
        },
    },
];

let currentThemeIndex = 0;

// Function to apply a selected theme
function applyTheme(themeIndex) {
    const root = document.documentElement;
    currentThemeIndex = themeIndex;
    const currentTheme = themes[currentThemeIndex];
    
    for (const [property, value] of Object.entries(currentTheme.colors)) {
        root.style.setProperty(property, value);
    }

    // Save the selected theme index to localStorage
    localStorage.setItem('selectedThemeIndex', themeIndex);
}

// Function to toggle the theme dropdown visibility
function toggleDropdown() {
    const themeList = document.getElementById('theme-list');
    themeList.classList.toggle('show');
}

// Attach a click event listener to the theme button
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', toggleDropdown);

// Attach click event listeners to the theme options in the dropdown
const themeListItems = document.querySelectorAll('.theme-list li');
themeListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        applyTheme(index);
        toggleDropdown();
    });
});

// Load the selected theme index from localStorage on page load
const savedThemeIndex = localStorage.getItem('selectedThemeIndex');
if (savedThemeIndex !== null) {
    applyTheme(parseInt(savedThemeIndex));
} else {
    // Use the default theme if no selection is stored
    applyTheme(currentThemeIndex);
}


