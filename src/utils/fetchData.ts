export async function fetchData<T>(url: string): Promise<T | null> {
    try {
        const response = await fetch(url);

        if (!response || !response.ok) {
            console.error(`Failed to fetch data from ${url}, status: ${response?.status}`);
            return null;
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}