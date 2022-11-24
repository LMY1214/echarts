let myChart = echarts.init(document.getElementsByClassName("water")[0]);
let compositeScore = 0.68;
let option = {
    graphic: [
        {
            type: "group",
            left: "center",
            top: "62%",
            children: [
                {
                    type: "text",
                    z: 100,
                    left: "10",
                    top: "middle",
                    style: {
                        fill: "#fff",
                        text: "综合评分",
                        font: "14px PingFangSC-Regular",
                    },
                },
            ],
        },
    ],
    series: [
        {
            type: "liquidFill", //水位图
            radius: "100%", //显示比例
            center: ["50%", "50%"], //中心点
            data: [compositeScore], // data个数代表波浪数
            color: ["#86daec"], //波浪颜色
            backgroundStyle: {
                color: {
                    type: "linearGradient",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: "rgba(17,65,86,0.64)",
                        },
                        {
                            offset: 0.51,
                            color: "rgba(32,70,84,0)",
                        },
                        {
                            offset: 0,
                            color: "rgba(99,254,254,0.35)",
                        },
                    ],
                    globalCoord: false,
                },
            },
            label: {
                //标签设置
                position: ["50%", "50%"],
                formatter: compositeScore * 100 + "%", //显示文本
                fontSize: "30px",
                fontFamily: "DINAlternate-Bold",
                fontWeight: "400",
                color: "#fff",
            },
            outline: {
                show: true,
                borderDistance: 5,
                itemStyle: {
                    borderColor: "transparent",
                    borderWidth: 1,
                },
            },
        },
    ],
};
myChart.setOption(option);
window.addEventListener('load', function () {
    myChart.resize();
})
window.addEventListener('resize', function () {
    myChart.resize();
})
