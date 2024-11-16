import { Right } from '@/assets/icon';
import { Profile } from '@/assets/images';

export const Carousel = () => {
  return (
    <div className='bg-[#f5f5fa]'>
      <div className='flex flex-col gap-2 container'>
        <div className='flex flex-col h-36 justify-center'>
          <div className='flex items-center gap-1 text-sm'>
            <h1 className='text-blue-600'>Профайл</h1>
            <Right />
            <h1 className='text-blue-600'>Бичиг баримт</h1>
          </div>
          <h1 className='text-[#002468] text-2xl font-semibold'>
            Бичиг баримт
          </h1>
        </div>
        <div className='relative inset-0 flex justify-center flex-col gpa-5 rounded-xl bg-white h-[600px]'>
          <div className='absolute -top-10 left-[150px] h-20 w-20 rounded-full border-4 border-blue-600 overflow-hidden bg-cover'>
            <Profile />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1>Үндсэн мэдээлэл</h1>
          <div className='flex flex-col gap-2'>
            <h1>Ургийн овог:</h1>
            <p>Кидан</p>
          </div>
        </div>
      </div>
    </div>
  );
};
