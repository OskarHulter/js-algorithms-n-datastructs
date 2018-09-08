arrayOfData = [
    { element: 1 },
    { element: 2 },
    { element: 3 },
    { element: 4 },
    { element: 5 }
];

function binarySort(answer) {
    let closestPoint = {};
    for (let i = 0, c = 0; i < arrayOfData.length; i++) {
        if (Math.abs(arrayOfData[i].element - answer) <= c) {
            c = Math.abs(arrayOfData[i].element - answer);
            closestPoint = arrayOfData[i];
        }
    }
    return closestPoint;
}

console.log(binarySort(5));
