import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import BackToVisitorPageHeader from '@/components/layout/GoBackHeader';
import Footer from "@/components/layout/Footer";
import LoginForm from '@/components/forms/LoginForm';
import Heading from '@/components/typography/Heading';

export default function LoginPage() {
	return (
		<LayoutContainer>
			<HtmlHead />
			<BackToVisitorPageHeader />
            <Heading content="Member's Login" />
            <LoginForm />
			<Footer />		
		</LayoutContainer>
	);
}