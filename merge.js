const fs = require('fs');
const path = require('path');
const dir = __dirname;
const head = fs.readFileSync(path.join(dir, 'app_head.js'), 'utf8');
const txtPath = path.join(dir, 'source.txt');
if (!fs.existsSync(txtPath)) {
  console.error('source.txt がありません。ＰＤＦボタン作成.txt を「source.txt」としてこのフォルダにコピーしてください。');
  process.exit(1);
}
const full = fs.readFileSync(txtPath, 'utf8');
const lines = full.split(/\r?\n/);
const body = lines.slice(6).join('\n').replace('export default App;', 'ReactDOM.render(<App />, document.getElementById("root"));');
fs.writeFileSync(path.join(__dirname, 'app.js'), head + body, 'utf8');
console.log('app.js created');
