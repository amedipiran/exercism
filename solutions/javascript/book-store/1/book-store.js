//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
    let totalPrice = 0;
    const PRICE = 800;

    const DISCOUNTS = {
        1: 1.00,
        2: 0.95,
        3: 0.90,
        4: 0.80,
        5: 0.75
    }

    let booksCounts = new Map();

    for(let i = 0; i < books.length; i++){
        const curr = books[i];
        booksCounts.set(curr, (booksCounts.get(curr) | 0) + 1);
    }

    let groups = [];

    while(true) {
        let groupSize = 0;

        for(const [book, count] of booksCounts) {
            if (count > 0) {
                groupSize++;
                booksCounts.set(book, count - 1);
            }
        }

        if(groupSize === 0) break;

        groups.push(groupSize);
    }

    let countFive = groups.filter(g => g === 5).length;
    let countThree = groups.filter(g => g === 3).length;

    while(countFive > 0 && countThree > 0) {
        groups.splice(groups.indexOf(5), 1);
        groups.splice(groups.indexOf(3), 1);
        groups.push(4);
        groups.push(4);

        countFive--;
        countThree--;
    }

    for(let i = 0; i < groups.length; i++){
        let size = groups[i];
        totalPrice += PRICE * size * DISCOUNTS[size];
    }


    return totalPrice;
};