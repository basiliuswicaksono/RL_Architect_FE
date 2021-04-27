import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/price">Price</Link>
    //     </li>
    //     <li>
    //       <Link to="/about-us">About Us</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        RL Architect
      </Link>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/price">
              Price
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
