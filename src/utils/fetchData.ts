export async function fetchData<T>(url: string): Promise<T | null> {
    try {
        const response = await fetch(url);

        // Check if response is not OK
        if (!response || !response.ok) {
            // Safe to access status only if response is valid
            console.error(`Failed to fetch data from ${url}, status: ${response?.status}`);
            return null; // Return null if fetch fails
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        // Log the error if any exception occurs
        console.error('Error fetching data:', error);
        return null; // Return null if an error occurs
    }
}