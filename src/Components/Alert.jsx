const Alert = ({ alert }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAlert({});
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // });
  console.log(alert);
  return (
    <div className={alert.status ? "green" : "red"}>
      <p>{alert.title}</p>
    </div>
  );
};

export default Alert;
