import Image from "next/image";
import Link from "next/link";

export default function NoNavHeader({}) {
	return (
		<>
			<div className="container-header">
                <div className="row">
                    <div className="col">
                        <Link href="/"><Image src="../../images/auction-site-logo.png" alt="logo" width={75} height={75} /></Link>
                    </div>
                    <div className="col">
                        <p className="site-name">Digibidder</p>
                    </div>
                </div>
            </div>
		</>
	);
}