import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import Api from '../../Api'
import Chart from './Chart'

const apiKey = 'cfed679d59a400ce311452d1f70e6c4d'


const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

class Weather extends Component {


    constructor(props) {
        super(props)
        this.state = {
            weatherData: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    splitPerDays = (response) => {
        const days = 5;
        const dataLength = response.list.length;
        let chartData = []
        for(let k = 0; k < days; k++){
            console.log(k*dataLength/days, (1 + k)*dataLength/days)

            let data = response.list.slice(k*dataLength/days,(1 + k)*dataLength/days);
            let weatherDayData = this.prepareWeatherDataDay(data);
            chartData.push(weatherDayData)
        }
        this.setState({
            weatherData:chartData
        })

        console.log(chartData)
    };

    prepareWeatherDataDay = (data) => {

        let tempData = [];
        let humidityData = [];

        for(let i = 0; i < data.length; i++){
            let current = data[i];

            let temp = {
                x: current.dt_txt,
                y: current.main.temp
            }
            tempData.push(temp)

            let humidity = {
                x: current.dt_txt,
                y: current.main.humidity
            }
            humidityData.push(humidity)

            console.log(temp, humidity)
        }

        const day = new Date(data[0].dt_txt).getDay();

        let chartData = {
            temp: tempData,
            maxTemp: this.defineMax(tempData),
            humidity: humidityData,
            maxHumidity: this.defineMax(humidityData),
            day:weekDays[day]
        }

        return chartData;

    };

    defineMax = (data) => {
        // find maxima for normalizing data
        const maxValue = Math.max(...data.map((d) => d.y))
        return maxValue;
    };

    getCharts = (chartData) => {
        if(chartData.length > 0){
            const chartList = chartData.map((data, i)=>{
                return <Chart key={i} temp={data.temp} maxTemp={data.maxTemp} humidity={data.humidity} maxHumidity={data.maxHumidity} day={data.day} ></Chart>
            })
            return chartList
        }
        return <div>There is no weather data</div>
    };

    loadData = () => {
        Api.get({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            data: {
                q: 'Plovdiv,BG',
                appid: apiKey,
                units: 'metric'
            },
            success: this.splitPerDays
        })
    };

    render() {
        return (
            <div>
                {this.getCharts(this.state.weatherData)}
            </div>
        );
    }
}

export default Weather;
