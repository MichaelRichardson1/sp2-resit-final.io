import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import HandleCredits from "../utils/handleCredits";
import LogoutButton from "../utils/logoutButton";

export default function MemberHeader({}) {
  const redirectToIndex = () => {
    
    Router.push("/");

  };

  return (
    <>
      <div className="container-header">
        <div className="row">
          <div className="col">
            <Image src="/images/auction-site-logo.png" alt="logo" width={75} height={75} />
          </div>
          <div className="col">
            <p className="site-name">Digibidder</p>
          </div>
          <div className="col">
            <Link href="/profile">Profile</Link>
          </div>		
          <div className="col">
            <Link href="/members">View Listings</Link>
          </div>
          <div className="col">
            <Link href="/create">Create Listing</Link>
          </div>	
        </div>
        <div className="row">
          <div className="col">
            <HandleCredits />
            <LogoutButton redirectToIndex={redirectToIndex} />
          </div>                    
        </div>
      </div>
    </>
  );
}