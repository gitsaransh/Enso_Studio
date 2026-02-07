'use client';

import * as Icons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export type IconName = keyof typeof Icons;

interface AppIconProps {
    name: IconName;
    size?: number;
    className?: string;
    solid?: boolean;
}

const AppIcon = ({ name, size = 24, className = '', solid = false }: AppIconProps) => {
    const IconSet = solid ? SolidIcons : Icons;
    const IconComponent = IconSet[name as keyof typeof IconSet];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <IconComponent className={className} style={{ width: size, height: size }} />;
};

export default AppIcon;
