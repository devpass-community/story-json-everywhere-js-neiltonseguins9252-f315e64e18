async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  // Add your solution here!
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getProduct;
