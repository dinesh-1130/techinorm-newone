// export default function PurpleTransition({ onComplete }) {
//   return (
//     <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
//       <svg width="1200" height="1200" viewBox="0 0 1200 1200" className="scale-150">
//         {Array.from({ length: 10 }).map((_, i) => (
//           <circle
//             key={i}
//             cx="600"
//             cy="600"
//             r={100 + i * 60}
//             fill="none"
//             stroke="#9333ea"
//             strokeWidth="1.5"
//             className="animate-ring"
//             style={{ animationDelay: `${i * 0.15}s` }}
//           />
//         ))}
//       </svg>
     
//     </div>
//   );
// }
export default function PurpleTransition() {
  return (
    <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
      <svg width="1200" height="1200" viewBox="0 0 1200 1200" className="scale-150">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i}
            cx="600"
            cy="600"
            r={100 + i * 60}
            fill="none"
            stroke="#9333ea"
            strokeWidth="1.5"
            className="animate-ring"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
