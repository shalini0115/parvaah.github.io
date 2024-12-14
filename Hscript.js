// JavaScript for Sidebar
const menuIcon = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Open Sidebar
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// JavaScript for Profile Sidebar
const profileIcon = document.getElementById('profile-icon');
const profileCloseBtn = document.getElementById('profile-close-btn');
const profileSidebar = document.getElementById('profile-sidebar');

// Open Profile Sidebar
profileIcon.addEventListener('click', () => {
    profileSidebar.classList.add('active');
});

// Close Profile Sidebar
profileCloseBtn.addEventListener('click', () => {
    profileSidebar.classList.remove('active');
});

// Optional: Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
    }
    if (!profileSidebar.contains(event.target) && !profileIcon.contains(event.target)) {
        profileSidebar.classList.remove('active');
    }
});

// Populate Profile Sidebar with User Info
function updateProfileSidebar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const profileSidebar = document.getElementById('profile-sidebar');
        profileSidebar.innerHTML = `
            <div class="close-btn" id="profile-close-btn">&times;</div>
            <h2>Profile</h2>
            <p><strong>Name:</strong> ${currentUser.username}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <button id="logout-btn" style="margin-top:30px;">Logout</button>
        `;

        // Add Logout Functionality
        const logoutBtn = document.getElementById('logout-btn');
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            alert('Logged out successfully!');
            window.location.reload(); // Reload the page
        });

        // Re-add close button functionality
        const profileCloseBtn = document.getElementById('profile-close-btn');
        profileCloseBtn.addEventListener('click', () => {
            profileSidebar.classList.remove('active');
        });
    }
}

// Call updateProfileSidebar on page load
document.addEventListener('DOMContentLoaded', () => {
    updateProfileSidebar();
});

function updateTime() {
    const now = new Date();
    
    // Get current date (e.g., "28 December 2024")
    const date = now.getDate();  // Day of the month
    const month = now.getMonth();  // Month (0-11)
    const year = now.getFullYear();  // Full year
    
    // Format the month name (e.g., "December")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[month];
    
    // Get current time in HH:MM:SS format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Combine the date
    const currentDate = `${date} ${monthName} ${year}`;
    
    // Combine the time
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Update the HTML with the date and time
    document.querySelector('.date').textContent = currentDate;
    document.querySelector('.time').textContent = currentTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize time on page load
updateTime();
