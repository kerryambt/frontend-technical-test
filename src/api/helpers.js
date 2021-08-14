/*
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  let data = await fetch(`http://localhost:8080${apiUrl}`)
      .then(response => {
        if(!response.ok) throw new Error("API endpoint not found");
        else return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch(error => console.warn(error));

    return data;
}
