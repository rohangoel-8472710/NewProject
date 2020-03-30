import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface Props {
  data: any;
  checking: Array<any>;
  CoordinatesFunc: Function;
}

export default class ResultList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    let add: any;
    const {data} = this.props;
    const {location} = this.props.data;

    this.props.checking.length === 0
      ? (add = data.add)
      : (add = data.add.noadd);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.flatView}
        onPress={() => {
          this.props.CoordinatesFunc(location, add);
        }}>
        <Text numberOfLines={1} style={styles.searchedText}>
          {add}{' '}
        </Text>
      </TouchableOpacity>
    );
  }
}
