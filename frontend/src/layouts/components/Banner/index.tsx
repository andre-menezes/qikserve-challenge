import './styles.css';

const Banner: React.FC<{ src: string }> = ({ src }) => {
  return (
    <section className="header-banner">
      <div className="header-banner__filter">
        <img src={src} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
