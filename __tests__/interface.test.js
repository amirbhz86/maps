import MapboxGL from '../javascript';

describe('Public Interface', () => {
  it('should contain all expected components and utils', () => {
    const actualKeys = Object.keys(MapboxGL);
    const expectedKeys = [
      // components
      'MapView',
      'StyleSheet',

      // layers
      'FillLayer',
      'FillExtrusionLayer',
      'CircleLayer',
      'LineLayer',
      'SymbolLayer',

      // sources
      'VectorSource',
      'ShapeSource',

      // constants
      'UserTrackingModes',
      'StyleURL',
      'EventTypes',
      'CameraModes',
      'StyleSource',
      'InterpolationMode',

      // methods
      'setAccessToken',
      'getAccessToken',
      'requestPermissions',

      // utils
      'geoUtils',
    ];
    actualKeys.forEach((key) => expect(expectedKeys).toContain(key));
  });
});
