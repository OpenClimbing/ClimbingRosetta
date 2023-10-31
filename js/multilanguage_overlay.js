// Initialize Konva Stage and Layer

const stage = new Konva.Stage({
    container: 'container',
    width: 400,
    height: 300,
});


function clear_and_draw() {
    const layer = new Konva.Layer();
    stage.clear()
    stage.add(layer);
    const imageObj = new Image();
    imageObj.src = 'https://upload.wikimedia.org/wikipedia/commons/d/da/Klim_gordel.jpg';
    const image = new Konva.Image({
        image: imageObj,
        width: 400,
        height: 300,
    });

    layer.add(image);
    layer.draw();
    // Load the image
    imageObj.onload = () => {
        addTextFromSelectedColumn(layer, textColumnSelect.value)
    };
}

// Handle changing the text column
const textColumnSelect = document.getElementById('textColumnSelect');
textColumnSelect.addEventListener('change', () => {
    clear_and_draw();
});

clear_and_draw();

// Function to add text from the selected column
function addTextFromSelectedColumn(layer, selectedColumn) {
    // Retrieve table data and add text labels based on the selected column
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const textInput = cells[selectedColumn - 1].textContent; // Adjust for 0-based index
        const xPosition = parseInt(cells[2].textContent);
        const yPosition = parseInt(cells[3].textContent);

        if (textInput) {
            const text = new Konva.Text({
                x: xPosition,
                y: yPosition,
                text: textInput,
                fontSize: 20,
                fill: 'black',
            });

            layer.add(text);
            layer.draw();
        }
    }
}
