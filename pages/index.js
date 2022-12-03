import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

export default function Home() {
  const TWITTER_HANDLE = 'felipsbreno';
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false },
  );

  const WalletDisconnectButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
    { ssr: false },
  );

  const renderNotConnectedContainer = () => (
    <div className="flex flex-col justify-center items-center p-8">
      <Image
        src="/giphy.webp"
        alt="emoji"
        width={300}
        height={200}
        quality={100}
      />

      <div className="mt-6">
        <WalletMultiButtonDynamic style={{ background: '#e12' }}>
          Conectar a sua Carteira
        </WalletMultiButtonDynamic>

        <WalletDisconnectButtonDynamic style={{ marginTop: 10 }}>
          Desconectar sua carteira
        </WalletDisconnectButtonDynamic>
      </div>
    </div>
  );

  return (
    <div className="h-screen overflow-hidden text-center bg-gray-900">
      <div className="h-full flex flex-col justify-center p-6 relative text-white">
        <div className="m-0 font-bold">
          <p className="text-2xl">🍭 Candy Drop</p>
          <p>Máquina de NFTs com cunhagem justa</p>

          {renderNotConnectedContainer()}
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
