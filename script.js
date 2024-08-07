// script.js

const updateButton = document.getElementById('updateButton');
const resultDiv = document.getElementById('result');

updateButton.addEventListener('click', () => {
  // ScratchのAPIを呼び出す
  fetch('https://api.scratch.mit.edu/users/amedamasan/projects')
    .then(response => response.json())
    .then(data => {
      // 取得したデータから必要な情報を取り出し、resultDivに表示する
      const latestProject = data[0];
      resultDiv.textContent = `最新のプロジェクト: ${latestProject.title} (ID: ${latestProject.id})`;
    })
    .catch(error => {
      console.error('エラーが発生しました:', error);
    });
});
