import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import VisitorHeader from "@/components/layout/VisitorHeader";
import Footer from "@/components/layout/Footer";
import Heading from '@/components/typography/Heading';
import VisitorList from '@/components/listings/VisitorList';
import { LISTINGS_URL } from '@/components/constants/api';
import { useEffect, useState } from "react";

export default function VisitorsPage() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const url = `${LISTINGS_URL}?limit=10&offset=0`;
		fetch(url)
		  .then((response) => response.json())
		  .then((data) => setItems(data))
		  .catch((error) => console.log(error));
	  }, []);
	
	return (
		<LayoutContainer>
			<HtmlHead />
			<VisitorHeader />
			<p className='disclaimer'>Want to place bids or create a listing of your own? Sign up using the 
			Register link and become a member, start off with 1000 credits to use!</p>
			<Heading content="Listings" />
			<VisitorList items={items} />			
			<Footer />		
		</LayoutContainer>
	);
}