const generateButton = document.querySelector('#numbers-generator');
const evenList = document.querySelector('#even-numbers');
const oddList = document.querySelector('#odd-numbers');


const getRandomNumbers = () => {
    let numbersArray = [];
    let uniqueArray = [];
    let evenNumbers = [];
    let oddNumbers = [];

    const getRandom = () => Math.floor((Math.random() * 100) + 1);

    for (let i = 0; uniqueArray.length < 20; i++) {
        numbersArray.push(getRandom());
        uniqueArray = numbersArray.reduce((total, number) => {
            if (total.indexOf(number) === -1) total.push(number);
            return total;
        }, []);
    }
    uniqueArray.forEach(number => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    });

    const compare = (a, b) => a - b;
    return {
        even: evenNumbers.sort(compare),
        odd: oddNumbers.sort(compare)
    };
}

const showNumbers = () => {
    const numbers = getRandomNumbers();
    evenList.querySelectorAll('*').forEach(n => n.remove())
    oddList.querySelectorAll('*').forEach(n => n.remove())

    numbers.even.forEach(even => {
        const evenNumber = document.createElement('li');
        evenNumber.className = 'sub-column';
        evenNumber.innerText = even;
        evenList.appendChild(evenNumber);
    })
    numbers.odd.forEach(odd => {
        const oddNumber = document.createElement('li');
        oddNumber.className = 'sub-column';
        oddNumber.innerText = odd;
        oddList.appendChild(oddNumber);
    })
}


generateButton.addEventListener('click', showNumbers);