import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import VisitorHeader from "@/components/layout/VisitorHeader";
import Footer from "@/components/layout/Footer";
import ErrorMessage from '@/components/layout/ErrorMessage';
import Heading from '@/components/typography/Heading';
import VisitorList from '@/components/listings/VisitorList';

export default function VisitorsPage() {
	return (
		<LayoutContainer>
			<HtmlHead />
			<VisitorHeader />
			<p className='disclaimer'>Want to place bids or create a listing of your own? Sign up using the 
			Register link and become a member, start off with 1000 credits to use!</p>
			<Heading content="Listings" />
			{errorCode ? <ErrorMessage message={errorCode} /> : <VisitorList items={items} />}			
			<Footer />		
		</LayoutContainer>
	);
}