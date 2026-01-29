'use client';

import * as Icons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export type IconName = keyof typeof Icons;

interface AppIconProps {
    name: IconName | string;
    size?: number;
    className?: string;
    solid?: boolean;
}

const AppIcon = ({ name, size = 24, className = '', solid = false }: AppIconProps) => {
    const IconSet = solid ? SolidIcons : Icons;
    // @ts-ignore
    const IconComponent = IconSet[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <IconComponent className={className} style={{ width: size, height: size }} />;
};

export default AppIcon;
