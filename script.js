
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

// Prevent selecting a date in the past.
const bookingDate = document.getElementById("bookingDate");
const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

bookingDate.min = localToday;

document.getElementById("reservationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const contact = document.getElementById("guestContact").value.trim();
    const date = bookingDate.value;
    const guests = document.getElementById("guestCount").value;
    const time = document.getElementById("bookingTime").value;
    const message = document.getElementById("formMessage");

    if (!name || !contact || !date || !time) {
      message.textContent = "Please complete all required fields.";
      return;
    }

    message.textContent =
      `Thank you, ${name}! Your request for ${guests} guest(s) ` +
      `on ${date} at ${time} has been prepared. ` +
      "Please contact the restaurant to confirm your booking.";
  });