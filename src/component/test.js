import React from'react' ;
import PropTypes from'prop-types';
import OlMap  from'ol/Map';
import OlView from'ol/View';
import OlLayerTile from'ol/layer/Tile';
import OlSourceOsm from'ol/source/OSM';
import fromLonLat from'ol/proj';
import OlFormatGeoJson from'ol/format/GeoJSON';
import OlStyle from'ol/style/Style';
import OlStyleIcon from'ol/style/Icon';
import OlStyleText from'ol/style/Text';
import OlStyleFill from'ol/style/Fill';
import OlStyleStroke from'ol/style/Stroke';
import Input from'antd/lib/button';
import UrlUtil from'@terrestris/base-util/dist/UrlUtil/UrlUtil';

// Credits to Maps Icons Collection https://mapicons.mapsmarker.com.
const mapMarker = require('../../../assets/bus-map-marker.png');

class RemoteFeatureGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      features: [],
      pagination: {
        pageSize: 10,
        current: 1
      },
      sorter: {
        field: 'name',
        order: 'ascend'
      },
      nameFilterText: '',
      filterDropdownVisible: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      url
    } = this.props;

    const {
      pagination,
      sorter,
      nameFilterText
    } = this.state;

    const format = new OlFormatGeoJson();

    this.setState({
      loading: true
    });

    const queryParams = {
      SERVICE: 'WFS',
      VERSION: '1.1.0',
      REQUEST: 'GetFeature',
      TYPENAME: 'osm:osm-busstops',
      MAXFEATURES: pagination.pageSize,
      STARTINDEX: (pagination.current - 1) * pagination.pageSize,
      OUTPUTFORMAT: 'application/json',
      CQL_FILTER: 'BBOX(geometry, 814276,6697003,846762,6727578)'
    };

    const sortDir = sorter.order === 'ascend' ? ' A' : ' D';
    if (sorter.field) {
      queryParams.SORTBY = `${sorter.field}${sortDir}`;
    }

    if (nameFilterText) {
      queryParams.CQL_FILTER += ` AND name like '%${nameFilterText}%'`;
    }

    const query = UrlUtil.objectToRequestString(queryParams);

    fetch(`${url}?${query}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false
        });

        const features = format.readFeatures(response);

        if (features.length === 0) {
          alert('No matches found!');
          this.setState({
            nameFilterText: ''
          });
          return;
        }

        this.setState({
          features: features,
          pagination: {
            ...pagination,
            total: response.totalFeatures
          }
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
        alert('Could not fetch data!');
      });
  }

  onTableChange(pagination, filters, sorter) {
    this.setState({
      sorter: {
        ...this.state.sorter,
        ...sorter
      },
      pagination: {
        ...this.state.pagination,
        current: pagination.current
      },
    }, () => this.fetchData());
  }

  onNameFilterTextChange(evt) {
    this.setState({
      nameFilterText: evt.target.value
    });
  }

  onNameFilterSearch() {
    this.setState({
      pagination: {
        ...this.state.pagination,
        current: 1
      },
      filterDropdownVisible: false
    }, () => this.fetchData());
  }

  getFeatureStyle(feature, color) {
    return new OlStyle({
      image: new OlStyleIcon(({
        anchor: [0.5, 1.1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: mapMarker,
        color: color
      })),
      text: new OlStyleText({
        text: feature ? feature.get('name') : '',
        fill: new OlStyleFill({
          color: 'rgb(0, 0, 0)'
        }),
        stroke: new OlStyleStroke({
          color: 'rgb(255, 255, 255)',
          width: 2
        })
      })
    });
  }

  render() {
    const {
      map
    } = this.props;

    const {
      loading,
      features,
      pagination,
      nameFilterText,
      filterDropdownVisible,
    } = this.state;

    const getFeatureStyle = this.getFeatureStyle;

    return (
      <FeatureGrid
        features={features}
        map={map}
        loading={loading}
        zoomToExtent={true}
        selectable={true}
        pagination={pagination}
        featureStyle={function(feature) {
          return getFeatureStyle(feature);
        }}
        highlightStyle={function(feature) {
          return getFeatureStyle(feature, 'rgb(230, 247, 255)');
        }}
        selectStyle={function(feature) {
          return getFeatureStyle(feature, 'rgb(24, 144, 255)');
        }}
        onChange={this.onTableChange.bind(this)}
        columnDefs={{
          'name': {
            sorter: true,
            
            filterDropdownVisible: filterDropdownVisible,
            onFilterDropdownVisibleChange: visible => {
              this.setState({
                filterDropdownVisible: visible
              }, () => {
                this.searchInput.focus();
              });
            }
          }
        }}
      />
    );
  }
}

RemoteFeatureGrid.propTypes = {
  map: PropTypes.instanceOf(OlMap),
  url: PropTypes.string
};

class RemoteFeatureGridExample extends React.Component {

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
  }

  render() {
    return(
      <div>
        <RemoteFeatureGrid
          map={this.map}
          url='https://ows.terrestris.de/geoserver/osm/wfs'
        />
        <div
          id={this.mapDivId}
          style={{
            height: '400px'
          }}
        />
      </div>
    )
  }
}
