const filterButtons = document.querySelectorAll("[data-filter]");
const opportunityItems = document.querySelectorAll(".opportunity-item");
const printButton = document.querySelector("#printPage");
const copyButton = document.querySelector("#copyStatement");
const copyStatus = document.querySelector("#copyStatus");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.classList.toggle("btn-dark", item === button);
      item.classList.toggle("btn-outline-dark", item !== button);
    });

    opportunityItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

printButton.addEventListener("click", () => {
  window.print();
});

copyButton.addEventListener("click", async () => {
  const statement =
    "The goal is not to buy more tools. The goal is to build clearer ministry pathways, and then use the tools we already have or are considering to support those pathways.";

  try {
    await navigator.clipboard.writeText(statement);
    copyStatus.textContent = "Copied";
  } catch {
    copyStatus.textContent = "Select the quote above to copy";
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 2500);
});
