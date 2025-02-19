export const barGraph = (data, svg) => {
//   const data = [
//     { project: "A", xp: 30 },
//     { project: "B", xp: 80 },
//     { project: "C", xp: 45 },
//     { project: "D", xp: 60 },
//     { project: "E", xp: 100 },
//   ];

//   const svg = document.getElementById("chart");
  const width = svg.getAttribute("width");
  const height = svg.getAttribute("height");

  const padding = 50; // Space for labels
  const barWidth = (width - 2 * padding) / data.length;
  const maxXP = Math.max(...data.map((d) => d.xp));
  const scaleY = (height - 2 * padding) / maxXP;

  // Draw axes
  svg.innerHTML += `<line x1="${padding}" y1="${height - padding}" x2="${
    width - padding
  }" y2="${height - padding}" stroke="black"/>`; // X-axis
  svg.innerHTML += `<line x1="${padding}" y1="${padding}" x2="${padding}" y2="${
    height - padding
  }" stroke="black"/>`; // Y-axis

  // Y-Axis Labels (XP values)
  for (let i = 0; i <= maxXP; i += 20) {
    let y = height - padding - i * scaleY;
    svg.innerHTML += `<text x="${padding - 10}" y="${
      y + 5
    }" font-size="12" text-anchor="end">${i}</text>`;
    svg.innerHTML += `<line x1="${
      padding - 5
    }" y1="${y}" x2="${padding}" y2="${y}" stroke="black"/>`;
  }

  // Draw bars
  data.forEach((d, i) => {
    let x = padding + i * barWidth + 5;
    let y = height - padding - d.xp * scaleY;
    let barHeight = d.xp * scaleY;

    // Bar
    svg.innerHTML += `<rect x="${x}" y="${y}" width="${
      barWidth - 10
    }" height="${barHeight}" fill="steelblue"/>`;

    // XP Label on top of bars
    svg.innerHTML += `<text x="${x + (barWidth - 10) / 2}" y="${
      y - 5
    }" font-size="12" text-anchor="middle">${d.xp}</text>`;

    // Project label
    svg.innerHTML += `<text x="${x + (barWidth - 10) / 2}" y="${
      height - 30
    }" font-size="12" text-anchor="middle">${d.project}</text>`;
  });

  // X-Axis Label
  svg.innerHTML += `<text x="${width / 2}" y="${
    height - 10
  }" font-size="14" text-anchor="middle" font-weight="bold">Projects</text>`;

  // Y-Axis Label (Rotated)
  svg.innerHTML += `<text x="20" y="${
    height / 2
  }" font-size="14" text-anchor="middle" font-weight="bold" transform="rotate(-90, 20, ${
    height / 2
  })">XP</text>`;
};
