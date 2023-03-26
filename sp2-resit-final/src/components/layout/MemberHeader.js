import Image from "next/image";
import Link from "next/link";
import HandleCredits from "../utils/handleCredits";
import LogoutButton from "../utils/logoutButton";

export default function MemberHeader({}) {
	return (
		<>
			<div className="container-header">
                <div className="row">
                    <div className="col">
                        <Image src="../../images/auction-site-logo.png" alt="logo" width={75} height={75} />
                    </div>
                    <div className="col">
                        <p className="site-name">Digibidder</p>
                    </div>
                    <div className="col">
                        <Link href="/profile"><a>Profile</a></Link>
                    </div>		
                    <div className="col">
                        <Link href="/members"><a>View Listings</a></Link>
                    </div>
                    <div className="col">
                        <Link href="/create"><a>Create Listing</a></Link>
                    </div>	
                </div>
                <div className="row">
                    <div className="col">
                        <HandleCredits />
                        <LogoutButton />
                    </div>                    
                </div>
            </div>
		</>
	);
}