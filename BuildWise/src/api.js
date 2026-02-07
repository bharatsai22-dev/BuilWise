const BASE_URL = "https://buildwise-backend-7wwc.onrender.com";

export async function fetchPlans() {
  const response = await fetch(`${BASE_URL}/plans`);
  return await response.json();
}

