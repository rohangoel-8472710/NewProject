import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
// import MapView from 'react-native-map-clustering';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';
import ResultList from '../Map/resultList';
import colors from '../../constants/colors';

// const INITIAL_REGION = {
//   latitude: 52.5,
//   longitude: 19.2,
//   latitudeDelta: 8.5,
//   longitudeDelta: 8.5,
// };
// const INITIAL_REGION = {
//   latitude: 28.64688,
//   longitude: 77.34795,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// };
const LATITUDE = 28.64688;
const LONGITUDE = 77.34795;

interface Props {}
interface State {
  region: any;
  querySearch: string;
  queryData: string;
  resultSearch: Array<any>;
  resultData: Array<any>;
  searchCoordinates: any;
  lastCoordinates: any;
  sMarker: Array<any>;
  currentPosition: any;
  route: Array<any>;
  transport: any;
  animate: boolean;
}

function getRandomLatitude(min = 48, max = 56) {
  return Math.random() * (max - min) + min;
}

function getRandomLongitude(min = 14, max = 24) {
  return Math.random() * (max - min) + min;
}

export default class Maps extends Component<Props, State> {
  type: string | undefined;
  searchText: any;
  mapView: any;
  constructor(props: Props) {
    super(props);
    this.searchText = React.createRef();
    this.mapView = React.createRef();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      // route:{
      //    rlatitude:routelat,
      //    rlongitude:routelong,
      //    rlatitudeDelta: 0.0922,
      //    rlongitudeDelta: 0.0421,
      // },
      querySearch: '',
      queryData: '',
      resultSearch: [],
      resultData: [],
      searchCoordinates: null,
      lastCoordinates: null,
      sMarker: [],
      currentPosition: null,
      route: [],
      transport: {},
      animate: false,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(info => console.log(info));
  }

  onRegionChange(region: any) {
    this.setState({region});
  }

  SearchAPI = () => {
    let query = '';
    this.type === 'S'
      ? (query = this.state.querySearch)
      : (query = this.state.queryData);
    if (query.length >= 2) {
      try {
        axios
          .get(
            `https://api.tomtom.com/search/2/search/+${query}+.json?key=b40jLzJOguTM7Oc9W0BaSQeA4ojWbtDk`,
          )
          .then(response => {
            this.type === 'S'
              ? this.setState({resultSearch: response.data.results})
              : this.setState({resultData: response.data.results});
            console.log(response.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.type === 'S'
        ? this.setState({resultSearch: []})
        : this.setState({resultData: []});
    }
  };

  searchMarker = () => {
    let temp: any[] = this.state.sMarker;
    this.type === 'S'
      ? (temp[0] = this.state.searchCoordinates)
      : (temp[1] = this.state.lastCoordinates);
    this.setState({
      sMarker: temp,
      region:
        this.type === 'S'
          ? this.state.searchCoordinates
          : this.state.lastCoordinates,
    });
  };

  getRegion = (coordinates: any, place: string) => {
    this.setState({resultSearch: [], querySearch: place});
    this.type === 'S'
      ? this.setState({resultSearch: [], querySearch: place})
      : this.setState({resultData: [], queryData: place});
    setTimeout(() => {
      this.searchMarker();
    }, 2000);

    let r = {
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    this.type === 'S'
      ? this.setState({searchCoordinates: r}, () =>
          this.mapView.animateToRegion(r, 2000),
        )
      : this.setState({lastCoordinates: r}, () =>
          this.mapView.animateToRegion(r, 2000),
        );
  };
  itemList = () => {
    return <View style={styles.itemList}></View>;
  };

  renderItems = (rowData: any) => {
    const {item, index} = rowData;

    return (
      <ResultList
        data={item}
        checking={
          this.type === 'D' ? this.state.resultData : this.state.resultSearch
        }
        CoordinatesFunc={this.getRegion}
      />
    );
  };

  _generateMarkers = (count: any) => {
    const markers = [];

    for (let i = 0; i < count; i++) {
      markers.push(
        <Marker
          key={i}
          coordinate={{
            latitude: getRandomLatitude(),
            longitude: getRandomLongitude(),
          }}
          image={images.markerImage}
        />,
      );
    }

    return markers;
  };

  routeAPI = (callBack: Function) => {
    try {
      axios
        .get(
          `https://api.tomtom.com/routing/1/calculateRoute/${this.state.searchCoordinates.latitude}%2C${this.state.searchCoordinates.longitude}%3A${this.state.lastCoordinates.latitude}%2C${this.state.lastCoordinates.longitude}/json?avoid=unpavedRoads&travelMode=${type}&key=b40jLzJOguTM7Oc9W0BaSQeA4ojWbtDk`,
        )
        .then((response: any) => {
          callBack(response.data.routes);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  Paths = (title: string) => {
    const sa = this.state.searchCoordinates.latitude;
    const so = this.state.searchCoordinates.longitude;
    const la = this.state.lastCoordinates.latitude;
    const lo = this.state.lastCoordinates.longitude;
    const zoom = 0.07;

    let averageCoordinate = {
      latitude: (sa + la) / 2,
      longitude: (so + lo) / 2,
      latitudeDelta: sa > la ? sa - la + zoom : la - sa + zoom,
      longitudeDelta: so > lo ? so - lo + zoom : lo - so + zoom,
    };

    this.setState({region: averageCoordinate}, () =>
      this.mapView.animateToRegion(averageCoordinate, 2000),
    );

    const data: Array<any> = this.state.transport[title];
    data.forEach(itemData => {
      const legArr: Array<any> = itemData.legs;
      legArr.forEach(legData => {
        const legPoints = legData.points;
        this.setState({
          route: legPoints,
        });
      });
    });
  };

  Directions = async () => {
    this.setState({searchCoordinates: this.state.currentPosition}, async () => {
      let result = await new Promise((resolve, reject) => {
        this.routeAPI((response: any) => {
          resolve(response);
        });
      });
      const temp = this.state.transport;
      const newType = 'car';
      Object.assign(temp, {[newType]: result});
      this.setState({transport: temp});
    });
    this.setState({animate: false}, () => this.Paths('car'));
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>{strings.Social}</Text>
          <Image style={styles.searchImage} source={images.searchIcon} />
        </SafeAreaView>
        <View style={styles.textInput}>
          <Image style={styles.searchPin} source={images.searchPin} />
          <TextInput
            autoCorrect={false}
            autoCapitalize="words"
            returnKeyType="search"
            style={styles.searchText}
            placeholder={strings.splashText}
            onFocus={() => {
              (this.type = 'S'), this.setState({resultData: []});
            }}
            ref={ref => (this.searchText = ref)}
            value={this.state.querySearch}
            onChangeText={(text: string) =>
              this.setState({querySearch: text}, () =>
                setTimeout(() => {
                  this.SearchAPI();
                }, 600),
              )
            }
          />
        </View>
        <View style={styles.searchList}>
          <FlatList
            data={this.state.resultSearch}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemList}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps="always"
          />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={this.state.region}>
            <Marker coordinate={this.state.region} image={images.marker} />
            <Polyline
              coordinates={this.state.route}
              strokeColor={colors.pink}
            />
          </MapView>
        </View>
      </>
    );
  }
}
