import ParallaxDecor from './ParallaxDecor';
import Header from './Header';
import Footer from './Footer';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: Props) {
  return (
    <>
      <ParallaxDecor />
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}
