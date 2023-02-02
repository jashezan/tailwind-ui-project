import Image from 'next/image';

export default function Logo() {
  return (
    <div className='mr-16'>
      <Image src='/logo.svg' alt='logo' width={50} height={50} />
    </div>
  );
}