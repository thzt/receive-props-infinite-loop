<div className="number-selector">
    {
        numbers.map((number, index) => {

            // 判断是否选中的按钮，用样式进行区分
            const isActive = number === selectedNumber;

            return (
                <input key={index}
                    type="button"
                    className={isActive ? 'active' : ''}
                    value={number}
                    onClick={() => onChangeNumber(number)}
                />
            );
        })
    }
</div>