async function getAdvice() {
  const advice = await fetch("https://api.adviceslip.com/advice").then(
    (response) => response.json()
  );
  document.getElementById("id").textContent = advice.slip.id;
  document.getElementById("advice").textContent = `"${advice.slip.advice}"`;
  console.log(advice.slip.id);
}

getAdvice();
