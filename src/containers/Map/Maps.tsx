import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
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
  constructor(props: Props) {
    super(props);
    this.searchText = React.createRef();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      querySearch: '',
      queryData: '',
      resultSearch: [],
      resultData: [],
      searchCoordinates: null,
      lastCoordinates: null,
      sMarker: [],
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

  itemList = () => {
    return <View style={styles.itemList}></View>;
  };

  // renderItems = (rowData: any) => {
  //   const {item, index} = rowData;
  //   console.log('item ', item);

  //   return (
  //     <ResultList
  //       data={item}
  //       checking={
  //         this.type === 'D' ? this.state.resultData : this.state.resultSearch
  //       }
  //     />
  //   );
  // };

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
            // renderItem={this.renderItems}
            keyboardShouldPersistTaps="always"
          />
        </View>
        <View style={styles.mapContainer}>
          {/* <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            // showsUserLocation={true}
            initialRegion={this.state.region}>
            <Marker coordinate={this.state.region} image={images.marker} />
            {this._generateMarkers(10)}
          </MapView> */}
          <MapView
            initialRegion={INITIAL_REGION}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            image={images.marker}
            zoomEnabled={true}>
            {this._generateMarkers(10)}
          </MapView>
        </View>
      </>
    );
  }
}
