export const barGraph = (data, svg) => {
  const width = svg.getAttribute("width");
  const height = svg.getAttribute("height");

  const padding = 50; // Space for labels
  const barHeight = (height - 2 * padding) / data.length;
  const maxXP = Math.max(...data.map((d) => d.xp));
  const scaleX = (width - 2 * padding) / maxXP;

  // Clear previous chart content
  svg.innerHTML = "";

  // Draw axes
  svg.innerHTML += `<line x1="${padding}" y1="${padding}" x2="${padding}" y2="${
    height - padding
  }" stroke="black"/>`; // Y-axis
  svg.innerHTML += `<line x1="${padding}" y1="${height - padding}" x2="${
    width - padding
  }" y2="${height - padding}" stroke="black"/>`; // X-axis

  // X-Axis Labels (XP values)
  for (let i = 0; i <= maxXP; i += 20) {
    let x = padding + i * scaleX;
    svg.innerHTML += `<text x="${x}" y="${
      height - padding + 15
    }" font-size="12" text-anchor="middle">${i} kB</text>`;
    svg.innerHTML += `<line x1="${x}" y1="${height - padding}" x2="${x}" y2="${
      height - padding + 5
    }" stroke="black"/>`;
  }

  // Draw bars
  data.forEach((d, i) => {
    let x = padding;
    let y = padding + i * barHeight + 5;
    let barWidth = d.xp * scaleX;

    // Bar
    svg.innerHTML += `<rect x="${x}" y="${y}" width="${barWidth}" height="${
      barHeight - 20
    }" fill="green"/>`;

    // XP Label inside bars
    svg.innerHTML += `<text x="${x + barWidth - 5}" y="${
      y + (barHeight - 10) / 2 + 5
    }" font-size="12" text-anchor="end" fill="black">${d.xp.toFixed(
      0
    )} kB</text>`;

    // Project label (category names on the left)
    svg.innerHTML += `<text x="${padding + 5}" y="${
      y - 2
    }" font-size="12" text-anchor="start">${d.project}</text>`;
  });
};
