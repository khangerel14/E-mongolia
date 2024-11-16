export const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between container h-20 items-center'>
        <button>
          <img
            src='https://e-mongolia.mn/static/assets/22f0de95a94e0ff1f5198e7275ff0813.svg'
            alt='e-mongolia'
          />
        </button>
        <div className='flex flex-col gap-[6px]'>
          <div className='w-6 h-[3px] bg-black rounded-full'></div>
          <div className='w-6 h-[3px] bg-black rounded-full'></div>
          <div className='w-6 h-[3px] bg-black rounded-full'></div>
        </div>
      </div>
    </div>
  );
};
