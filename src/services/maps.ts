/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves a map URL for a given location.
 *
 * @param location The location for which to retrieve a map.
 * @returns A promise that resolves to a URL string.
 */
export async function getMapUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return 'https://example.com/map';
}
