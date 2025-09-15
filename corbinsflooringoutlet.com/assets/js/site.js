document.addEventListener("click", (ev) => {
  const card = ev.target.closest(".product-card");
  if (!card) return;
  if (ev.target.closest("a")) return;
  const a = card.querySelector(".thumb");
  if (a && a.href) location.href = a.href;
});
