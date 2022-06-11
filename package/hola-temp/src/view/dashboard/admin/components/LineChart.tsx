import { useRef } from 'react';

interface IProps {
    className?: string;
    width?: string;
    height?: string;
    autoResize?: boolean;
    chartData: any;
}

export default function LineChart(props: IProps) {
    const { className, width = '100%', height = '350px', autoResize = true } = props;

    const containerDomRef = useRef<HTMLDivElement>(null);
    // useEffect();

    // function initChart() {

    // }

    return <div className={className} style={{ height, width }} ref={containerDomRef} />;
}
