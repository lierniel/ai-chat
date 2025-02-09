import React, { PropsWithChildren } from 'react';
import { LinearProgress } from '@mui/material';
import cn from 'classnames';
import { TopPanel, TopPanelProps } from '@components/TopPanel';

import './BasePageLayout.css';

export interface BaseLayoutProps extends PropsWithChildren {
    className?: string;
    contentClassName?: string;
    isLoaderVisible?: boolean;
    canGoBack?: TopPanelProps['canGoBack'];
}

export const BasePageLayout: React.FC<BaseLayoutProps> = ({
    className,
    contentClassName,
    isLoaderVisible,
    canGoBack,
    children,
}) => {
    return (
        <section className={cn('base-page-layout', className)}>
            <TopPanel canGoBack={canGoBack} />

            <LinearProgress
                className={cn('base-page-layout--linear-progress', {
                    visible: isLoaderVisible,
                })}
                color="secondary"
            />

            <main className={cn('base-page-layout-content', contentClassName)}>
                {children}
            </main>
        </section>
    );
};

BasePageLayout.displayName = 'BasePageLayout';
