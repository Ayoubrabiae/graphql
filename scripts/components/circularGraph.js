export const circularProgressGraph = (skills, percentages, svg) => {
  const centerX = 200,
    centerY = 200,
    radius = 50;
  const gap = 140; // Space between circles

  skills.forEach((skill, i) => {
    const x = centerX + (i % 3) * gap - gap;
    const y = centerY + Math.floor(i / 3) * gap - gap;

    const percentage = percentages[i];
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${
      (circumference * percentage) / 100
    } ${circumference}`;

    // Background circle
    svg.innerHTML += `<circle cx="${x}" cy="${y}" r="${radius}" fill="none" stroke="#ddd" stroke-width="8"/>`;

    // Progress circle
    svg.innerHTML += `<circle cx="${x}" cy="${y}" r="${radius}" fill="none" stroke="green" stroke-width="8" stroke-dasharray="${strokeDasharray}" stroke-dashoffset="0" transform="rotate(-90 ${x} ${y})"/>`;

    // Percentage text
    svg.innerHTML += `<text x="${x}" y="${y}" font-size="18" font-weight="bold" text-anchor="middle" dy="6">${percentage}%</text>`;

    // Skill label
    svg.innerHTML += `<text x="${x}" y="${
      y + radius + 20
    }" font-size="14" text-anchor="middle">${skill}</text>`;
  });
};
