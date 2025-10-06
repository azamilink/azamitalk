import { notFound } from 'next/navigation';
import PortfolioDetail from '../components/Pages/PortfolioDetail';
import ServiceDetail from '../components/Pages/ServiceDetail';

async function page(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    switch (slug) {
        case 'service-detail':
            return <ServiceDetail />;
        case 'portfolio-detail':
            return <PortfolioDetail />;
        default:
            return notFound();
    }
}

export default page;
