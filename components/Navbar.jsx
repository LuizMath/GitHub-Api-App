import { Component } from "react";
import styles from "../styles/navbar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav className={styles.navbar}>
          <section>
            <h1>devfinder</h1>
          </section>
          <div className="mode">
            <section className={styles.section}>
              <h6>LIGHT</h6>
              <img src="/images/icons8-sun-24.png" className={styles.img} />
            </section>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
