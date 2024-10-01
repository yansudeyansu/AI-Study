require('dotenv').config({ path: './.env' });
console.log("API Key:", process.env.OPENAI_API_KEY);
const OpenAI = require('openai');
const readline = require('readline');

// OpenAIインスタンスを作成
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// readlineインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 完了を実行する非同期関数
async function runCompletion(userMessage) {
  try {
    // OpenAI APIを呼び出して応答を取得
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [{ role: "user", content: userMessage }],
    });
    // チャットボットの応答を表示
    console.log("Chatbot:", completion.choices[0].message.content);
  } catch (error) {
    // エラーが発生した場合は詳細を表示
    console.error("Error details:", JSON.stringify(error, null, 2));
  }
}

// ユーザーからの入力を取得する関数
function promptUser() {
  rl.question('You: ', async (userInput) => {
    // ユーザーが退出したい場合のチェック
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
      // 退出メッセージを表示
      console.log("はーーーーーいｗ　さよならーーー　まだねーーーー");
      rl.close(); // readlineインターフェースを閉じる
      return; // 関数を終了
    }

    // ユーザーのメッセージを処理
    await runCompletion(userInput);
    // 再帰的にユーザーへのプロンプトを続ける
    promptUser();
  });
}

// チャットを開始
promptUser();
