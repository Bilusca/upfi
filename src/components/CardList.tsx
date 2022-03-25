import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [image, setImage] = useState<string>('');

  const handleModal = (url: string): void => {
    setImage(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={20}>
        {cards.length > 0 &&
          cards.map(card => (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleModal(card.url)}
            />
          ))}
      </SimpleGrid>
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={image} />
    </>
  );
}
