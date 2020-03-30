let maxX = window.innerWidth - 300;
let maxY = window.innerHeight - 100;
let XYinputs = `
<label>Position X:</label>
<input id="Xput" type="number" min="100" max="${maxX}" value="100"/>
<label>Position: Y</label>
<input id="Yput" type="number" min="100" max="${maxY}" value="100"/>
`;
let colorInput = `
<label for="colorPicker">Select Color:</label>
<input name="colorPicker" type="color" id="colorPicker">
`;

export let circleForm = `
  ${XYinputs}
  <label>Radius</label>
  <input type="range" id="Rput" min="1" max="100" value="50" class="slider" id="myRange">
  ${colorInput}
  <button id="ccSubmit" type="submit">Create Circle</button>
  `;

export let rectangleForm = `
${XYinputs}
<label>Width:</label>
<input id="recWidth" type="number" min="10" max="120" value="10"/>
<label>Height:</label>
<input id="recHeight" type="number" min="10" max="120" value="10"/>
${colorInput}
<button id="ccSubmit" type="submit">Create Rectangle</button>
`;
