// 스터디 개수를 세어 제목 옆에 보여 줘요
const count = document.querySelectorAll("#list li").length;
document.querySelector("h1").textContent += ` (${count}개)`;
