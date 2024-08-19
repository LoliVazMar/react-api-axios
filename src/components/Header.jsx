const Header = ({ info }) => {
  return (
    <>
      <nav className="header">
        <div className="header__data">
          <p>Destinatario:</p>
          <p>{info.recipient.address}</p>
          <p>Emisor:</p>
          <p>{info.sender.user}</p>
        </div>
        <div className="header__info">
          <p>Código: {info.cfscode}</p>
          <p>Estado: {info.history[0].status}</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
