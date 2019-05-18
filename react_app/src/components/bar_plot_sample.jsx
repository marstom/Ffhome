import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_material from "@amcharts/amcharts4/themes/material";

// am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

export default class BarPlot extends React.Component {
    componentDidMount() {

        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
            {
                month: "Styczeń",
                amount: 23725
            },
            {
                month: "Luty",
                amount: -1882
            },
            {
                month: "Marzec",
                amount: 1809
            },
            {
                month: "Kwiecień",
                amount: 1322
            },
            {
                month: "Maj",
                amount: 1122
            },
            {
                month: "Czerwiec",
                amount: 1114
            },
            {
                month: "Lipiec",
                amount: 984
            },
            {
                month: "Sierpień",
                amount: 711
            },
            {
                month: "Wrzesień",
                amount: 665
            },
            {
                month: "Październik",
                amount: 580
            },
            {
                month: "Listopad",
                amount: 443
            },
            {
                month: "Grudzień",
                amount: 441
            }
        ];
        // chart.data = [
        //     {
        //         month: "2018",
        //         amount: 23725
        //     },
        // ]

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.fontSize = 11;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = -2000;
        valueAxis.max = 24000;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDistance = 30;
// axis break
        let axisBreak = valueAxis.axisBreaks.create();
        axisBreak.startValue = 2100;
        axisBreak.endValue = 22900;
        axisBreak.breakSize = 0.005;

// make break expand on hover
        let hoverState = axisBreak.states.create("hover");
        hoverState.properties.breakSize = 1;
        hoverState.properties.opacity = 0.1;
        hoverState.transitionDuration = 1500;

        axisBreak.defaultState.transitionDuration = 1000;
        /*
        // this is exactly the same, but with events
        axisBreak.events.on("over", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
            1500,
            am4core.ease.sinOut
          );
        });
        axisBreak.events.on("out", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
            1000,
            am4core.ease.quadOut
          );
        });*/

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "month";
        series.dataFields.valueY = "amount";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });


        //

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{width: "100%", height: "700px"}}></div>
        );
    }
}