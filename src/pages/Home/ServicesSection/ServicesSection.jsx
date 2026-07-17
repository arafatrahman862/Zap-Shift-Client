import ServicesHeader from '../../../components/ServicesHeader/ServicesHeader';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import TruckIcon from '../../../components/Icons/TruckIcon';
import CashIcon from '../../../components/Icons/CashIcon';
import HubIcon from '../../../components/Icons/HubIcon';
import CorporateIcon from '../../../components/Icons/CorporateIcon';

const ServicesSection = () => {
    const services = [
        {
            title: 'Express & Standard Delivery',
            description:
                'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            Icon: TruckIcon,
        },
        {
            title: 'Nationwide Delivery',
            description:
                'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
            Icon: CashIcon,
        },
        {
            title: 'Fulfillment Solution',
            description:
                'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
            Icon: HubIcon,
        },
        {
            title: 'Cash on Home Delivery',
            description:
                '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
            Icon: CorporateIcon,
        },
        {
            title: 'Parcel Return',
            description:
                'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
            Icon: CorporateIcon,
        },
        {
            title: 'Corporate Service / Contract In Logistics',
            description:
                'Customized corporate services which includes warehouse and inventory management support.',
            Icon: CorporateIcon,
        },
    ];

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-emerald-900 p-8 sm:p-12 shadow-lg">
                    <ServicesHeader eyebrow="Our Services" title="Complete logistics solutions" />

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <div key={s.title} className="p-2">
                                <ServiceCard title={s.title} description={s.description} Icon={s.Icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
