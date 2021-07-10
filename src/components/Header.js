import logo from './Logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} className="logo" alt="Logo" />
        <p className="header-text">ALGOVIS</p>
      </div>
    </header>
  );
}

export default Header;