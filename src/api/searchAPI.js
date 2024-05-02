
//Searches osrs hiscores api for player data based on search term
export const searchPlayer = async (searchTerm) => {
  try {
    const encodedSearchTerm = encodeURIComponent(searchTerm) 
    const response = await fetch(
      `http://localhost:8080/${encodedSearchTerm}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    throw new Error('Player not found')
  }
}
