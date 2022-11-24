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
})();

//折线图上边那一部分 切换
let filter_a = document.getElementsByClassName('filter')[0].children;
let orderData_ = document.getElementsByClassName('orderData');
for (var i = 0; i < filter_a.length; i++) {
    filter_a[i].setAttribute('index', i);
    filter_a[i].onclick = function () {
        let index_ = this.getAttribute('index')
        for (var j = 0; j < filter_a.length; j++) {
            filter_a[j].classList.remove('active');
            filter_a[index_].classList.add('active')
        }
        for (var k = 0; k < filter_a.length; k++) {
            orderData_[k].classList.add('orderDataHidden');
            orderData_[index_].classList.remove('orderDataHidden')
        }
    }
}
// 自动切换
let ind = 0;
let timer;
function time() {
    timer = setInterval(function () {
        ind++;
        if (ind >= filter_a.length) {
            ind = 0;
        }
        filter_a[ind].click()
    }, 1500)
};
time();
// 当鼠标移上停止切换
let order_ = document.getElementsByClassName('order')[0];
order_.onmouseenter = function () {
    clearInterval(timer)
}
order_.onmouseleave = function () {
    time()
};

// 销售额  折线图
(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    let myChart = echarts.init(document.getElementsByClassName('sline')[0]);
    let option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false,  // 去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                // data: data.year[0],
                data: data.year[0],
                type: 'line',
                stack: 'Total',
                // 折线修饰为圆滑
                smooth: true,
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                stack: 'Total',
                smooth: true,
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
    let caption_a = document.getElementsByClassName('caption')[0].getElementsByTagName('a');
    for (var i = 0; i < caption_a.length; i++) {
        caption_a[i].setAttribute('index', i);
        caption_a[i].onclick = function () {
            var index_ = this.getAttribute('index');
            for (var j = 0; j < caption_a.length; j++) {
                caption_a[j].classList.remove('active');
                caption_a[index_].classList.add('active');
            }
            var dataTime = this.getAttribute('data-time');
            option.series[0].data = data[dataTime][0];
            option.series[1].data = data[dataTime][1];
            myChart.setOption(option);
        }
    };
    var ind = 0;
    var timer;
    function time() {
        timer = setInterval(function () {
            ind++;
            if (ind >= caption_a.length) {
                ind = 0;
            }
            caption_a[ind].click()
        }, 2000);
    }
    time();
    let sales_ = document.getElementsByClassName('sales')[0];
    sales_.onmouseenter = function () {
        clearInterval(timer);
    };
    sales_.onmouseleave = function () {
        time()
    }
})();

// 雷达图
(function () {
    let myChart = echarts.init(document.getElementsByClassName('radar')[0]);
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],

    ];
    let option = {
        name: {
            textStyle: {
                color: '#4c9bfd',
            }
        },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)',

        },
        radar: {
            center: ['50%', '50%'],
            // 外半径占据容器大小
            radius: '60%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: '#4c9bfd',
                fontSize: 9,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            lineStyle: {
                normal: {
                    color: '#fff',
                    // width: 1
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            areaStyle: {
                color: 'rgba(238, 197, 102, 0.6)',
            },
        },

        series: [
            {
                name: 'ZhengZhou',
                type: 'radar',
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                },
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 8,
                },
            },


        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})()