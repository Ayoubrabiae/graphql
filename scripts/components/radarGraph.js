export const radarGraph = (skills, percentages, svg) => {
  const centerX = 200,
    centerY = 200,
    radius = 100;
  const numSides = skills.length;

  function polarToCartesian(angle, percentage) {
    const angleRad = (angle - 90) * (Math.PI / 180);
    const r = (percentage / 100) * radius;
    return {
      x: centerX + r * Math.cos(angleRad),
      y: centerY + r * Math.sin(angleRad),
    };
  }

  // Draw grid
  for (let i = 1; i <= 5; i++) {
    let r = (i / 5) * radius;
    let points = "";
    for (let j = 0; j < numSides; j++) {
      let angle = (360 / numSides) * j;
      let { x, y } = polarToCartesian(angle, (i / 5) * 100);
      points += `${x},${y} `;
    }
    svg.innerHTML += `<polygon points="${points}" fill="none" stroke="#ccc"/>`;
  }

  // Draw skill labels
  skills.forEach((skill, i) => {
    let angle = (360 / numSides) * i;
    let { x, y } = polarToCartesian(angle, 110);
    svg.innerHTML += `<text x="${x}" y="${y}" font-size="14" text-anchor="middle">${skill}</text>`;
  });

  // Draw skill area
  let skillPoints = "";
  percentages.forEach((percent, i) => {
    let angle = (360 / numSides) * i;
    let { x, y } = polarToCartesian(angle, percent);
    skillPoints += `${x},${y} `;
  });
  svg.innerHTML += `<polygon points="${skillPoints}" fill="rgba(0, 255, 0, 0.3)" stroke="green" stroke-width="2"/>`;

  // Draw data points with percentage labels
  percentages.forEach((percent, i) => {
    let angle = (360 / numSides) * i;
    let { x, y } = polarToCartesian(angle, percent);

    // Data points
    svg.innerHTML += `<circle cx="${x}" cy="${y}" r="4" fill="green"/>`;

    // Percentage labels
    let labelX = x + (x > centerX ? 10 : -20); // Offset to avoid overlap
    let labelY = y + (y > centerY ? 15 : -5);
    svg.innerHTML += `<text x="${labelX}" y="${labelY}" font-size="12" fill="darkblue">${percent}%</text>`;
  });
};
