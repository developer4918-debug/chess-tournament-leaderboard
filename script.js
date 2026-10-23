const tableBody = document.querySelector(".leaderboard tbody");

if (tableBody) {
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const scoreA = Number(a.cells[2].textContent.trim()) || 0;
    const scoreB = Number(b.cells[2].textContent.trim()) || 0;

    return scoreB - scoreA;
  });

  const topPieces = ["♔", "♖", "♘"];

  rows.forEach((row, index) => {
    const rankCell = row.cells[0];

    row.classList.remove("top-three");
    rankCell.textContent = index + 1;

    if (index < 3) {
      row.classList.add("top-three");
      rankCell.textContent = topPieces[index];
      rankCell.setAttribute(
        "aria-label",
        `Rank ${index + 1}`
      );
    } else {
      rankCell.removeAttribute("aria-label");
    }

    tableBody.appendChild(row);
  });
}