import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import marked from 'marked';
import styles from './CardShuffler.module.css';
import cards from './cards';

export default function CardShuffler() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const currentCard = cards[currentCardIndex];

  const handleShuffle = (category) => {
    const filteredCards = cards.filter(card => card.category === category);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    const newCardIndex = cards.indexOf(filteredCards[randomIndex]);
    setCurrentCardIndex(newCardIndex);
  };

  const handleButtonClick = (url) => {
    if (url.startsWith('#')) {
      const cardId = parseInt(url.slice(1), 10);
      const newCardIndex = cards.findIndex(card => card.id === cardId);
      if (newCardIndex !== -1) {
        setCurrentCardIndex(newCardIndex);
      }
    } else {
      window.location.href = url;
    }
  };

  const renderCardContent = (card) => {
    return (
      <>
        {card.subtitleAbove && <h3 className={styles.subtitleAbove}>{card.subtitleAbove}</h3>}
        <h2 className={`${styles.title} ${card.type === 'buttons' ? styles.titleLarge : styles.titleSmall}`}>
          {card.title || 'No Title'}
        </h2>
        {card.subtitleBelow && <h3 className={styles.subtitleBelow}>{card.subtitleBelow}</h3>}
        {card.content && <div dangerouslySetInnerHTML={{ __html: marked(card.content) }} />}
        {card.buttons && card.buttons.length > 0 && (
          <div className={styles.buttons}>
            {card.buttons.map((button, index) => (
              <button key={index} onClick={() => handleButtonClick(button.url)} className={styles.button}>
                {button.text}
              </button>
            ))}
          </div>
        )}
        {card.media && (
          <div className={styles.media}>
            {card.media.includes('youtube') ? (
              <iframe width="100%" height="315" src={card.media} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
            ) : (
              <video width="100%" controls>
                <source src={card.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <img src="/logo-plus-glow.svg" alt="Logo" className={styles.logo} />
      <AnimatePresence>
        <motion.div
          key={cards[currentCardIndex].id}
          className={styles.card}
          initial={{ opacity: 0, transform: 'scale(0.8)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          exit={{ opacity: 0, transform: 'scale(0.8)' }}
          transition={{ duration: 0.5 }}
        >
          {renderCardContent(cards[currentCardIndex])}
        </motion.div>
      </AnimatePresence>
      {currentCard.category && (
        <button onClick={() => handleShuffle(currentCard.category)} className={styles.shuffleButton}>
          Shuffle
        </button>
      )}
    </div>
  );
}
