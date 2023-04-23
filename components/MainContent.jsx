import { Component } from "react";
import styles from "../styles/mainContent.module.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.mainContent}>
          <div className={styles.profileImg}>
            <img
              src={this.props.avatar}
              alt={this.props.avatar}
              className={styles.img}
            />
          </div>
          <div className={styles.profileContent}>
            <div className={styles.pContent}>
              <h3>{this.props.userLogin}</h3>
              <h3 className={styles.h3}>{this.props.created}</h3>
            </div>
            <div className={styles.company}>
              <h3 className={styles.h31}>{this.props.userName}</h3>
            </div>
            <div>
              <h3 className={styles.thisProfile}>{this.props.thisProfile}</h3>
            </div>
            <div className={this.props.assets ? styles.followers : styles.none}>
              <section className={styles.follow}>
                <h3 className={styles.following}>{this.props.text_repos}</h3>
                <h3 className={styles.following}>{this.props.repos}</h3>
              </section>
              <section className={styles.follow}>
                <h3 className={styles.following}>
                  {this.props.text_followers}
                </h3>
                <h3 className={styles.following}>{this.props.followers}</h3>
              </section>
              <section className={styles.follow}>
                <h3 className={styles.following}>
                  {this.props.text_following}
                </h3>
                <h3 className={styles.following}>{this.props.following}</h3>
              </section>
            </div>
            <div
              className={this.props.assets ? styles.fullContent : styles.none}
            >
              <div
                className={this.props.assets ? styles.location : styles.none}
              >
                <img
                  src="/images/icons8-marcador-50.png"
                  alt="markerIcon"
                  width={20}
                />
                <h3 className={styles.textlocation}>{this.props.location}</h3>
              </div>
              <div className={this.props.assets ? styles.twitter : styles.none}>
                <img
                  src="/images/icons8-twitter-48.png"
                  alt="twitterIcon"
                  width={20}
                />
                <h3 className={styles.textlocation}>{this.props.twitter}</h3>
              </div>
              <div className={this.props.assets ? styles.blog : styles.none}>
                <img
                  src="/images/icons8-chain-64.png"
                  alt="chainIcon"
                  width={20}
                />
                <h3 className={styles.textlocation}>{this.props.blog}</h3>
              </div>
              <div className={this.props.assets ? styles.depart : styles.none}>
                <img
                  src="/images/icons8-departamento-30.png"
                  alt="departIcon"
                  width={20}
                />
                <h3 className={styles.textlocation}>@github</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
