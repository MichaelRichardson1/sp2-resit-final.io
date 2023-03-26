import LayoutContainer from '@/components/layout/LayoutContainer';
import HtmlHead from '@/components/layout/HtmlHead';
import Footer from "@/components/layout/Footer";
import Heading from '@/components/typography/Heading';
import MemberHeader from '@/components/layout/MemberHeader';
import AvatarUpdateForm from '@/components/forms/UpdateProfileForm';

export default function LoginPage() {
	return (
		<LayoutContainer>
			<HtmlHead />
			<MemberHeader />
            <Heading content="Profile" />
            <AvatarUpdateForm />
			<Footer />		
		</LayoutContainer>
	);
}