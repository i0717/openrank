// 活跃度柱状图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        // 设置图表颜色
        color: ["#1aadff"],
        // 实例化对象tooltip，当鼠标悬停在图表上时显示的信息
        tooltip: { 
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow"
            }
        },
        // 配置图表的栅格系统
        grid: {
            left: "0%",
            top: "35px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        // 配置x轴
        xAxis: [{
            type: "category",
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
         
            ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    color: "rgb(255, 255, 255)",
                    fontSize: "10"
                }
            },
             // 不显示x轴线
            axisLine: {
                show: false
            }
        }],
        // 配置y轴
        yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        // 配置系列数据
        series: [{
            name: "活跃度",
            type: "bar",
            barWidth: "35%",
            data: [1072.51, 1315.36, 1775.37, 1821.7, 1561.8, 1914.38, 2326.22, 2269.24, 2750.04, 2780.29, 2761.98, 2608.19],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    // 各年份的数据
    var dataAll = [{
            year: "2016",
            data: [1072.51, 1315.36, 1775.37, 1821.7, 1561.8, 1914.38, 2326.22, 2269.24, 2750.04, 2780.29, 2761.98, 2608.19]
        },
        {
            year: "2017",
            data: [2348.57, 3398.36, 3995.22, 3901.6, 3877.23, 3855.93, 3542.41, 3762.94, 3517.58, 4787.01, 4563.1, 3157.07]
        },
        {
            year: "2018",
            data: [3058.69, 3488.56, 3937.12, 3336.06, 3374.41, 3760.54, 3650.75, 3819.32, 3952.24, 4543.91, 3406.43, 2994.38]
        },
        {
            year: "2019",
            data: [3042.72, 3755.73, 3803.35, 3659.99, 3427.51, 3331.58, 3802.28, 3714.19, 3085.86, 3990.67, 4259.5, 4279.94]
        },
        {
            year: "2020",
            data: [3416.88, 3465.46, 4055.36, 4559.65, 4169.33, 4182.31, 4471.92, 3699.83, 4028.68, 3883.51, 3938.06, 3613.54]
    
        },
        {
            year: "2021",
            data: [3273.62, 4079.94, 3901.92, 3794.28, 3641.25, 3953.93, 3811.54, 3535.43, 4187.4, 3788, 3748.48, 3201.24]
    
        },
        {
            year: "2022",
            data: [3200.78, 3593.07, 3761.7, 3652.98, 3699.61, 3411.75, 3880.37, 4379.7, 3648.15, 3600.09, 3771.17, 3933.53]
    
        },
        {
            year: "2023",
            data: [3279.75, 4108.56, 4303.48,null, null, null, null, null, null, null,null, null]
    
        }
    ];
    // 外部变量，用于跟踪当前数据集索引
    let currentIndex = 0; 
 
    // 为所有按钮添加事件监听器
    document.querySelectorAll(".bar h2 button").forEach(button => {
        button.addEventListener("click", function() {
            // 根据按钮的 data-year 属性更新索引
            currentIndex = dataAll.findIndex(data => data.year === this.getAttribute("data-year"));

            // 更新图表数据
            option.series[0].data = dataAll[currentIndex].data;

            // 应用更新到图表
            myChart.setOption(option);
        });
    });
})();

// 受欢迎程度折线图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // 各年份的数据
    var data = {
        year: [
            [18262,31010,35050,39428,36256,32442,27958],
            [13264,23486,26194,26304,23324,21225,18196]
        ]
    };

    // 指定配置和数据
    var option = {
        // 设置图表颜色
        color: ["#00f2f1", "#fff"],
        // 配置鼠标悬停时显示的提示信息
        tooltip: {
            // 通过坐标轴触发
            trigger: "axis"
        },
        // 配置图例
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }

        },
        // 配置图表的栅格系统
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        // 配置x轴
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "2016年",
                "2017年",
                "2018年",
                "2019年",
                "2020年",
                "2021年",
                "2022年",
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgb(255, 255, 255)",
                fontSize: 10

            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        // 配置y轴
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "关注度",
                type: "line",
                // 让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "收藏量",
                type: "line",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 把配置和数据给实例对象
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// openrank均值饼图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));

    option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        // 配置图例
        legend: {  
            // 顶部距离
            top: '92.5%',
            // 调整宽度以影响换行
            width: '100%',   
            // 调整图例项宽度     
            itemWidth: 8,  
            // 调整图例项高度     
            itemHeight: 8,      
            data: ["2016年", "2017年", "2018年", "2019年", "2020年", "2021年", "2022年"],
            textStyle: {
                color: "rgb(255, 255, 255)",
                fontSize: "10"
            }
        },
        series: [{
            name: "openrank均值",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["40%", "70%"],
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
                "#06b4ab",
                "#06c8ab",
                "#06dcab",
                "#06f0ab"
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            },
            data: [{
                    value: 698.58,
                    name: "2016年"
                },
                {
                    value: 1422.18,
                    name: "2017年"
                },
                {
                    value: 1478.03,
                    name: "2018年"
                },
                {
                    value: 1413.0675,
                    name: "2019年"
                },
                {
                    value: 1537.91,
                    name: "2020年"
                },
                {
                    value: 1559.65,
                    name: "2021年"
                },
                {
                    value: 1634.33,
                    name: "2022年"
                }
                
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 参与者人数均值柱状图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    var salvProName =["2016年","2017年","2018年","2019年","2020年","2021年","2022年"];
	var salvProValue =[1117.5,2224.92,2147.08,2209.92,2321.42,2154.08,2152.25];
    //背景数据数组，初始化为与第一项数据相同的值，用于制作背景柱状图
	var salvProMax =[];
	for (let i = 0; i < salvProValue.length; i++) {
	    salvProMax.push(salvProValue[0])
	}
	option = {
        // 配置图表的栅格系统
	    grid: {
	        left: '2%',
	        right: '2%',
	        bottom: '-6%',
	        top: '8%',
	        containLabel: true
	    },
        // 配置鼠标悬停时显示的提示信息
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'none'
	        },
	        formatter: function(params) {
                // 自定义tooltip显示内容
	            return params[0].name  + ' : ' + params[0].value
	        }
	    },
        // 配置x轴
	    xAxis: {
	        show: false,
	        type: 'value'
	    },
        // 配置y轴
	    yAxis: [{
	        type: 'category',
	        inverse: true,
	        axisLabel: {
	            show: true,
	            textStyle: {
	                color: '#fff'
	            },
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        data: salvProName
	    }, {
	        type: 'category',
	        inverse: true,
	        axisTick: 'none',
	        axisLine: 'none',
	        show: true,
	        axisLabel: {
	            textStyle: {
	                color: '#ffffff',
	                fontSize: '12'
	            },
	        },
	        data:salvProValue
	    }],
        // 配置系列数据
	    series: [{
	            name: '值',
	            type: 'bar',
	            zlevel: 1,
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
                        // 渐变色填充
	                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: 'rgb(57,89,255,1)'
	                    }, {
	                        offset: 1,
	                        color: 'rgb(46,200,207,1)'
	                    }]),
	                },
	            },
	            barWidth: 10,
	            data: salvProValue
	        },
	        {
	            name: '背景',
	            type: 'bar',
	            barWidth: 10,
	            barGap: '-100%',
	            data: salvProMax,
	            itemStyle: {
	                normal: {
	                    color: 'rgba(24,31,68,1)',
	                    barBorderRadius: 30,
	                }
	            },
	        },
	    ]
	};


    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// issue数量变化折线图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    // 坐标轴指示线的颜色
                    color: "#dddc6b"
                }
            }
        },
        // 配置数据缩放组件，用于在图表中滑动查看数据
        dataZoom: [
            {
                type: 'slider',
                // 数据窗口的起始百分比
                start: 0, 
                // 数据窗口的结束百分比
                end: 30, 
                // 只控制x轴的index
                xAxisIndex: 0, 
                // 过滤模式
                filterMode: 'filter', 
                 // 不显示数据的阴影
                showDataShadow: false,
                // 滑块的大小
                handleSize: '80%', 
                handleStyle: {
                    // 滑块的填充颜色设置为透明
                    color: 'rgba(0,0,0,0)', 
                    // 阴影的大小
                    shadowBlur: 0, 
                    // 阴影的颜色设置为透明
                    shadowColor: 'rgba(0, 0, 0, 0)', 
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0, 
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0 
                },
                // 滑块边框颜色设置为透明
                borderColor: 'rgba(0,0,0,0)', 
                // 滑块背景颜色设置为透明
                backgroundColor: 'rgba(0,0,0,0)' 
            }
        ],
        // 配置图例
        legend: {
            top: "0%",
            // 图例文字的样式
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            }
        },
        // 配置图表的栅格系统
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
         // 配置x轴
        xAxis: [{
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgb(255, 255, 255)",
                        fontSize: 12
                    }
                },
                // x轴线的样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
                //x轴数据
                data: [
                    "2015-11",
                    "2015-12",
                    "2016-01",
                    "2016-02",
                    "2016-03",
                    "2016-04",
                    "2016-05",
                    "2016-06",
                    "2016-07",
                    "2016-08",
                    "2016-09",
                    "2016-10",
                    "2016-11",
                    "2016-12",
                    "2017-01",
                    "2017-02",
                    "2017-03",
                    "2017-04",
                    "2017-05",
                    "2017-06",
                    "2017-07",
                    "2017-08",
                    "2017-09",
                    "2017-10",
                    "2017-11",
                    "2017-12",
                    "2018-01",
                    "2018-02",
                    "2018-03",
                    "2018-04",
                    "2018-05",
                    "2018-06",
                    "2018-07",
                    "2018-08",
                    "2018-09",
                    "2018-10",
                    "2018-11",
                    "2018-12",
                    "2019-01",
                    "2019-02",
                    "2019-03",
                    "2019-04",
                    "2019-05",
                    "2019-06",
                    "2019-07",
                    "2019-08",
                    "2019-09",
                    "2019-10",
                    "2019-11",
                    "2019-12",
                    "2020-01",
                    "2020-02",
                    "2020-03",
                    "2020-04",
                    "2020-05",
                    "2020-06",
                    "2020-07",
                    "2020-08",
                    "2020-09",
                    "2020-10",
                    "2020-11",
                    "2020-12",
                    "2021-01",
                    "2021-02",
                    "2021-03",
                    "2021-04",
                    "2021-05",
                    "2021-06",
                    "2021-07",
                    "2021-08",
                    "2021-09",
                    "2021-10",
                    "2021-11",
                    "2021-12",
                    "2022-01",
                    "2022-02",
                    "2022-03",
                    "2022-04",
                    "2022-05",
                    "2022-06",
                    "2022-07",
                    "2022-08",
                    "2022-09",
                    "2022-10",
                    "2022-11",
                    "2022-12",
                    "2023-01",
                    "2023-02",
                    "2023-03",
                ]
            },
            {
                axisPointer: {
                    show: false
                },
                 // 不显示x轴线
                axisLine: {
                    show: false
                },
                position: "bottom",
                offset: 20
            }
        ],
        // 配置y轴
        yAxis: [{
            type: "value",
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                     // y轴线的颜色
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    // y轴标签的文字颜色
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },

            splitLine: {
                lineStyle: {
                    // y轴分割线的颜色
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        // 配置系列数据
        series: [{
                name: "创建数量",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                // 区域填充样式
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{      // 渐变色开始的位置
                                    offset: 0,
                                    // 渐变色开始的颜色
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {   // 渐变色结束的位置
                                    offset: 0.8,
                                    // 渐变色结束的颜色
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            // 是否重复渐变色
                            false
                        ),
                        // 阴影颜色
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 数据点的样式
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    731,
                    884,
                    866,
                    972,
                    1280,
                    1184,
                    1075,
                    1479,
                    1400,
                    1349,
                    1766,
                    1672,
                    1454,
                    1620,
                    1613,
                    1895,
                    2140,
                    1907,
                    2016,
                    2168,
                    1760,
                    1828,
                    1808,
                    1853,
                    2019,
                    1572,
                    1594,
                    1873,
                    2113,
                    1653,
                    1635,
                    2256,
                    1856,
                    1920,
                    1749,
                    2048,
                    1499,
                    1482,
                    1541,
                    1809,
                    1799,
                    1439,
                    1470,
                    1594,
                    1793,
                    1713,
                    1360,
                    1999,
                    1943,
                    2037,
                    1843,
                    1910,
                    2190,
                    2561,
                    2064,
                    2405,
                    2197,
                    1854,
                    1986,
                    1839,
                    1689,
                    1987,
                    1722,
                    2232,
                    2220,
                    2353,
                    1908,
                    2556,
                    2084,
                    1785,
                    2064,
                    1876,
                    1844,
                    1606,
                    1766,
                    1933,
                    1968,
                    1753,
                    1705,
                    1783,
                    2008,
                    2214,
                    1957,
                    1684,
                    1754,
                    1668,
                    1836,
                    2089,
                    2096
                ]
            },
            {
                name: "关闭数量",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    369,
                    596,
                    659,
                    728,
                    1133,
                    911,
                    884,
                    1105,
                    1216,
                    1285,
                    1391,
                    1417,
                    1258,
                    1214,
                    1552,
                    1727,
                    1797,
                    2125,
                    1933,
                    1735,
                    1383,
                    1593,
                    1534,
                    1621,
                    3491,
                    1724,
                    1400,
                    1616,
                    1908,
                    1642,
                    1498,
                    1896,
                    1658,
                    1701,
                    3274,
                    1856,
                    1225,
                    1325,
                    1337,
                    1318,
                    1597,
                    1164,
                    1423,
                    1218,
                    1685,
                    1736,
                    1224,
                    4043,
                    1599,
                    1607,
                    1642,
                    1614,
                    2061,
                    2407,
                    1750,
                    2162,
                    2068,
                    1788,
                    1774,
                    1918,
                    2965,
                    1340,
                    1647,
                    1922,
                    1921,
                    1840,
                    1778,
                    2094,
                    1729,
                    1595,
                    1785,
                    1665,
                    1658,
                    1470,
                    1588,
                    1625,
                    1687,
                    1346,
                    1335,
                    1466,
                    1596,
                    1979,
                    1696,
                    1490,
                    1433,
                    3763,
                    1544,
                    1643,
                    1667
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 巴士系数均值饼图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 指定配置项和数据
    var option = {
        // 配置图例
        legend: {
            top: "90%",
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: "rgb(255, 255, 255)",
                fontSize: "9.4"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 设置图表颜色
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "巴士系数均值",
            type: "pie",
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: "radius",
            data: [{
                    value: 784,
                    name: "2016年"
                },
                {
                    value: 1400.75,
                    name: "2017年"
                },
                {
                    value: 1412,
                    name: "2018年"
                },
                {
                    value: 1456.67,
                    name: "2019年"
                },
                {
                    value: 1608.17,
                    name: "2020年"
                },
                {
                    value: 1508.58,
                    name: "2021年"
                },
                {
                    value: 1452.75,
                    name: "2022年"
                },

            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            }
        }]
    };

    // 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function leidatu(){
	var myChart = echarts.init(document.getElementById('leida'));
	option = {
       tooltip: {
             // 数据项图形触发
             trigger: 'item', 
             // params 是当前数据项的信息，包括系列名、数据名、数据值等
             formatter: function(params) {
             // 数据项的名称
             var seriesName = params.name; 
             // 数据值，是一个数组
             var data = params.value; 
             // 系列的索引，用于获取对应的雷达图指标
             var indicator = params.seriesIndex; 
             var tooltipContent = '<div><p>' + seriesName + "年" + '</p >';
             
            // 遍历雷达图的指标，构建tooltip内容
             for (var i = 0; i < option.radar[0].indicator.length; i++) {
                tooltipContent += '<p>' + option.radar[0].indicator[i].text + ': ' + data[i] + '</p >';
                 }
             tooltipContent += '</div>';
             return tooltipContent;
           }
        },

	    color: ['rgb(26, 109, 253)','rgb(53, 254, 194)', 'rgb(245, 251, 130)','#fbca4f','#fff','#99ff4d','#7ce2fe'],
        // 配置图例
	    legend: {
	        show: true,
            align: 'left',
	        bottom: '4%',
	        left:'80%',
            width: '20%',
            // 图例标记的图形宽度
	        itemWidth: 15, 
            // 图例标记的图形高度
	        itemHeight: 14, 
            // 图例每项之间的间隔
	        itemGap: 14, 
	        textStyle: {
	            fontSize: 12,
	            color: '#fff'
	        },
	        data:  ['2016', '2017', '2018', '2019', '2020','2021','2022'],
	    },
	    radar: [{
	        indicator: [{
                text: 'star数量',
                max: 26304
            },
            {
                text: 'fork数量',
                max: 6562
            },
            {
                text: 'issue创建数量',
                max: 24525
            },
            {
                text: 'PR数量',
                max: 6444
            },
            {
                text: '新增加的贡献者数量',
                max: 312
            }
        ],

	        textStyle: {
	            color: 'red'
	        },
	        center: ['50%', '60%'],
	        radius: '80%',
	        startAngle: 90,
	        splitNumber: 3,
            // 图例列表的布局朝向为纵向
	        orient: 'vertical', 
	        name: {
	            formatter: '{value}',
	            textStyle: {
                    //外圈标签字体大小
	                fontSize: 15, 
                    //外圈标签字体颜色
	                color: '#fff' 
	            }
	        },
            // 坐标轴在 grid 区域中的分隔区域
	        splitArea: { 
	            show: true,
                // 分隔区域的样式设置
	            areaStyle: { 
                    // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色
	                color: ['#141c42', '#141c42'], 
	            }
	        },
            //外圈文本的分隔线样式
	        axisLine: { 
	            lineStyle: {
	                color: '#153269'
	            }
	        },
	        splitLine: {
	            lineStyle: {
                    // 分隔线颜色
	                color: '#113865', 
                    // 分隔线线宽
	                width: 1, 
	            }
	        }
	    }, ],
	    series: [{
	        name: '雷达图',
	        type: 'radar',
	        itemStyle: {
	            emphasis: {
	                lineStyle: {
	                    width: 4
	                }
	            }
	        },
	        data: [{
	            name: '2016',
	            value: [13264, 2499, 16117, 922, 176],
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                            //上
	                        y2: 1, 
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgb(26, 109, 253)'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgb(26, 109, 253)'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            },
	            itemStyle: {
                    //图形悬浮效果
	                normal: { 
	                    borderColor: 'rgb(26, 109, 253)',
	                    borderWidth: 2.5
	                }
	            },
	        }, {
	            name: '2017',
	            value: [23486, 3762, 22579, 1459, 278],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: 'rgb(53, 254, 194)',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                             //上
	                        y2: 1,
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgb(53, 254, 194)'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgb(53, 254, 194)'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            },
	        }, {
	            name: '2018',
	            value: [26194, 4428, 21678, 1783, 312],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: 'rgb(245, 251, 130)',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                            //上
	                        y2: 1, 
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgb(245, 251, 130)'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgb(245, 251, 130)'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            }
	        }, {
	            name: '2019',
	            value: [26304, 6562, 20497, 1938, 272],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#fbca4f',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                             //上
	                        y2: 1,
	                        colorStops: [{
	                            offset: 0,
	                            color: '#fbca4f'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: '#fbca4f'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            }
	        }, {
	            name: '2020',
	            value: [23324, 6466, 24525, 1978, 283],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                            //上
	                        y2: 1, 
	                        colorStops: [{
	                            offset: 0,
	                            color: '#fff'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0, 0, 0, 0)'
	                        }, {
	                            offset: 1,
	                            color: '#fff'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            }
	        }, {
	            name: '2021',
	            value: [21225, 5608, 24250, 2494, 233],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#99ff4d',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                             //左
	                        x2: 1,
                            //上
	                        y2: 1, 
	                        colorStops: [{
	                            offset: 0,
	                            color: '#99ff4d'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0, 0, 0, 0)'
	                        }, {
	                            offset: 1,
	                            color: '#99ff4d'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            }
	        }, {
	            name: '2022',
	            value: [18196, 4881, 22193, 6444, 213],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#7ce2fe',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
                    // 单项区域填充样式
	                normal: { 
	                    color: {
	                        type: 'linear',
                            //右
	                        x: 0, 
                            //下
	                        y: 0, 
                            //左
	                        x2: 1, 
                            //上
	                        y2: 1, 
	                        colorStops: [{
	                            offset: 0,
	                            color: '#7ce2fe'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0, 0, 0, 0)'
	                        }, {
	                            offset: 1,
	                            color: '#7ce2fe'
	                        }],
	                        globalCoord: false
	                    },
                        // 区域透明度
	                    opacity: 1 
	                }
	            }
	        }]
	    }, ]
	};
    // 配置项和数据给实例化对象
    myChart.setOption(option);
    // 浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
    myChart.resize();
    });

    // 监听窗口大小变化并更新图表配置
    window.addEventListener('resize', function() {
        // 根据窗口大小动态调整字体大小
        var newFontSize = Math.max(8, (window.innerWidth - 800) / 50); 

        // 更新字体大小
        option.radar[0].name.textStyle.fontSize = newFontSize;
        option.series[0].itemStyle.emphasis.lineStyle.width = newFontSize / 10; 
        option.legend.textStyle.fontSize = newFontSize;
        option.legend.textStyle.itemGap = newFontSize;
        // 重新设置图表配置以应用更改
        myChart.setOption(option);
    });
})();