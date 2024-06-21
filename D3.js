// Example data points
const dataPoints = [100, 420, 230, 850, 560,925]; // Replace this with your data

// Calculate the dimensions
const barHeight = 20;
const barMargin = 1;
const svgWidth = 500;
const svgHeight = dataPoints.length * (barHeight + barMargin);

// Select the SVG container and set its dimensions
const svgContainer = document.getElementById('svgContainer');
svgContainer.setAttribute('width', svgWidth);
svgContainer.setAttribute('height', svgHeight);

// Function to create bars
function createBars(data) {
    data.forEach((value, index) => {
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('class', 'bar');
        bar.setAttribute('x', 0);
        bar.setAttribute('y', index * (barHeight + barMargin));
        bar.setAttribute('width', value * 10); // Scale the width by 10 for visualization
        bar.setAttribute('height', barHeight);
        svgContainer.appendChild(bar);
    });
}

// Create bars based on data points
createBars(dataPoints);
// Create a linear scale for the x-axis
const xScale = d3.scaleLinear()
    .domain([d3.min(dataPoints), d3.max(dataPoints)]) // Input domain
    .range([50, svgWidth]); // Output range
    // Function to create bars and labels within groups
function createBars(data) {
    data.forEach((value, index) => {
        // Create a group element for each data point
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Position the group vertically
        group.setAttribute('transform', `translate(0, ${index * (barHeight + barMargin)})`);
        
        // Create the bar (rect) element
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('class', 'bar');
        bar.setAttribute('x', 0);
        bar.setAttribute('y', 0);
        bar.setAttribute('width', xScale(value)); // Use the linear scale for width
        bar.setAttribute('height', barHeight);
        
        // Create the label (text) element
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('class', 'label');
        label.setAttribute('x', xScale(value) + 5); // Position label slightly to the right of the bar
        label.setAttribute('y', barHeight / 2);
        label.setAttribute('dy', '.35em'); // Vertically center the text
        label.textContent = value; // Set the text content to the data value
        label.setAttribute('text-anchor', 'end'); // Align text to the end of the bar
        label.textContent = value; // Set the text content to the data value
        
        // Append the bar and label to the group
        group.appendChild(bar);
        group.appendChild(label);
        
        // Append the group to the SVG container
        svgContainer.appendChild(group);
    });
}

// Create bars and labels based on data points
createBars(dataPoints);
