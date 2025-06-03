let cart = [];

document.querySelectorAll(".adopt-btn").forEach(button => {
    button.addEventListener("click", () => {
        const dogName = button.dataset.name;
        cart.push(dogName);
        alert(`${dogName} added to your adoption list!`);
    });
});
