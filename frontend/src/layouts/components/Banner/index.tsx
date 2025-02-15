import './styles.css';

const Banner: React.FC<{ src: string }> = ({ src }) => {
  return (
    <section className="header-banner">
      <img src={src} alt="Banner" />
    </section>
  );
};

export default Banner;
