export const useFetch = async <T>(uri: string, expectsJson = true) => {
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
      let json = [];

      if (expectsJson) {
        json = await response.json()
      }

      return {
        status: response.status,
        data: json as T
      }
    }
  } catch(error) {
    console.log(error) // create error handling later
  }
}