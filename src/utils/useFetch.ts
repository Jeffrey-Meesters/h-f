export const useFetch = async (uri: string) => {
  const baseUrl = 'https://date.nager.at/api/v3';
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  
  const request = new Request(`${baseUrl}${uri}`, {
    method: 'GET',
    headers,
  })
  
  try {
    const response = await fetch(request);
  
    if (response.ok) {
      return await response.json();
    }
  } catch(error) {
    console.log(error) // create error handling later
  }
}