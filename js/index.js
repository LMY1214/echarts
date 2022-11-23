// 监控
let choseTab_ = document.getElementsByClassName('choseTab');
let showTab_ = document.getElementsByClassName('showTab');
for (var i = 0; i < choseTab_.length; i++) {
    choseTab_[i].setAttribute('index', i)
    choseTab_[i].onclick = function () {
        for (var j = 0; j < choseTab_.length; j++) {
            var index_ = this.getAttribute('index')
            choseTab_[j].classList.remove('active');
            choseTab_[index_].classList.add('active');
        }
        for (var k = 0; k < showTab_.length; k++) {
            showTab_[k].style.display = 'none';
            showTab_[index_].style.display = 'block';

        }
    }
}
// 点位分布

(function () {
    let myChart = echarts.init(document.getElementsByClassName('pie')[0]);
    let option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            tigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 8
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 提示信息的线的长度
                    // 第一根线
                    length: 6,
                    // 第二根线
                    length2: 8,
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize()
    })
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

// 全国用户总量统计 
(function () {
    let myChart = echarts.init(document.getElementsByClassName('bar')[0]);

    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: "#254065"
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }

    }
    let option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ],
            global: false // 缺省为 false
        },
        grid: {
            top: '4%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        tooltip: {
            tigger: 'axis'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            axisLabel: {
                color: '#71f2fb'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },

            data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆']
        },
        yAxis: {
            type: 'value',
            axisTick: {
                // 不显示刻度
                show: false
            },
            axisLabel: {
                color: '#71f2fb'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },

        series: [
            {
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240], type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})()