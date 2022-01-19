import Blockly from "blockly/core";

const blockName = "isonlynumeric";

const blockData = {
  "message0": "Text %1 is only numeric",
  "args0": [
    {
      "type": "input_value",
      "check": ["String", "Number"],
      "name": "text"
   
    }
  ],
  "output": "Boolean",
  "colour": "#ff3333",
  "tooltip": "",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${text}.match(allowedChars)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
