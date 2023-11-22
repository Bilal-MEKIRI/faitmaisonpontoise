import "../styles/button.scss";

import Link from "next/link";

const Button = ({ url, content, blank }) => {
  return (
    <Link href={url} target={blank} className="instagram-btn">
      {content}
    </Link>
  );
};

export default Button;
