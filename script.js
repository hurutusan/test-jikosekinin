const updateButton = document.getElementById('updateButton');
const resultDiv = document.getElementById('result');

const projectId = '1052262702'; // 自分のプロジェクトのIDに置き換える

updateButton.addEventListener('click', () => {
  // 特定のプロジェクトの情報を取得する
  fetch(`https://api.scratch.mit.edu/projects/${projectId}`)
    .then(response => response.json())
    .then(data => {
      // 取得したデータから必要な情報を取り出し、resultDivに表示する
      resultDiv.textContent = `
        プロジェクト名: ${data.title}
        いいね数: ${data.stats.loves}
      `;
    })
    .catch(error => {
      console.error('エラーが発生しました:', error);
    });
});
