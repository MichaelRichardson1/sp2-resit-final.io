import Link from "next/link";
import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import NoNavHeader from "@/components/layout/NoNavHeader";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
	return (
		<LayoutContainer>
			<HtmlHead />
			<NoNavHeader />
			<div className="row">
				<div className="col"><Link href="/visitors">Visitors</Link></div>				
				<div className="col"><Link href="/login">Members</Link></div>
			</div>			
			<Footer />		
		</LayoutContainer>
	);
}