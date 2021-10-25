import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Basket } from './Basket';
import { PetCard } from './PetCard';

export const DragDrop = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* Here, render a component that uses DND inside it */}
      <PetCard />
      <Basket />
    </DndProvider>
  )
}

export default DragDrop;