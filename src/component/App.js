
import { ToggleGroup,DigitizeButton } from "@terrestris/react-geo"


const React = require('react');
const OlMap = require('ol/Map').default;
const OlView = require('ol/View').default;
const OlLayerTile = require('ol/layer/Tile').default;
const OlSourceOsm = require('ol/source/OSM').default;
const fromLonLat = require('ol/proj').fromLonLat;

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.mapDivId = `map-${Math.random()}`;

    this.map = new OlMap({
      layers: [
        new OlLayerTile({
          name: 'OSM',
          source: new OlSourceOsm()
        })
      ],
      view: new OlView({
        center: fromLonLat([37.40570, 8.81566]),
        zoom: 4
      })
    });
  }

  componentDidMount() {
    this.map.setTarget(this.mapDivId);
    this.props.dummy_action("loading component");
  }

  render() {
    return(
      <div>
        <div
          id={this.mapDivId}
          style={{
            height: '400px'
          }}
        />

        <div>
          <span>Select a digitize type:</span>
          <ToggleGroup>
            <DigitizeButton
              name="drawPoint"
              map={this.map}
              drawType="Point"
            >
            Draw point
            </DigitizeButton>

            <DigitizeButton
              name="drawLine"
              map={this.map}
              drawType="LineString"
            >
            Draw line
            </DigitizeButton>

            <DigitizeButton
              name="drawPolygon"
              map={this.map}
              drawType="Polygon"
            >
            Draw polygon
            </DigitizeButton>
            
          </ToggleGroup>
        </div>
      </div>
    );
  }
}
