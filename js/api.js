async function fetchAPI(endpoint) {
  let url = CONFIG.BASE_URL + endpoint;
  const params = [];

  if (dashboardState.region) params.push(`region=${dashboardState.region}`);
  if (dashboardState.state) params.push(`state=${dashboardState.state}`);
  if (dashboardState.category) params.push(`category=${dashboardState.category}`);

  if (params.length) url += "?" + params.join("&");

  const res = await fetch(url);
  return res.json();
}
