function toggleAnswer(questionElement) {
  const answerElement = questionElement.nextElementSibling;
  const iconElement = questionElement.querySelector('.icon');

  if (answerElement.style.display === 'block') {
      answerElement.style.display = 'none';
      iconElement.textContent = '+';
  } else {
      answerElement.style.display = 'block';
      iconElement.textContent = '-';
  }
}
