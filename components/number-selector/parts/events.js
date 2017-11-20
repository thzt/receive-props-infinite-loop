export default {
    // 事件

    onChangeNumber(number) {
        const {
            state: { selectedNumber },
            props: { onChange },
        } = this;

        if (selectedNumber === number) {
            return;
        }

        this.setState({
            selectedNumber: number,
        });

        onChange(number);
    },

    // 生命周期函数

    // 设置默认选中第一项
    componentWillReceiveProps({ numbers, onChange }) {
        const {
            state: { selectedNumber },
        } = this;

        // 如果numbers清空了，且内部有状态，就清空状态，触发onChange
        if (numbers.length === 0 && selectedNumber != null) {
            this.setState({
                selectedNumber: null,
            });

            // 向父组件传值selectedNumber===null
            onChange(null);
            return;
        }

        // 如果numbers清空了，且内部无状态，则不触发onChange
        if (numbers.length === 0) {
            return;
        }

        // note: >>>> 新增避免陷入死循环的条件 >>>>
        // 如果selectedNumber在numbers中，就不改变它，直接返回
        const isContainedInNumbers = numbers.some(number => number === selectedNumber);
        if (isContainedInNumbers) {
            return;
        }
        // note: <<<< 新增避免陷入死循环的条件 <<<<

        // 否则，设置为选中第一项
        const firstNumber = numbers[0];
        this.setState({
            selectedNumber: firstNumber,
        });

        // 向父组件传值
        onChange(firstNumber);
    },
};