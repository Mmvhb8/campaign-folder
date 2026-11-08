alert("Welcome to the Guild of the Silver Dragon!");

const questInput = document.querySelector('#quest-title-input');
const form = document.querySelector('#add-quest-form');
const addedQuestsList = document.querySelector('#added-quests-list');
const completedQuestsList = document.querySelector('#completed-quests-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const questTitle = questInput.value;
    console.log('New quest added:', questTitle);

    const newQuestItem = document.createElement('li');
    newQuestItem.textContent = questTitle;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        const completedQuestItem = document.createElement('li');
        completedQuestItem.textContent = newQuestItem.firstChild.textContent;
        completedQuestItem.classList.add('completed-quest');
        completedQuestsList.appendChild(completedQuestItem);
        newQuestItem.remove();
    });
    
    newQuestItem.appendChild(deleteButton);

    newQuestItem.addEventListener('click', function () {
        newQuestItem.classList.toggle('done');
    });
        
    addedQuestsList.appendChild(newQuestItem);
    questInput.value = '';
 });

const eliteQuestCard = document.getElementById("elite-quest-card");
console.log(eliteQuestCard);
const eliteTitle = eliteQuestCard.querySelector(".elite-mission-title");
console.log("eliteTitle", eliteTitle);
const goblinQuestCard = document.querySelector(".goblin-quest");
console.log(goblinQuestCard);
const goblinTitle = goblinQuestCard.querySelector(".urgent-quest");
console.log("goblinTitle", goblinTitle);

const rescueQuestCard = document.querySelector(".rescue-quest");
console.log(rescueQuestCard);
const rescueTitle = rescueQuestCard.querySelector(".urgent-quest");
console.log("rescueTitle", rescueTitle);

const allQuestCards = document.querySelectorAll(".quest-card");
console.log(allQuestCards);

const thirdQuestCard = allQuestCards[2];
console.log(thirdQuestCard);

const questText = document.querySelector('#quest-text-starter');
questText.textContent = 'Defeat 4 wolves';

questText.innerHTML = 'Defeat <strong>4 wolves</strong>';

const starterQuestCard = document.querySelector('#starter-quest-card');
starterQuestCard.style.backgroundColor = 'darkblue';
starterQuestCard.style.color = 'yellow';

const questLinkStarter = document.querySelector('#quest-link-starter');
questLinkStarter.href = 'https://example.com/wolves';
questLinkStarter.textContent = 'View wolf quest details';
questLinkStarter.style.color = 'lightblue';

const joinGuildButton = document.querySelector('#join-guild');
const joinGuildMessage = document.querySelector('#join-guild-message');

const heroNameInput = document.querySelector('#hero-name');
const heroPreview = document.querySelector('#hero-preview');

function updateHeroPreview() {
    heroPreview.textContent = `Your hero's name is: ${heroNameInput.value}`;
}

heroNameInput.addEventListener('input', updateHeroPreview);

joinGuildButton.addEventListener('click', function () {
    joinGuildMessage.textContent = `Welcome, ${heroNameInput.value}! You have joined the Guild of the Silver Dragon!`;
});

const title = document.getElementById('guild-alert-title');
title.textContent = 'Guild Alert: Dragon sighted near the northern pass!';

console.log('Guild alert script loaded');