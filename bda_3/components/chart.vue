<template style="width:100%" >
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
var Highcharts = require('highcharts');
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {

    name: 'chart',
    computed: {
        
        ...mapState(['beer'])
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.createChart()
    },
    methods: {
        createChart() {
            var beer = this.beer
            this.chart = Highcharts.chart('container', {
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg,
                    marginRight: 10,
                    events: {
                        load: function () {

                            var series = this.series;
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[0].prix_biere;
                                series[0].addPoint([x, y], true, true);
                            }, 1000);
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[1].prix_biere;
                                series[1].addPoint([x, y], true, true);
                            }, 1000);
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[2].prix_biere;
                                series[2].addPoint([x, y], true, true);
                            }, 1000);
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[3].prix_biere;
                                series[3].addPoint([x, y], true, true);
                            }, 1000);
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[4].prix_biere;
                                series[4].addPoint([x, y], true, true);
                            }, 1000);
                            setInterval(function () {
                                var x = (new Date()).getTime(),
                                    y = beer[5].prix_biere;
                                series[5].addPoint([x, y], true, true);
                            }, 1000);

                        }
                    }
                    
                },
                title : {
                    text: 'Prix actuel de la bière'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
                },
                legend: {
                    enabled: true
                },
                exporting: {
                    enabled: false
                },
                series: beer.map(b => ({
                    name: b.nom,
                    data: (function () {
                        var data = [],
                            time = (new Date()).getTime(),
                            i;

                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: b.prix_biere
                            });
                        }
                        return data;
                    }())
                }))
            });
        }
    }
}
</script>