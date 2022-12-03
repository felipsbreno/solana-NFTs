import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const TWITTER_HANDLE = 'felipsbreno';
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

  return (
    <div className="h-screen overflow-hidden text-center bg-gray-900">
      <div className="h-full flex flex-col justify-center p-6 relative text-white">
        <div className="m-0 font-bold">
          <p className="text-2xl">🍭 Candy Drop</p>
          <p>Máquina de NFTs com cunhagem justa</p>
        </div>
        <div className="flex justify-center items-center absolute w-full bottom-4 left-0">
          <Link
            className="flex items-center"
            href={TWITTER_LINK}
            target="_blank"
          >
            <Image
              src="/twitter-logo.svg"
              alt="Image logo twitter"
              width={35}
              height={35}
              quality={1000}
            />
            {`feito por @${TWITTER_HANDLE}`}
          </Link>
        </div>
      </div>
    </div>
  );
}
