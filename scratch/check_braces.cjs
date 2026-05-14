const fs = require('fs');
const content = fs.readFileSync('c:/Users/thaci/.gemini/antigravity/scratch/audiogift/src/style.css', 'utf8');
let stack = [];
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '{') stack.push(i + 1);
    else if (line[j] === '}') {
      if (stack.length === 0) {
        console.log(`Extra closing brace at line ${i + 1}`);
      } else {
        stack.pop();
      }
    }
  }
}
if (stack.length > 0) {
  console.log(`Unclosed braces starting at lines: ${stack.join(', ')}`);
} else {
  console.log('Braces are balanced');
}
