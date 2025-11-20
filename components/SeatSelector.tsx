'use client'

import { useState } from 'react';

export default function SeatSelector() {
    const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

    const seats = Array.from({ length: 6}, (_, i) => i);

    const handleSelect = (seat: number) => {
      setSelectedSeat(seat === selectedSeat ? null : seat);
    };

  return (
    <div className='flex flex-col items-center mt-12 gap-8'>
      <div className='h-3 w-72 bg-gray-700 rounded mb-6'></div>

      <div className='flex gap-4'>
      {seats.map((seat) => (
        <div
          key={seat}
          onClick={() => handleSelect(seat)}
          className={`h-8 w-8 rounded cursor-pointer
                      ${selectedSeat === seat ? 'bg-green-500' : 'bg-gray-800 hover:bg-gray-600'}  
            `}
        />
        ))}
      </div>

      {selectedSeat !== null && (
        <p>Valt säte: {selectedSeat + 1}</p>
      )}
    </div>
  )
}
