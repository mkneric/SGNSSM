'use client';

import Banniere from '@/components/Banniere';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
    return (
        <>
            <Banniere />
            <ServicesSection />
            <CallToAction />
            {/* Tu peux ajouter d'autres sections ici ensuite */}
        </>
    );
}
