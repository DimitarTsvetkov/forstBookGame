import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import {VictoryChart, VictoryTheme, VictoryAxis, VictoryArea, VictoryLine, VictoryScatter} from 'victory';


const xOffsets = [50,  550];
const colors = ["#ff7200",  "#8bb3db"];

// axis: {stroke: colors[i]},
// ticks: {padding: tickPadding[i]},
// tickLabels: {fill: colors[i], textAnchor: anchors[i]}

const tempAxisStyle = {
    axis: {
        stroke: colors[0]
    },
    tickLabels: {
        fontSize: '12',
        fontFamily: 'Roboto',
        padding: 5,
        fill: '#bd4e00'
    },
    grid: {
        stroke: '#adcae7',
        strokeWidth: 1,
        strokeDasharray: '3, 3',
    }

}

const humidityAxisStyle = {
    axis: {
        stroke: colors[1]
    },
    tickLabels: {
        fontSize: '12',
        fontFamily: 'Roboto',
        padding: 5,
        fill: '#6685a4'
    },
    grid: {
        strokeWidth: 0
    },
    ticks: {
        padding: -40
    }

}

const timeAxisStyle = {
    grid: {
        stroke: '#adcae7',
        strokeWidth: 1,
        strokeDasharray: '3, 3',
    }
}

class Chart extends Component {


    componentDidMount () {

    }

    pad = (n, width, z = '0') =>{
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    getHoursLabel = (dateText) => {
        let label = '';
        label = new Date(dateText).getHours()
        label = this.pad(label,2) + ':00'
        return label;
    }

    getDegrees = (t) => {
        const value = Math.round(t);
        let label = value + ' ℃'
        return label
    }

    render() {
        return (
            <Paper className="chart-container">
                <div className="weather-day">
                        {this.props.day}
                </div>
                <div >
                    <VictoryChart
                        theme={VictoryTheme.material}
                        width={600} height={250}
                        domain={{y: [-5, 5]}}
                    >
                        <VictoryAxis key={0} tickFormat={(x) => this.getHoursLabel(x)} offsetY={50} style={timeAxisStyle}/>

                            <VictoryAxis dependentAxis
                                         key={1}
                                         offsetX={xOffsets[0]}
                                         crossAxis={false}
                                         style={tempAxisStyle}
                                // Use normalized tickValues (0 - 1)
                                // Re-scale ticks by multiplying by correct maxima
                                         tickFormat={(t) => this.getDegrees(t * this.props.maxTemp)}
                            />

                        <VictoryAxis dependentAxis
                                     key={2}
                                     offsetX={xOffsets[1]}
                                     crossAxis={false}
                                     style={humidityAxisStyle}
                            // Use normalized tickValues (0 - 1)
                            // Re-scale ticks by multiplying by correct maxima
                                     tickFormat={(t) => Math.round(t*this.props.maxHumidity/4)}
                        />







                        <VictoryArea
                            key={1}
                            data={this.props.humidity}
                            interpolation="natural"
                            style={{
                                data: {
                                    stroke: colors[1],
                                    fill: colors[1],
                                    fillOpacity: 0.5
                                },
                                parent: {border: "1px solid " + colors[1], overflow: 'visible'}
                            }}
                            // normalize data
                            y={(datum) => datum.y / this.props.maxHumidity*4}
                            y0={() => -5}
                        />

                        <VictoryArea
                            key={0}
                            data={this.props.temp}
                            interpolation="natural"
                            style={{
                                data: {
                                    stroke: colors[0],
                                    fill: colors[0],
                                    fillOpacity: 0.5
                                },
                                parent: {border: "1px solid " + colors[1], overflow: 'visible'}
                            }}

                            // normalize data
                            y={(datum) => datum.y / this.props.maxTemp}
                            y0={() => -5}

                        />

                        <VictoryScatter data={this.props.temp}
                                        size={3}
                                        style={{
                                            data: {
                                                fill: '#fff',
                                                stroke: colors[0],
                                                strokeWidth: 1
                                            }
                                        }}
                                        y={(datum) => datum.y / this.props.maxTemp}
                        />
                        <VictoryScatter data={this.props.humidity}
                                        size={3}
                                        style={{
                                            data: {
                                                fill: '#fff',
                                                stroke: colors[1],
                                                strokeWidth: 1
                                            }
                                        }}
                                        y={(datum) => datum.y / this.props.maxHumidity*4}
                        />


                    </VictoryChart>
                </div>

            </Paper>
        );
    }
}

export default Chart;
