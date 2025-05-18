function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.querySelector(".open-btn");

    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0";
        openBtn.style.display = "none"; // Hide the ☰ button
    } else {
        sidebar.style.left = "-250px";
        setTimeout(() => { openBtn.style.display = "block"; }, 300); // Show ☰ after animation
    }
}
