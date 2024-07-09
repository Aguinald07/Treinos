document.addEventListener('DOMContentLoaded', (event) => {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const responseMessage = document.getElementById('responseMessage');

  yesButton.addEventListener('click', () => {
      responseMessage.textContent = 'Eu sabia que você diria sim! 🥰';
  });

  noButton.addEventListener('click', () => {
      responseMessage.textContent = 'Ah, que pena... 😢';
  });
});