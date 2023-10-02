
import React from 'react';
import * as d3 from 'd3';
import axios from 'axios';

export default class D3BudgetChart extends React.Component {
    data = [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }];
    outerRadius = 220
    innerRadius = 0
    colorScale
    arcGenerator
    svg
    margin = {
        top: 25, right: 25, bottom: 25, left: 25,
    };
    width = 2 * this.outerRadius + this.margin.left + this.margin.right;
    height = 2 * this.outerRadius + this.margin.top + this.margin.bottom;


    drawChart() {
        this.colorScale = d3
            .scaleSequential()
            .interpolator(d3.interpolateCool)
            .domain([0, this.data.length]);
        d3.select('#pie-container')
            .select('svg')
            .remove();
        // Create new svg
        this.svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        this.arcGenerator = d3
            .arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.outerRadius);
        this.pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value);
        this.arc = this.svg
            .selectAll()
            .data(this.pieGenerator(this.data))
            .enter();

        this.arc
            .append('path')
            .attr('d', this.arcGenerator)
            .style('fill', (_, i) => this.colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 0);
        // Append text labels
        this.arc
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .text((d) => d.data.label)
            .style("fill", "#ffffff")
            .attr('transform', (d) => {
                const [x, y] = this.arcGenerator.centroid(d);
                return `translate(${x}, ${y})`;
            })
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/budget`)
        .then(response => { 
            this.data = response.data.myMonthlyBudget.map(budget => {
                // eslint-disable-next-line no-lone-blocks
                return {
                label: budget.title,
                value: budget.budget
                }
            })
            this.drawChart();
        })
    }

    render() {
        return (
            <div className='pie-chart'>
            <h2>D3 Chart</h2>
            <div id="pie-container" />
        </div>
       )
    }
}