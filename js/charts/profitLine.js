let profitLine;

async function renderProfitLine() {
  const data = await fetchAPI("/api/profit_by_subcategory");

  if (profitLine) profitLine.destroy();

  profitLine = new Chart(document.getElementById("profitLine"), {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        borderColor: "#00d4ff",
        tension: 0.3
      }]
    }
  });
}

EventBus.on("filterChanged", renderProfitLine);
