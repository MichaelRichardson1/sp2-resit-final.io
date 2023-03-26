import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import Footer from "@/components/layout/Footer";
import Heading from '@/components/typography/Heading';
import MemberList from '@/components/listings/MemberList';
import { LISTINGS_URL } from '@/components/constants/api';
import { useEffect, useState } from "react";
import MemberHeader from '@/components/layout/MemberHeader';

export default function MembersPage() {
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
			<MemberHeader />			
			<Heading content="Listings" />
			<MemberList items={items} />			
			<Footer />		
		</LayoutContainer>
	);
}