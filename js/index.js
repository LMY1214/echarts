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