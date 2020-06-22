// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'components';
import { setTemperature, setPressure, setHumidity } from 'store/room/actions';
import type { State, Value} from 'types';
import styles from './main.module.scss';

type OwnProps = {||};

type Props = {
  ...OwnProps,
  temperature: Value,
  pressure: Value,
  humidity: Value,
  
  setTemperatureAction: (Value) => void,
  setPressureAction: (Value) => void,
  setHumidityAction: (Value) => void,
};

const Main = ({
  temperature,
  pressure,
  humidity,
  setTemperatureAction,
  setPressureAction,
  setHumidityAction,
}: Props) => {
  useEffect(() => {
    setTemperatureAction(0);
    setPressureAction(0);
    setHumidityAction(0);
  }, []);
  
  const getTemplate = () => {
    const widgets = [
      { name: 'Temperature', value: temperature },
      { name: 'Air pressure', value: pressure },
      { name: 'Humidity', value: humidity },
    ];
    
    return widgets.map(widget => (
      <Card className={styles.card} key={widget.name}>
        <p className={styles.title}>{widget.name}</p>
        <p className={styles.value}>{widget.value}</p>
      </Card>
    ));
  };
  
  return (
    <div className={styles.wrapper}>
      {getTemplate()}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  temperature: state.room.temperature,
  pressure: state.room.pressure,
  humidity: state.room.humidity,
});

const mapDispatchToProps = (dispatch) => ({
  setTemperatureAction: (value: Value) => dispatch(setTemperature(value)),
  setPressureAction: (value: Value) => dispatch(setPressure(value)),
  setHumidityAction: (value: Value) => dispatch(setHumidity(value)),
});

export default connect<Props, OwnProps, _, _, _, _>(mapStateToProps, mapDispatchToProps)(Main);
