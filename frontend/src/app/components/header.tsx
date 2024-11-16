export const Header = () => {
  return (
    <div className='bg-blue-600'>
      <div className='flex justify-between items-center container h-8 mx-auto'>
        <div className='flex gap-4 text-xs font-normal'>
          <button className='text-white'>Иргэн</button>
          <button className='text-gray-300'>Хуулийн этгээд</button>
          <button className='text-gray-300'>Foreigner</button>
        </div>
        <div>
          <button className='flex w-[34px] h-[23px] bg-[#EFF2F5B3] justify-center items-center rounded-lg'>
            <img
              src='https://e-mongolia.mn/static/assets/95b44a4c62be9aa78c06114b512db2eb.svg'
              alt='sar'
            />
          </button>
        </div>
      </div>
    </div>
  );
};
