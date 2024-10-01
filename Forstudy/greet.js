// コマンドライン引数を取得
const name = process.argv[2];

// 挨拶関数
function greet(name) {
    if (name) {
        return `Hello, ${name}! Welcome to Node.js.`;
    } else {
        return "Hello! Please provide your name as an argument.";
    }
}

// 結果を表示
console.log(greet(name));