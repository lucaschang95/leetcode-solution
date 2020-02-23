# Array




> 寻找两个sorted array的第K小数

solution:
1. 都需要使用双指针
1. 二分法(O(log(m+n))), 每次去除两个数组中k/2 (非数组一半)的元素.
2. 切分思想: 切分左边元素数量和为k的性质, 将双指针定位问题变为单指针定位问题.



#### Repeated or missing values

- 题目写明除此之外都是有序的

Solution: 

- map structure
- 鸽巢理论 (exchange values)
- 按位异或
- 排序 (`On = nlgN`)



> 回文数

solution:

1. 依次取出最小位置, 并反转



> 数组元素的定向移动

solution:

1. 双指针保存状态, 