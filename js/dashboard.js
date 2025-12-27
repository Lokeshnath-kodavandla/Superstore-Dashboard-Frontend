document.querySelectorAll("[data-region]").forEach(btn => {
  btn.onclick = () => {
    dashboardState.region = btn.dataset.region;
    EventBus.emit("filterChanged");
  };
});

document.getElementById("applyState").onclick = () => {
  dashboardState.state = document.getElementById("stateInput").value;
  EventBus.emit("filterChanged");
};

document.getElementById("resetFilters").onclick = () => {
  dashboardState.region = null;
  dashboardState.state = null;
  dashboardState.category = null;
  EventBus.emit("filterChanged");
};

EventBus.emit("filterChanged");
