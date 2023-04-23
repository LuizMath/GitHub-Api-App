import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <Navbar />
          <Input />
        </div>
      </div>
    </>
  );
};

export default Home;
