export const isInCart = (prod, cartItems) => {
  return cartItems.find((item) => item.id === prod.id);
};

const API = "http://localhost:8080";

export const fetchFromApi = async (endpoint, opts) => {
  const { method, body } = { method: "POST", body: null, ...opts };

  const response = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
