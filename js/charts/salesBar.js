let salesBar;
async function renderSalesBar() {
  const data = await fetchAPI("/api/sales_by_subcategory");

  if (salesBar) salesBar.destroy();

  salesBar = new Chart(document.getElementById("salesBar"), {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: "#ff2db2"
      }]
    }
  });
}

EventBus.on("filterChanged", renderSalesBar);
