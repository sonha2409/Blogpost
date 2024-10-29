import React from 'react';

interface DiaryDetailProps {
  params: {
    date: string;
  };
}

// Mark the component as async to properly handle dynamic params
const DiaryDetail = async ({ params }: DiaryDetailProps) => {
  const { date } = params;

  // Placeholder for diary content based on the date
  const diaryContent: { [key: string]: string } = {
    '2023-04-15': 'This is the content of the diary for April 15, 2023.',
    '2023-04-10': 'This is the content of the diary for April 10, 2023.',
    '2023-04-05': 'This is the content of the diary for April 5, 2023.',
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Diary Entry for {date}</h1>
        <p>{diaryContent[date] || 'No diary entry found for this date.'}</p>
      </div>
    </div>
  );
};

export default DiaryDetail;
