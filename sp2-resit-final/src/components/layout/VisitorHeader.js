import Image from "next/image";
import Link from "next/link";

export default function VisitorHeader({}) {
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
                        <Link href="/register">Register</Link>
                    </div>	
                    <div className="col">
                        <Link href="/login">Login</Link>
                    </div>			
                </div>
            </div>
		</>
	);
}