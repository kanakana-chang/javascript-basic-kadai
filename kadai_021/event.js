const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    //h2要素を書き換える
    document.getElementById('text').textContent = "ボタンをクリックしました";
  }, 2000);
});
