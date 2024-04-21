// format.ts
const preprocessDescription = (description: string) => {
  // Split the description into paragraphs
  const paragraphs = description.split("\n");

  // Format each paragraph

  // Format each paragraph
  const formattedParagraphs: JSX.Element[] = [];

  paragraphs.forEach((paragraph, index) => {
    // Add a div with the paragraph text
    formattedParagraphs.push(
      <div key={index} className="text-sm leading-5">
        {paragraph}
      </div>
    );
  });

  return formattedParagraphs;
};

//   const formattedParagraphs = paragraphs.map((paragraph, index) => (
//     <p key={index} className="text-sm leading-5">
//       {paragraph}
//     </p>
//   ));

//   // Return the formatted paragraphs
//   return formattedParagraphs;
// };

const preprocessBulletPoints = (bulletPoints: string[]) => {
  // Check if bulletPoints is defined and not null
  if (!Array.isArray(bulletPoints)) {
    return null; // Or handle the case where bulletPoints is not an array
  }

  // Format each bullet point
  const formattedBulletPoints = bulletPoints.map((bulletPoint, index) => (
    <li key={index} className="text-sm leading-5">
      {bulletPoint}
    </li>
  ));

  // Return the formatted bullet points as an unordered list
  return <ul>{formattedBulletPoints}</ul>;
};

export { preprocessDescription, preprocessBulletPoints };
