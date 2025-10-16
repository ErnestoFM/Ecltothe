import React from 'react';

const ReviewCard = ({ name, date, rating, comment, avatar }) => {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                fill={i < rating ? "currentColor" : "#ccc"} 
                viewBox="0 0 20 20" 
                className="w-4 h-4"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  );
};

export default ReviewCard;