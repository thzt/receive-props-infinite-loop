const fetchNumber = async () => {
    const numbers = await new Promise((res, rej) =>
        setTimeout(() => res([1, 2, 3]), 1000));

    return numbers;
};

export default fetchNumber;