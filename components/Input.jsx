import { Component } from "react";
import styles from "../styles/input.module.css";
import MainContent from "./MainContent";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: false,
      search: "",
      text_repos: "",
      text_followers: "",
      text_following: "",
      repos: "",
      followers: "",
      following: "",
      setSearch: (input) => {
        this.setState({ search: input.target.value });
      },
      user_login: "",
      user_avatar: "",
      created: "",
      user_name: "",
      this_profile: "",
      location: "",
      blog: "",
      twitter: "",
      setUsers: async () => {
        const url = `https://api.github.com/users/${this.state.search}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
          user_login: data.login,
          user_avatar: data.avatar_url,
          created: "Joined " + data.created_at,
          user_name: "@" + data.company,
          this_profile: "This profile has no bio",
          assets: true,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          text_repos: "Repos",
          text_followers: "Followers",
          text_following: "Following",
          location: data.location,
          blog: data.blog,
          twitter: data.twitter_username,
        });
        if (data.twitter_username === null) {
          this.setState({ twitter: "Not Available" });
        }
        if (data.location === null) {
          this.setState({ location: "Not Available" });
        }
        if (data.blog === null || data.blog === "") {
          this.setState({ blog: "Not Available" });
        }
      },
    };
  }
  render() {
    return (
      <>
        <div className={styles.lupe}>
          <img src="/images/icons8-pesquisar-30.png" alt="lupeIcon" />
        </div>
        <div className={styles.div}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search GitHub username"
            onChange={this.state.setSearch}
          />
          <button onClick={this.state.setUsers} className={styles.button}>
            Search
          </button>
        </div>
        <div className="MainContent">
          <MainContent
            avatar={this.state.user_avatar}
            userLogin={this.state.user_login}
            created={this.state.created}
            userName={this.state.user_name}
            thisProfile={this.state.this_profile}
            assets={this.state.assets}
            repos={this.state.repos}
            followers={this.state.followers}
            following={this.state.following}
            text_repos={this.state.text_repos}
            text_followers={this.state.text_followers}
            text_following={this.state.text_following}
            location={this.state.location}
            blog={this.state.blog}
            twitter={this.state.twitter}
          />
        </div>
      </>
    );
  }
}

export default Input;
