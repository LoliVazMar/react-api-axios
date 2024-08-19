const Header = ({ info }) => {
  return (
    <>
      <nav>
        <div>
          <p>Destinatario:</p>
          <p>{info.recipient.address}</p>
          <p>Emisor:</p>
          <p>{info.sender.user}</p>
        </div>
        <div>
          <p>Código: {info.cfscode}</p>
          <p>Estado: {info.history[0].status}</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
