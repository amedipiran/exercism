export const rows = (num) => {
    let triangle = [];

    if(num === 0) return triangle;

    triangle.push([1]);

    for(let i = 1; i < num; i++){
        const prev = triangle[i - 1];
        const row = [];
        row.push(1);
        for(let j = 0; j < prev.length - 1; j++){
            row.push(prev[j] + prev[j + 1]);
        }

        row.push(1);
        triangle.push(row)
    }

    return triangle;
};
