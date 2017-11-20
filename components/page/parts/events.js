// ajax
import fetchNumber from '../../../ajax/fetch-number';

export default {
    // 事件

    // 为子组件绑定的事件，用于向父组件返回值
    onChange(number) {
        return this.setState({
            selectedNumber: number,
        })
    },

    // 生命周期函数

    // 生命周期函数可以是async function
    // 通过fetchNumber发送ajax请求得到异步数据
    async componentDidMount() {
        try {
            const numbers = await fetchNumber();

            this.setState({
                numbers,
            });
        } catch (err) {
            // todo: 处理错误
            console.error(err);
        }
    },
};