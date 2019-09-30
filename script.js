
function generateDivs(isDefault = true) {
    const toAdd = document.createDocumentFragment();
    const getID = document.getElementById('inner');
    getID.innerHTML = '';

    let counterStart, counter, counterOne, counterTwo, colorStandart, colorOne, colorTwo, colorSwitch;
    if(isDefault) {
        counterStart = 1;
        counter = 100;
        counterOne = 3;
        counterTwo = 5;
        colorStandart = '#ff0000';
        colorOne = '#00ff00';
        colorTwo = '#0000ff';
        colorSwitch = '#00ffff';
    } else {
        counterStart = document.getElementById('counterStart').value;
        counter = document.getElementById('counter').value;
        counterOne = document.getElementById('counterOne').value;
        counterTwo = document.getElementById('counterTwo').value;
        colorStandart = document.getElementById('colorStandart').value;
        colorOne = document.getElementById('colorOne').value;
        colorTwo = document.getElementById('colorTwo').value;
        colorSwitch = document.getElementById('colorSwitch').value;
    }

    for (let i = counterStart; i <= counter; i++) {
        const newDiv = document.createElement('div');
        newDiv.id = 'id' + i;

        const newSubDiv = document.createElement('div');
        newSubDiv.className = 'box';

        newSubDiv.style.backgroundColor = colorStandart;
        let text = document.createTextNode(i);

        if(i%counterOne === 0) {
            newSubDiv.style.backgroundColor = colorOne;
            text = document.createTextNode(`${i} Fizz`);
        }
        if(i%counterTwo === 0) {
            newSubDiv.style.backgroundColor = colorTwo;
            text = document.createTextNode(`${i} Buzz`);
        }
        if(i%counterOne === 0 && i%counterTwo === 0) {
            newSubDiv.style.backgroundColor = colorSwitch;
            text = document.createTextNode(`${i} FizzBuzz`);
        }
        newDiv.appendChild(newSubDiv);

        const paragraph = document.createElement("span");
        paragraph.appendChild(text);
        newSubDiv.appendChild(paragraph);

        toAdd.appendChild(newDiv);
    }

    getID.appendChild(toAdd);
}
