import HowItWorksHeader from '../../components/HowItWorksHeader/HowItWorksHeader';
import HowItWorksCard from '../../components/HowItWorksCard/HowItWorksCard';
import TruckIcon from '../../components/Icons/TruckIcon';
import CashIcon from '../../components/Icons/CashIcon';
import HubIcon from '../../components/Icons/HubIcon';
import CorporateIcon from '../../components/Icons/CorporateIcon';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Booking Pick & Drop',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            Icon: TruckIcon,
        },
        {
            title: 'Cash On Delivery',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            Icon: CashIcon,
        },
        {
            title: 'Delivery Hub',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            Icon: HubIcon,
        },
        {
            title: 'Booking SME & Corporate',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            Icon: CorporateIcon,
        },
    ];

    return (
        <section className="bg-base-200 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <HowItWorksHeader />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step) => (
                        <HowItWorksCard key={step.title} title={step.title} description={step.description} Icon={step.Icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
