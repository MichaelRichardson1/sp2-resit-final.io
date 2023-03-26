import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import Footer from "@/components/layout/Footer";
import RegistrationForm from '@/components/forms/RegistrationForm';
import Heading from '@/components/typography/Heading';
import BackToVisitorPageHeader from '@/components/layout/GoBackHeader';

export default function RegisterPage() {
	return (
		<LayoutContainer>
			<HtmlHead />
			<BackToVisitorPageHeader />
            <Heading content="Registration Form" />
            <RegistrationForm />
			<Footer />		
		</LayoutContainer>
	);
}