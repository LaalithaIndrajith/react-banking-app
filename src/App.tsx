import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

export const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar></Navbar>
      </div>
      {/* Hero Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default App;
