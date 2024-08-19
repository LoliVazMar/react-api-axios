const Content = ({ info }) => {
  return (
    <>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: info.content }}></p>
      </div>
    </>
  );
};

export default Content;
