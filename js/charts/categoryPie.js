let categoryPie;

async function renderCategoryPie() {
  const data = await fetchAPI("/api/sales_by_category");

  if (categoryPie) categoryPie.destroy();

  categoryPie = new Chart(document.getElementById("categoryPie"), {
    type: "pie",
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: ["#ff2db2", "#7c5cff", "#00d4ff"]
      }]
    },
    options: {
      onClick: (_, elements) => {
        if (elements.length) {
          dashboardState.category = data.labels[elements[0].index];
          EventBus.emit("filterChanged");
        }
      }
    }
  });
}

EventBus.on("filterChanged", renderCategoryPie);

