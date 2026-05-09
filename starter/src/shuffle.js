// This function shuffles the flashcards array.
const shuffle = (cards) => {
  const newCardsArray = [...cards];
  let current = cards.length;

  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;

    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current]
    ];
  }

  return newCardsArray;
};

export { shuffle };