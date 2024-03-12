import React from "react";
import Shimmer from "./Shimmer";
import { USERS_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    console.log("CDM");
    const data = await fetch(USERS_API);
    const json = await data.json();

    console.log(json);
    this.setState({
      userData: json,
    });
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  componentWillUnmount() {
    console.log("CWU");
  }

  render() {
    console.log("render");
    if (this.state.userData.length === 0) {
      return <Shimmer />;
    }

    return (
      <>
      <UserContext.Consumer>
        {(data) => <span className="font-semibold text-xl">{data.loggedInUser}</span>}
      </UserContext.Consumer>
        <div className="flex flex-wrap justify-between">
          {this.state.userData.map((items) => {
            return (
              <a
                href={items.html_url}
                className="m-4 p-4 w-56 h-64 hover:bg-gray-200 rounded-lg text-center items-center"
                key={items.id}
              >
                <img className="w-48 rounded-full" src={items.avatar_url} />
                <span className="font-bold mt-2">{items.login}</span>
              </a>
            );
          })}
        </div>
      </>
    );
  }
}

export default User;
