// "use client";

// import Image from "next/image";

// interface AvatarProps {
//   src: string | null | undefined;
// }

// const Avatar: React.FC<AvatarProps> = ({ src }) => {
//   return (
//     <Image
//       className="rounded-full"
//       height="30"
//       width="30"
//       alt="Avatar"
//       src={src || "/images/user.jpg"}
//     />
//   );
// };

// export default Avatar;

"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/user.jpg" // Corrected image path
    />
  );
};

export default Avatar;
