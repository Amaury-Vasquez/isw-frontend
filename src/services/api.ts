const BASE_API_URL = process.env.BASE_API_URL || "http://127.0.0.1:5000/";

export async function read<T>(path: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_API_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error de conexión");
  }
}

export async function post<T>(path: string, body: any) {
  try {
    const response = await fetch(`${BASE_API_URL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await response.json()) as T;
  } catch (error) {
    console.error(error);
    throw new Error("Error de conexión");
  }
}
