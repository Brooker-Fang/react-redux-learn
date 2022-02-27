## redux实现
+ 通过createStore创建store来存储数据
+ store通过reducer函数初始化state 并定义state数据变化规则
+ 通过dispatch一个action来提交对数据的修改
+ action提交到reducer函数，reducer根据action.type 返回新的state，并执行所有订阅了state的函数
+ 可以通过subscribe订阅store中state的变化，在dispatch更新新的state时，执行所有订阅函数