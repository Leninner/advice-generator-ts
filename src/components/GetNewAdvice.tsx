type AdviceCardProps = {
  onClick: () => void;
};

export const GetNewAdvice: React.FC<AdviceCardProps> = ({ onClick }) => {
  return (
    <button
      className='rounded-full bg-[#52FFA8] absolute -bottom-4 w-10 h-10 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-[#52ffa8] duration-200'
      onClick={onClick}>
      <span className='material-icons-outlined'>loop</span>
    </button>
  );
};
