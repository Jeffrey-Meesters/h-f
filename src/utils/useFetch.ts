export const useFetch = async <T>(method: string, uri: string, data?: T) => {
  const baseUrl = 'https://date.nager.at/api/v3';
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  
  const request = new Request(`${baseUrl}${uri}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
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