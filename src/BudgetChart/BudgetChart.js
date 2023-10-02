
import React from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);

export default class BudgetChart extends React.Component {
    backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ]
    borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    ]
    state = {
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: 'Cost #',
                    data: [5, 5, 5, 5, 5, 5],
                    backgroundColor: this.backgroundColor,
                    borderColor: this.borderColor,
                    borderWidth: 1,
                },
            ],
        }
    }


    componentDidMount() {
        axios.get(`http://localhost:3001/budget`)
            .then(response => {
                let data = {
                    labels: [],
                    datasets: [
                        {
                            label: 'Cost #',
                            data: [],
                            backgroundColor: this.backgroundColor,
                            borderColor: this.borderColor,
                            borderWidth: 1
                        }
                    ]
                }
                const myMonthlyBudget = response.data.myMonthlyBudget
                for (var i = 0; i < myMonthlyBudget.length; i++) {
                    data.datasets[0].data[i] = myMonthlyBudget[i].budget;
                    data.labels[i] = myMonthlyBudget[i].title;
                }
                console.log(data)
                this.setState({
                    data: data
                });
            })
    }

    render() {
        return (   
        <div className='pie-chart'>
            <h2>Pie Chart</h2>
            <Pie data={this.state.data} />
        </div>
        )
    }
}