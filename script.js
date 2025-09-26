const stages = [
  "⚡ Error Detected",
  "✅ Debug Complete",
  "🎯 Final Message: ในโค้ดเหมือนในชีวิตจริง… ก่อนจะไปต่อได้ เราต้องเข้าใจ Error ให้ได้ก่อน"
];

let currentStage = 0;
const stageText = document.getElementById("stage-text");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  currentStage++;
  if (currentStage < stages.length) {
    stageText.textContent = stages[currentStage];
  } else {
    nextBtn.disabled = true;
    nextBtn.textContent = "End";
  }
});
