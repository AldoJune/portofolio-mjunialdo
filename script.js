document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".sertifikat-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            items.forEach((item) => {
                const category = item.getAttribute("data-category");
                if (filter === "all" || filter === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
