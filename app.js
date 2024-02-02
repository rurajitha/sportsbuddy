// Sample data for matched users
const matchedUsers = [
  { name: 'John', sports: ['football', 'tennis'], ability: 'advanced' },
  { name: 'Alice', sports: ['basketball'], ability: 'intermediate' },
  
];

function updateProfile() {
  const selectedSports = Array.from(document.getElementById('sports-select').selectedOptions, option => option.value);
  const abilityLevel = document.getElementById('ability-select').value;

  displayMatches(selectedSports, abilityLevel);
}

function displayMatches(sports, ability) {
  const matchesContainer = document.getElementById('matches-container');
  matchesContainer.innerHTML = ''; // Clear previous matches

  matchedUsers.forEach(user => {
    const hasCommonSports = sports.some(sport => user.sports.includes(sport));
    const hasMatchingAbility = user.ability === ability;

    if (hasCommonSports && hasMatchingAbility) {
      const matchCard = document.createElement('div');
      matchCard.classList.add('match-card');
      matchCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>Sports: ${user.sports.join(', ')}</p>
        <p>Ability: ${user.ability}</p>
      `;
      matchesContainer.appendChild(matchCard);
    }
  });
}
