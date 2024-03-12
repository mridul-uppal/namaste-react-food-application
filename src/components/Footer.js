import useOnlineStatus from "../utils/useOnlineStatus";

const Footer = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-center bg-orange-100 shadow-lg items-center">
      <div className="m-4 p-4">© 2024 Mridul Uppal</div>
      <div> Online: {onlineStatus ? "🟢" : "🔴"}</div>
    </div>
  );
};

export default Footer;
